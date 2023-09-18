import { useLocation } from "react-router";
import React from "react";
import { useSelector } from "react-redux";
import { Box, List } from "@mui/material";
import NavGroup from "./NavGroup";
import { useToken } from "../../../hooks";

type Props = {
  closeSideBar?: () => void
}

const SidebarItems = ({ closeSideBar }: Props) => {
  const { pathname } = useLocation();
  const menuItems = useSelector((state: any) => state.menu);
  const token = useToken();
  const navGroups = Object.keys(menuItems);

  return (
    <Box sx={{ px: 3 }}>
      <List sx={{ pt: 0 }}>
        {navGroups.map((group) => (
          <NavGroup
            groupName={group}
            key={group}
            navItems={menuItems[group].filter(
              (navItem) => !navItem.restricted || token.decoded?.isAdmin
            )}
            pathDirect={pathname}
            closeSideBar={closeSideBar}
          />
        ))}
      </List>
    </Box>
  );
};

export default SidebarItems;