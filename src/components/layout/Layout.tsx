// Layout.tsx
import React, { useState, ReactNode } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./NavBar";
import SideMenu from "./SideMenu";
import { styled } from "@mui/material/styles";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  width: "100%",
  flexGrow: 1,
  padding: theme.spacing(3),
  paddingTop: 0,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
  margin: "0 auto",
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const drawerWidth = 240;

interface LayoutProps {
  showNav: boolean;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ showNav, children }) => {
  const [open, setOpen] = useState(true);

  const handleDrawerClose = () => {
    setOpen(true);
  };
  const handleDrawer = () => setOpen(!open);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {showNav && <NavBar open={open} handleDrawer={handleDrawer} />}
      {showNav && (
        <SideMenu open={open} handleDrawerClose={handleDrawerClose} />
      )}
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
};

export default Layout;
