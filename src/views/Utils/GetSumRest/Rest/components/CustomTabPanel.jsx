import Box from "@mui/material/Box";

export default function CustomTabPanel({
  children,
  value,
  index,
  tabId,
  ...other
}) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${tabId}-tab-${index}`}
      aria-labelledby={`${tabId}-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}