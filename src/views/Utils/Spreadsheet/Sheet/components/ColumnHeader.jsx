import { addCellsToHighlight, setHovered, setSelectedColumn } from "../actions";
import { HeaderItem } from "../styles";
import styled from "@emotion/styled";
import { isCtrlKeyPressed } from "../utils/cellUtils";
import CellRange from "../models/CellRange";

const ColumnHeaderItem = styled(HeaderItem)({
  cursor: "s-resize",
  "&:active": {
    backgroundColor: "#555",
    color: "white",
  },
});

const ColumnHeader = ({ state, dispatch, column, onContextMenu }) => {
  const handleClick = (e) => {
    if (isCtrlKeyPressed(e)) {
      const range = CellRange.createFlat(
        `${column}1`,
        `${column}${state.maxRows}`
      ).cellIds;
      dispatch(addCellsToHighlight(range));
    } else if (e.shiftKey) {
      const range = CellRange.createFlat(
        `${column}1`,
        `${column}${state.maxRows}`
      ).cellIds;
    } else {
      dispatch(setSelectedColumn(column));
    }
  };

  const handleMouseOver = (e) => {
    dispatch(setHovered(column))
  }

  return (
    <ColumnHeaderItem
      colSpan={1}
      selected={
        state.selectedCell.column === column ||
        state.highlighted.columns.includes(column)
      }
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onContextMenu={onContextMenu}
    >
      {column}
    </ColumnHeaderItem>
  );
};

export default ColumnHeader;
