// import {
//   AppBar,
//   Box,
//   CssBaseline,
//   Drawer,
//   IconButton,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Toolbar,
//   Typography,
//   useMediaQuery,
// } from "@mui/material";
// import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
// import { useState } from "react";
// import MenuIcon from "@mui/icons-material/Menu";
// import Brightness4Icon from "@mui/icons-material/Brightness4";
// import Brightness7Icon from "@mui/icons-material/Brightness7";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import PeopleIcon from "@mui/icons-material/People";
// import SettingsIcon from "@mui/icons-material/Settings";
// import CloseIcon from "@mui/icons-material/Close";
// import { Tiles } from "./Tiles";
// import { ProjectionChart } from "./ProjectionChart";
// import { RevenueChart } from "./RevenueChart";
// import { DashboardTable } from "./DashboardTable";
// const drawerWidth = 240;
// const collapsedWidth = 60;
// export default function Dashboard() {
//   const [mode, setMode] = useState("light");
//   const [leftCollapsed, setLeftCollapsed] = useState(false);
//   const [leftMobileOpen, setLeftMobileOpen] = useState(false);
//   const [rightOpen, setRightOpen] = useState(true);
//   const [rightMobileOpen, setRightMobileOpen] = useState(false);
//   const theme = createTheme({ palette: { mode } });
//   const muiTheme = useTheme();
//   const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));
//   const toggleTheme = () =>
//     setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
//   const menuItems = [
//     { text: "Dashboard", icon: <DashboardIcon /> },
//     { text: "Users", icon: <PeopleIcon /> },
//     { text: "Settings", icon: <SettingsIcon /> },
//   ];
//   const leftDrawerWidth = isMobile
//     ? drawerWidth
//     : leftCollapsed
//     ? collapsedWidth
//     : drawerWidth;
//   const rightDrawerWidth = isMobile ? drawerWidth : rightOpen ? drawerWidth : 0;
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Box sx={{ display: "flex", height: "100vh", width: "100%" }}>
//         <Drawer
//           variant={isMobile ? "temporary" : "permanent"}
//           open={isMobile ? leftMobileOpen : true}
//           onClose={() => setLeftMobileOpen(false)}
//           ModalProps={{ keepMounted: true }}
//           sx={{
//             width: leftDrawerWidth,
//             flexShrink: 0,
//             "& .MuiDrawer-paper": {
//               width: leftDrawerWidth,
//               boxSizing: "border-box",
//               transition: "width 0.3s ease",
//               height: "100vh",
//               overflowX: "hidden",
//               display: "flex",
//               flexDirection: "column",
//             },
//           }}
//         >
//           {isMobile && (
//             <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
//               <IconButton onClick={() => setLeftMobileOpen(false)}>
//                 <CloseIcon sx={{ color: "red" }} />
//               </IconButton>
//             </Box>
//           )}
//           <List sx={{ pt: 1, flex: 1, overflowY: "auto" }}>
//             {menuItems.map((item, index) => (
//               <ListItem key={index} disablePadding>
//                 <ListItemButton
//                   sx={{
//                     justifyContent:
//                       leftCollapsed && !isMobile ? "center" : "initial",
//                     px: 2.5,
//                   }}
//                 >
//                   <ListItemIcon
//                     sx={{
//                       minWidth: 0,
//                       mr: leftCollapsed && !isMobile ? 0 : 3,
//                       justifyContent: "center",
//                     }}
//                   >
//                     {item.icon}
//                   </ListItemIcon>
//                   {(!leftCollapsed || isMobile) && (
//                     <ListItemText primary={item.text} />
//                   )}
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//         </Drawer>
//         <Box
//           component="main"
//           sx={{
//             flexGrow: 1,
//             display: "flex",
//             flexDirection: "column",
//             minHeight: "100vh",
//             transition: "all 0.3s ease",
//           }}
//         >
//           <AppBar
//             position="fixed"
//             sx={{
//               left: isMobile ? 0 : leftDrawerWidth,
//               right: isMobile ? 0 : rightDrawerWidth,
//               width: isMobile
//                 ? "100%"
//                 : `calc(100% - ${leftDrawerWidth + rightDrawerWidth}px)`,
//               transition: "all 0.3s ease",
//             }}
//           >
//             <Toolbar>
//               <IconButton
//                 color="inherit"
//                 edge="start"
//                 onClick={
//                   isMobile
//                     ? () => setLeftMobileOpen(true)
//                     : () => setLeftCollapsed(!leftCollapsed)
//                 }
//                 sx={{ mr: 1 }}
//               >
//                 <MenuIcon />
//               </IconButton>
//               {!leftCollapsed && !isMobile && (
//                 <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
//                   My Dashboard
//                 </Typography>
//               )}
//               <Box sx={{ flexGrow: 1 }} />
//               <IconButton color="inherit" onClick={toggleTheme}>
//                 {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
//               </IconButton>
//               <IconButton
//                 color="inherit"
//                 edge="end"
//                 onClick={
//                   isMobile
//                     ? () => setRightMobileOpen(true)
//                     : () => setRightOpen(!rightOpen)
//                 }
//                 sx={{ ml: 2 }}
//               >
//                 <MenuIcon />
//               </IconButton>
//             </Toolbar>
//           </AppBar>
//           <Toolbar />
//           <Box
//             sx={{ flex: 1, overflow: "auto", p: 2, border: "2px solid red" }}
//           >
//             <Typography>
//               Welcome to your dashboard! Use the sidebars to navigate.
//             </Typography>
//             <Box
//               sx={{
//                 display: { xs: "block", md: "flex" },
//                 gap: 3,
//                 width: "100%",
//                 justifyContent: "space-between",
//               }}
//             >
//               {/* Tile grid (left) */}
//               <Box
//                 sx={{
//                   mr: { md: 0 }, // add margin if needed on larger
//                 }}
//               >
//                 <Tiles />
//               </Box>
//               {/* Chart (right) */}
//               <Box>
//                 <ProjectionChart />
//               </Box>
//             </Box>
//             <DashboardTable />
//           </Box>
//         </Box>
//         <Drawer
//           anchor="right"
//           variant={isMobile ? "temporary" : "permanent"}
//           open={isMobile ? rightMobileOpen : rightOpen}
//           onClose={() => setRightMobileOpen(false)}
//           ModalProps={{ keepMounted: true }}
//           sx={{
//             width: rightDrawerWidth,
//             flexShrink: 0,
//             display: isMobile ? "block" : rightOpen ? "block" : "none",
//             "& .MuiDrawer-paper": {
//               width: rightDrawerWidth,
//               boxSizing: "border-box",
//               transition: "width 0.3s ease",
//               height: "100vh",
//               overflowX: "hidden",
//               display: "flex",
//               flexDirection: "column",
//             },
//           }}
//         >
//           {isMobile && (
//             <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
//               <IconButton onClick={() => setRightMobileOpen(false)}>
//                 <CloseIcon sx={{ color: "red" }} />
//               </IconButton>
//             </Box>
//           )}
//           <List sx={{ pt: 1, flex: 1, overflowY: "auto" }}>
//             <ListItem disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   <DashboardIcon />
//                 </ListItemIcon>
//                 {(rightOpen || isMobile) && (
//                   <ListItemText primary="Notifications" />
//                 )}
//               </ListItemButton>
//             </ListItem>
//             <ListItem disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   <PeopleIcon />
//                 </ListItemIcon>
//                 {(rightOpen || isMobile) && <ListItemText primary="Profile" />}
//               </ListItemButton>
//             </ListItem>
//           </List>
//         </Drawer>
//       </Box>
//     </ThemeProvider>
//   );
// }
import {
  AppBar,
  Box,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import LeftSidebar from "./MainLayout/LeftSideBar";
import RightSidebar from "./MainLayout/RightSidebar";
import { DashboardTable } from "./DashboardTable";
import { RevenueChart } from "./RevenueChart";
import { Tiles } from "./Tiles";
import { ProjectionChart } from "./ProjectionChart";
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
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            transition: "all 0.3s ease",
            width: `calc(100% - ${leftDrawerWidth + rightDrawerWidth}px)`,
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
              display: "flex",
              gap: 4,
              width: "100%",
              justifyContent: "space-between",
              flexWrap: "nowrap",
              overflow: "hidden",
              p: 3,
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: 0,
                minWidth: 0,
                background: "#f7f8fa",
                borderRadius: 4,
                p: 3,
                overflowY: "auto",
                maxHeight: "85vh",
              }}
            >
              <DashboardTable />
            </Box>
            <Box
              sx={{
                width: 320,
                background: "#f7f8fa",
                borderRadius: 4,
                p: 3,
                flexShrink: 0,
                overflow: "hidden",
              }}
            >
              <RevenueChart />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 4,
              width: "100%",
              justifyContent: "space-between",
              flexWrap: "nowrap",
              overflow: "hidden",
              p: 3,
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: 0,
                minWidth: 0,
                background: "#f7f8fa",
                borderRadius: 4,
                p: 3,
                overflowY: "auto",
                maxHeight: "85vh",
              }}
            >
              <Tiles />
            </Box>
            <Box
              sx={{
                width: 320,
                background: "#f7f8fa",
                borderRadius: 4,
                p: 3,
                flexShrink: 0,
                overflow: "hidden",
              }}
            >
              <ProjectionChart />
            </Box>
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
