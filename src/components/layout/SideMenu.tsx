// Drawer.tsx
import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

interface DrawerProps {
  open: boolean;
  handleDrawerClose: () => void;
}

const DrawerComponent: React.FC<DrawerProps> = ({
  open,
  handleDrawerClose,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <MuiDrawer
      sx={{
        width: open ? drawerWidth : 0,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
        zIndex: 1000,
        transition: theme.transitions.create(["width"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {[{ text: "ADD POST", path: "/add-post" }].map((menu, index) => (
          <ListItem key={menu.text} disablePadding>
            <ListItemButton onClick={() => navigate(menu.path)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={menu.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          { text: "HTML", path: "/get-html" },
          { text: "MARKDOWN", path: "/get-markdown" },
          { text: "TABLE", path: "/get-table" }
        ].map((menu, index) => (
          <ListItem key={menu.text} disablePadding>
            <ListItemButton onClick={() => navigate(menu.path)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={menu.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </MuiDrawer>
  );
};

export default DrawerComponent;
