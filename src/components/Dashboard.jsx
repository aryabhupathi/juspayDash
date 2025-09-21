import { useState, useMemo, useEffect } from "react";
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
export default function Dashboard({ mode, setMode }) {
  const [lopen, setlOpen] = useState(false);
  const [ropen, setrOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [leftMobileOpen, setLeftMobileOpen] = useState(false);
  const [rightMobileOpen, setRightMobileOpen] = useState(false);
  const [leftCollapsed, setLeftCollapsed] = useState(() => {
    return localStorage.getItem("leftDrawerOpen") === "closed";
  });
  const [rightOpen, setRightOpen] = useState(() => {
    return localStorage.getItem("rightDrawerOpen") === "open";
  });
  useEffect(() => {
    localStorage.setItem("leftDrawerOpen", leftCollapsed ? "closed" : "open");
  }, [leftCollapsed]);
  useEffect(() => {
    localStorage.setItem("rightDrawerOpen", rightOpen ? "open" : "closed");
  }, [rightOpen]);
  const theme = useMemo(() => getTheme(mode), [mode]);
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));
  const isTab = useMediaQuery(muiTheme.breakpoints.down("md"));
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
              backgroundColor:
                theme.palette.mode === "dark"
                  ? theme.palette.black.main
                  : theme.palette.primary.main,
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
                <ViewSidebarOutlinedIcon
                  fontSize="medium"
                  onClick={() => setlOpen((prev) => !prev)}
                  sx={{
                    transform: lopen ? "scaleX(-1)" : "scaleX(1)",
                    transition: "transform 0.3s ease-in-out",
                    color: (theme) => theme.palette.info.main,
                    bgcolor: (theme) => theme.palette.tilelight.main,
                    border: "2px solid grey",
                    borderRadius: "10px",
                    p: "2px",
                  }}
                />
              </IconButton>
              <StarOutlineIcon fontSize="small" sx={{ mr: 1 }} />
              {!isMobile && !isTab && (
                <Box sx={{ display: "flex", padding: 2, alignItems: "center" }}>
                  <Typography variant="body2" noWrap sx={{ flexGrow: 1 }}>
                    Dashboard
                  </Typography>
                  <Typography variant="body2" noWrap sx={{ mx: 1 }}>
                    /
                  </Typography>
                  <Typography variant="body2" noWrap sx={{ flexGrow: 1 }}>
                    Default
                  </Typography>
                </Box>
              )}
              <Box sx={{ flexGrow: 1 }} />
              <TextField
                size="small"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                sx={{
                  mr: 2,
                  width: isMobile ? 120 : 250,
                  backgroundColor:
                    theme.palette.mode === "dark"
                      ? "rgba(255, 255, 255, 0.08)"
                      : "#1C1C1C0D",
                  borderRadius: "25px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "25px",
                    "& fieldset": {
                      border: "none",
                    },
                    "&:hover fieldset": {
                      border: "none",
                    },
                    "&.Mui-focused fieldset": {
                      border: "none",
                    },
                  },
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
                  <WbSunnyOutlinedIcon fontSize="small" />
                ) : (
                  <WbSunnyOutlinedIcon fontSize="small" />
                )}
              </IconButton>
              <IconButton color="inherit">
                <ReplayOutlinedIcon
                  fontSize="small"
                  sx={{ color: theme.palette.text.primary }}
                />
              </IconButton>
              <IconButton color="inherit">
                <NotificationsOutlinedIcon
                  fontSize="small"
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
                <ViewSidebarOutlinedIcon
                  fontSize="medium"
                  onClick={() => setrOpen((prev) => !prev)}
                  sx={{
                    transform: ropen ? "scaleX(-1)" : "scaleX(1)",
                    transition: "transform 0.3s ease-in-out",
                    color: (theme) => theme.palette.info.main,
                    bgcolor: (theme) => theme.palette.tilelight.main,
                    border: "2px solid grey",
                    borderRadius: "10px",
                    p: "2px",
                  }}
                />
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
