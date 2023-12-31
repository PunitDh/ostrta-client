import { isNumber } from "../../../../../utils";
import SetExtended, { setOf } from "../../../../../utils/Set";
import { CellId, ColumnId, RowId } from "../types";
import Cell from "./Cell";
import CellData from "./CellData";
import SheetContentData from "./SheetContentData";

type Props = {
  rowAnchor?: null | RowId;
  columnAnchor?: null | ColumnId;
  cellAnchor?: null | CellId;
  cells?: SetExtended<CellId>;
  rows?: SetExtended<RowId>;
  columns?: SetExtended<ColumnId>;
  rangeStart?: null | CellId;
  rangeEnd?: null | CellId;
  multiSelect?: boolean;
  sum?: number | null;
  average?: number | null;
  count?: number | null;
};

export default class Highlight {
  rowAnchor: null | RowId = null;
  columnAnchor: null | ColumnId = null;
  cellAnchor: null | CellId = null;
  cells: SetExtended<CellId> = setOf<CellId>();
  rows: SetExtended<RowId> = setOf<RowId>();
  columns: SetExtended<ColumnId> = setOf<ColumnId>();
  rangeStart: null | CellId = null;
  rangeEnd: null | CellId = null;
  sum: number | null = null;
  average: number | null = null;
  count: number | null = null;
  max: number | null = null;
  min: number | null = null;
  multiSelect: boolean;

  constructor({
    rowAnchor = null,
    columnAnchor = null,
    cellAnchor = null,
    cells = setOf<CellId>(),
    rows = setOf<RowId>(),
    columns = setOf<ColumnId>(),
    rangeStart = null,
    rangeEnd = null,
    multiSelect = false,
  }: Partial<Props> = {}) {
    this.rowAnchor = rowAnchor;
    this.columnAnchor = columnAnchor;
    this.cellAnchor = cellAnchor;
    this.cells = cells;
    this.rows = rows;
    this.columns = columns;
    this.rangeStart = rangeStart;
    this.rangeEnd = rangeEnd;
    this.multiSelect = multiSelect;
  }

  get length(): number {
    return this.cells.length;
  }

  get hasLength(): Boolean {
    return this.cells.length > 1;
  }

  get first(): CellId {
    return this.cells.first();
  }

  get second(): CellId {
    return this.cells.second();
  }

  get last(): CellId {
    return this.cells.last();
  }

  lastNotEmpty(sheetContentData: SheetContentData): Cell {
    const cells = [...this.cells];
    let last = cells[0];
    for (let i = 0; i < cells.length; i++) {
      const cellData: CellData | undefined = sheetContentData[cells[i]];
      if (cellData?.isNotEmpty()) {
        last = cells[i];
      }
    }
    return new Cell(last);
  }

  includes(cellId: CellId): Boolean {
    return this.cells.has(cellId);
  }

  setRowAnchor(row: RowId): Highlight {
    this.rowAnchor = row;
    return this;
  }

  setColumnAnchor(column: ColumnId): Highlight {
    this.columnAnchor = column;
    return this;
  }

  setCellAnchor(cellId: CellId | null): Highlight {
    this.cellAnchor = cellId;
    return this;
  }

  setRangeStart(cellId: CellId): Highlight {
    this.rangeStart = cellId;
    return this;
  }

  setRangeEnd(cellId: CellId): Highlight {
    this.rangeEnd = cellId;
    return this;
  }

  setMultiSelect(multiSelect: boolean): Highlight {
    this.multiSelect = multiSelect;
    return this;
  }

  setCells(
    cellIds: SetExtended<CellId>,
    sheetContentData: SheetContentData
  ): Highlight {
    this.cells = setOf<CellId>(cellIds);
    this.recalculate(sheetContentData);
    return this;
  }

  recalculate(sheetContentData: SheetContentData): Highlight {
    const numbers = this.getNumbers(sheetContentData);
    this.calculateSum(numbers);
    this.calculateAverage(numbers);
    this.calculateCount(sheetContentData);
    this.calculateMax(numbers);
    this.calculateMin(numbers);
    return this;
  }

  setRows(rowIds: SetExtended<RowId>): Highlight {
    this.rows = rowIds;
    return this;
  }

  setColumns(columnIds: SetExtended<ColumnId>): Highlight {
    this.columns = columnIds;
    return this;
  }

  addCellAndRecalculate(
    cellId: CellId,
    sheetContentData: SheetContentData
  ): Highlight {
    const cell = new Cell(cellId);
    const rowsSet = setOf<RowId>(this.rows);
    const columnsSet = setOf<ColumnId>(this.columns);
    const cellsSet = setOf<CellId>(this.cells);
    cellsSet.add(cell.id);
    rowsSet.add(cell.row);
    columnsSet.add(cell.column);
    this.cells = cellsSet;
    this.rows = rowsSet;
    this.columns = columnsSet;
    this.recalculate(sheetContentData);
    return this;
  }

  calculateSum(numbers: number[]): Highlight {
    if (this.hasLength) {
      const sum = numbers.reduce((acc, cur) => acc + cur || 0, 0);
      this.sum = Number(sum);
    } else {
      this.sum = null;
    }
    return this;
  }

  calculateAverage(numbers: number[]): Highlight {
    if (this.hasLength) {
      const average = Number(this.sum) / (numbers.length || 1);
      this.average = average;
    } else {
      this.average = null;
    }
    return this;
  }

  /**
   *
   * @param {Object} sheetContentData
   * @returns {Highlight}
   */
  calculateCount(sheetContentData: SheetContentData): Highlight {
    if (this.hasLength) {
      const count = this.cells
        .toArray()
        .filter((cell) =>
          Boolean(sheetContentData[cell]?.value?.toString())
        ).length;
      this.count = count;
    } else {
      this.count = null;
    }
    return this;
  }

  calculateMax(numbers: number[]) {
    if (this.hasLength) {
      this.max = Math.max(...numbers);
    } else {
      this.count = null;
    }
    return this;
  }

  calculateMin(numbers: number[]) {
    if (this.hasLength) {
      this.min = Math.min(...numbers);
    } else {
      this.min = null;
    }
    return this;
  }

  private getNumbers(sheetContentData: SheetContentData): number[] {
    return this.cells
      .toArray()
      .filter((cell) => isNumber(sheetContentData[cell]?.value))
      .map((cell) => parseFloat(sheetContentData[cell]?.value));
  }
}
