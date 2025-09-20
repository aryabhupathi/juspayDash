import { useState, useMemo } from "react";
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
  TextField,
  InputAdornment,
} from "@mui/material";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import SearchIcon from "@mui/icons-material/Search";
import LeftSidebar from "./MainLayout/LeftSideBar";
import RightSidebar from "./MainLayout/RightSidebar";
import getTheme from "../theme";
import ViewSidebarOutlinedIcon from "@mui/icons-material/ViewSidebarOutlined";
const drawerWidth = 240;
const collapsedWidth = 60;
export default function Dashboard() {
  const [mode, setMode] = useState("light");
  const [leftCollapsed, setLeftCollapsed] = useState(false);
  const [leftMobileOpen, setLeftMobileOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(true);
  const [rightMobileOpen, setRightMobileOpen] = useState(false);
  const theme = useMemo(() => getTheme(mode), [mode]);
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
            color="primary"
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
                <ViewSidebarOutlinedIcon sx={{ transform: "scaleX(-1)" }} />
              </IconButton>
              <StarOutlineIcon
                sx={{ color: theme.palette.blacklight.main, mr: 1 }}
              />
              {!isMobile && (
                <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
                  My Dashboard
                </Typography>
              )}
              <Box sx={{ flexGrow: 1 }} />
              <TextField
                size="small"
                variant="outlined"
                placeholder="Search..."
                sx={{
                  mr: 2,
                  width: isMobile ? 120 : 250,
                  backgroundColor: "#1C1C1C0D",
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <IconButton color="inherit" onClick={toggleTheme}>
                {mode === "light" ? (
                  <WbSunnyOutlinedIcon />
                ) : (
                  <Brightness4Icon />
                )}
              </IconButton>
              <IconButton color="inherit">
                <ReplayOutlinedIcon
                  sx={{ color: theme.palette.text.primary }}
                />
              </IconButton>
              <IconButton color="inherit">
                <NotificationsOutlinedIcon
                  sx={{ color: theme.palette.text.primary }}
                />
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
                <ViewSidebarOutlinedIcon sx={{ transform: "scaleX(-1)" }} />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Toolbar />
          <Box
            sx={{
              flexGrow: 1,
              overflowY: "auto",
              p: 3,
              bgcolor: "background.default",
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
