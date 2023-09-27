import { SheetAction } from "./actions";
import Cell from "./models/Cell";
import Highlight from "./models/Highlight";
import SheetContent from "./models/SheetContent";
import SetExtended from "../../../../utils/Set";
import CellData from "./models/CellData";

export type State = {
  maxRows: number;
  maxColumns: number;
  inputRef: HTMLInputElement | null;
  fillerRef: HTMLElement | null;
  formulaFieldRef: HTMLElement | null;
  defaultRowHeight: number;
  defaultColumnWidth: number;
  maxUndos: number;
  selectedCell: Cell;
  formulaMode: boolean;
  hovered: string;
  highlighted: Highlight;
  activeSheet: string;
  sheets: { [key: string]: Sheet };
  formulaTrackedCells: SetExtended<string>;
  formulaHighlighted: SetExtended<string>;
  // initialContent: StateContent;
  // content: StateContent;
  mouseDown: boolean;
  dragging: boolean;
  fillerMode: boolean;
  formulaFieldText: string;
  isFormulaFieldFocused: boolean;
  menuAnchorElement: HTMLElement | null;
  memento: Memento[];
  currentMementoId: string | null;
};

export type Action = {
  type: SheetAction;
  payload?: any;
};

export type SheetProps = {
  maxRows?: number;
  maxColumns?: number;
  maxUndos?: number;
  activeSheet?: string | null;
  toolbar?: boolean;
  formulaField?: boolean;
  statusField?: boolean;
  initialData?: { [key: string]: CellData };
  defaultRowHeight?: number;
  defaultColumnWidth?: number;
};

export type Sheet = {
  id: string;
  index: number;
  name: string;
  content: SheetContent;
  initialContent: SheetContent;
  protected: boolean;
  password?: string;
};

// export type Memento = {
//   id: string;
//   content: StateContent;
// };

export type Memento = {
  id: string;
  delta: { [key: string]: any };
};

export type CellValue = string | number | null;

export type CellFormula = string | null;

export type InsertColumnLocation = "left" | "right";
export type InsertRowLocation = "above" | "below";
