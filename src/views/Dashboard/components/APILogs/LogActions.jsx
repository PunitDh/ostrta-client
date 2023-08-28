import { Button, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import ConfirmationDialog from "src/components/shared/ConfirmationDialog";
import LimitSelect from "src/components/shared/LimitSelect";
import { FlexBox } from "src/components/shared/styles";
import { limits, logTypes, times } from "./constants";

const whiteStyle = {
  color: "white",
  backgroundColor: "transparent",
  ".MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(228, 219, 233, 0.25)",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(228, 219, 233, 0.25)",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(228, 219, 233, 0.25)",
  },
  ".MuiSvgIcon-root ": {
    fill: "white",
  },
};

const LogActions = ({ request, onSelect, onClearLogs }) => {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const handleClose = () => setConfirmOpen(false);

  return (
    <FlexBox gap="0.5rem">
      <ConfirmationDialog
        id="clear-logs-confirmation-dialog"
        keepMounted
        open={confirmOpen}
        onCancel={handleClose}
        onConfirm={onClearLogs}
        title="Clear Logs"
        confirmBtnText="Clear"
        content="Are you sure you want to clear all logs?"
      />
      <Button
        variant="outlined"
        type="button"
        onClick={() => setConfirmOpen(true)}
      >
        Clear
      </Button>
      <Select
        labelId="log-time"
        id="log-time"
        value={request.time}
        size="small"
        name="time"
        onChange={onSelect}
        sx={whiteStyle}
      >
        {times.map((time) => (
          <MenuItem key={time.value} value={time.value}>
            {time.label}
          </MenuItem>
        ))}
      </Select>
      <Select
        labelId="log-type"
        id="log-type"
        value={request.type}
        size="small"
        name="type"
        onChange={onSelect}
        sx={whiteStyle}
      >
        {logTypes.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
      <LimitSelect
        sx={whiteStyle}
        value={request.limit}
        limits={limits}
        onChange={onSelect}
      />
    </FlexBox>
  );
};

export default LogActions;
