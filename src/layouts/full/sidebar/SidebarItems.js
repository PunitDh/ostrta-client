import { useLocation } from "react-router";
import { Box, List } from "@mui/material";
import NavGroup from "./NavGroup";
import { useSelector } from "react-redux";

const SidebarItems = () => {
  const { pathname } = useLocation();
  const pathDirect = pathname;
  const menuItems = useSelector((state) => state.menu);

  return (
    <Box sx={{ px: 3 }}>
      <List sx={{ pt: 0 }} className="sidebarNav">
        {Object.keys(menuItems).map((item) => (
          <NavGroup
            item={item}
            key={item}
            navItems={menuItems[item]}
            pathDirect={pathDirect}
          />
        ))}
      </List>
    </Box>
  );
};
export default SidebarItems;
