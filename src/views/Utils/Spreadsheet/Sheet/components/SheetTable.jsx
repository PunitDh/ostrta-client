import { Table, TableBody } from "@mui/material";
import SheetRow from "./SheetRow";

const SheetTable = ({ state, dispatch }) => (
  <Table width="100%">
    <TableBody sx={{ display: "table", width: "100%", tableLayout: "fixed" }}>
      {Array(state.maxRows)
        .fill(0)
        .map((_, row) => (
          <SheetRow key={row} state={state} dispatch={dispatch} row={row} />
        ))}
    </TableBody>
  </Table>
);

export default SheetTable;
