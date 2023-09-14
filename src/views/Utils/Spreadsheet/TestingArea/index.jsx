import styled from "@emotion/styled";
import { useCallback, useState } from "react";
import DashboardCard from "src/components/shared/DashboardCard";
import { FlexBox } from "src/components/shared/styles";
import { useToken } from "src/hooks";

const CellContainer = styled.div({
  width: "6.5rem",
  height: "2.5rem",
  border: "1px solid black",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "cell",
  position: "relative",
});

const CellLabel = styled.div({
  position: "absolute",
  top: "-2px",
  left: "0px",
  width: "100%",
  textAlign: "center",
  color: "darkblue",
  fontSize: "8px",
});

const CellContent = styled.div({
  position: "absolute",
  top: "14px",
  left: "0px",
  width: "100%",
  textAlign: "center",
});

const StatusCell = function ({ label, children }) {
  return (
    <CellContainer>
      <CellLabel>{label}</CellLabel>
      <CellContent>{children}</CellContent>
    </CellContainer>
  );
};

const TestingArea = ({ state }) => {
  const token = useToken();
  const [keyboard, setKeyBoard] = useState(null);
  const [mouse, setMouse] = useState(null);

  useCallback(() => {
    const keyboardEvent = (e) => setKeyBoard(e);
    const mouseEvent = (e) => setMouse(e);

    document.addEventListener("keydown", keyboardEvent);
    document.addEventListener("mousemove", mouseEvent);

    return () => {
      document.removeEventListener("keydown", keyboardEvent);
      document.removeEventListener("mousemove", mouseEvent);
    };
  }, []);

  return token.decoded.isAdmin ? (
    <DashboardCard sx={{ height: "100%" }} title="Testing Area">
      <FlexBox width="100%" height="100%" gap="0.5rem">
        {/* <StatusCell label="Keyboard">{keyboard && keyboard.key}</StatusCell>
        <StatusCell label="Mouse button">{mouse && mouse.buttons}</StatusCell>
        <StatusCell label="MouseDown">{String(state.mouseDown)}</StatusCell> */}
        <StatusCell label="Hovered">{state.hovered}</StatusCell>

        <StatusCell label="Current Cell">{state.selectedCell.id}</StatusCell>
        <StatusCell label="Highlighted Anchor">
          {state.highlighted.cellAnchor}
        </StatusCell>
        <StatusCell label="Highlighted Cells">
          {state.highlighted.cells.join(",")}
        </StatusCell>
        <StatusCell label="Filler Mode">{String(state.fillerMode)}</StatusCell>
      </FlexBox>
    </DashboardCard>
  ) : null;
};

export default TestingArea;