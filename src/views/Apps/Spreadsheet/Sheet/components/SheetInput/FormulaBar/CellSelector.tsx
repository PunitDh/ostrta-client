import { useEffect, useMemo, useState } from "react";
import { FlexForm, SmallInputField } from "../../styles";
import useEventHandler from "../../../hooks/useEventHandler";
import { State } from "../../../types";

type Props = {
  state: State;
};

const CellSelector = ({ state }: Props) => {
  const { id: selectedId } = state.selectedCell;
  const cellSelectorValue = useMemo<string>(
    () =>
      state.highlighted.hasLength && state.mouseDown
        ? `${state.highlighted.rows.length}R × ${state.highlighted.columns.length}C`
        : selectedId,
    [
      state.highlighted.columns.length,
      state.highlighted.hasLength,
      state.highlighted.rows.length,
      state.mouseDown,
      selectedId,
    ]
  );

  const eventHandler = useEventHandler();
  const [currentCellSelectorValue, setCurrentCellSelectorValue] =
    useState<string>(cellSelectorValue);

  const handleSelectCellSubmit = (e: React.FormEvent) =>
    eventHandler.handleSelectCellSubmit(e);

  const handleSelectCell = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    e.preventDefault();
    setCurrentCellSelectorValue(value);
    eventHandler.handleSelectCell(value);
  };

  useEffect(() => {
    setCurrentCellSelectorValue(selectedId);
    console.log("Cell selector current input value hook triggered");
  }, [selectedId]);

  return (
    <FlexForm paddingRight="0rem" onSubmit={handleSelectCellSubmit}>
      <SmallInputField
        name="currentCell"
        type="text"
        value={currentCellSelectorValue}
        onChange={handleSelectCell}
        autoComplete="off"
        id="current-cell"
        tabIndex={2}
        list="cells"
      />
      <datalist id="cells">
        {state.sheets[state.activeSheet].content.namedRanges &&
          Object.keys(state.sheets[state.activeSheet].content.namedRanges).map(
            (range) => (
              <option key={range} value={range}>
                {range}
              </option>
            )
          )}
      </datalist>
    </FlexForm>
  );
};

export default CellSelector;
