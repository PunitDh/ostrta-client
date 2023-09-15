import { CloseSharp } from "@mui/icons-material";
import { Button, Tooltip, useTheme } from "@mui/material";
import FlexBox from "../../../../../components/shared/FlexBox";

const Tag = ({ text, onClick }) => {
  const theme = useTheme();
  return (
    <FlexBox
      backgroundColor={theme.palette.primary.light}
      gap="0.5rem"
      marginLeft="0.25rem"
      alignItems="center"
      height="1.5rem"
      border={`1px solid ${theme.palette.primary.main}`}
      borderRadius="3px"
      justifyContent="space-between"
      paddingLeft="2%"
      paddingRight="0.75%"
    >
      {text}
      <Tooltip title="Remove">
        <Button
          type="button"
          variant="text"
          sx={{ minWidth: "unset", padding: 0 }}
          onClick={onClick}
        >
          <CloseSharp />
        </Button>
      </Tooltip>
    </FlexBox>
  );
};

export default Tag;
