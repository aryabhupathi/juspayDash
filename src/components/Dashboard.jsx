import { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
  ThemeProvider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import LeftSidebar from "./MainLayout/LeftSideBar";
import RightSidebar from "./MainLayout/RightSidebar";
import { createTheme } from "@mui/material/styles";
const drawerWidth = 240;
const collapsedWidth = 60;
export default function Dashboard() {
  const [mode, setMode] = useState("light");
  const [leftCollapsed, setLeftCollapsed] = useState(false);
  const [leftMobileOpen, setLeftMobileOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(true);
  const [rightMobileOpen, setRightMobileOpen] = useState(false);
  const theme = createTheme({ palette: { mode } });
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));
  const toggleTheme = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  const leftDrawerWidth = isMobile
    ? drawerWidth
    : leftCollapsed
    ? collapsedWidth
    : drawerWidth;
  const rightDrawerWidth = isMobile ? drawerWidth : rightOpen ? drawerWidth : 0;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", height: "100vh", width: "100%" }}>
        <LeftSidebar
          isMobile={isMobile}
          open={isMobile ? leftMobileOpen : true}
          onClose={() => setLeftMobileOpen(false)}
          collapsed={leftCollapsed}
          width={leftDrawerWidth}
        />
        <Box
          component="main"
          sx={{
            height: "100vh",
            transition: "all 0.3s ease",
            width: isMobile
              ? "100%"
              : `calc(100% - ${leftDrawerWidth + rightDrawerWidth}px)`,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <AppBar
            position="fixed"
            sx={{
              left: isMobile ? 0 : leftDrawerWidth,
              right: isMobile ? 0 : rightDrawerWidth,
              width: isMobile
                ? "100%"
                : `calc(100% - ${leftDrawerWidth + rightDrawerWidth}px)`,
              transition: "all 0.3s ease",
            }}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                edge="start"
                onClick={
                  isMobile
                    ? () => setLeftMobileOpen(true)
                    : () => setLeftCollapsed(!leftCollapsed)
                }
                sx={{ mr: 1 }}
              >
                <MenuIcon />
              </IconButton>
              {!leftCollapsed && !isMobile && (
                <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
                  My Dashboard
                </Typography>
              )}
              <Box sx={{ flexGrow: 1 }} />
              <IconButton color="inherit" onClick={toggleTheme}>
                {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
              </IconButton>
              <IconButton
                color="inherit"
                edge="end"
                onClick={
                  isMobile
                    ? () => setRightMobileOpen(true)
                    : () => setRightOpen(!rightOpen)
                }
                sx={{ ml: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Toolbar />
          <Box
            sx={{
              flexGrow: 1,
              overflowY: "auto",
              p: 3,
              background: theme.palette.background.default,
            }}
          >
            <Outlet />
          </Box>
        </Box>
        <RightSidebar
          isMobile={isMobile}
          open={isMobile ? rightMobileOpen : rightOpen}
          onClose={() => setRightMobileOpen(false)}
          width={rightDrawerWidth}
        />
      </Box>
    </ThemeProvider>
  );
}
