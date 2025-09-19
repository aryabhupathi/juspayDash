// import React, { useState, useEffect } from "react";
// import {
//   Drawer,
//   Box,
//   Typography,
//   Avatar,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Tabs,
//   Tab,
//   Collapse,
//   Divider,
//   useTheme,
// } from "@mui/material";
// import {
//   StarOutline,
//   FolderOpen,
//   Dashboard,
//   School,
//   FolderSpecial,
//   Pageview,
//   AccountBox,
//   Group,
//   Article,
//   ChatBubbleOutline,
//   KeyboardArrowLeft,
//   KeyboardArrowRight,
// } from "@mui/icons-material";
// const drawerWidth = 240;
// const collapsedWidth = 60;
// const favorites = {
//   favorites: [
//     { label: "Overview", icon: <StarOutline /> },
//     { label: "Projects", icon: <FolderOpen /> },
//   ],
//   recently: [
//     { label: "Recent 1", icon: <StarOutline /> },
//     { label: "Recent 2", icon: <FolderOpen /> },
//   ],
// };
// const dashboards = [
//   { label: "Default", icon: <Dashboard /> },
//   { label: "eCommerce", icon: <School /> },
//   {
//     label: "Projects",
//     icon: <FolderSpecial />,
//     subItems: [{ label: "Sub Project 1" }, { label: "Sub Project 2" }],
//   },
//   { label: "Online Courses", icon: <Pageview /> },
// ];
// const pages = [
//   {
//     label: "User Profile",
//     icon: <AccountBox />,
//     subItems: [
//       { label: "Overview" },
//       { label: "Projects" },
//       { label: "Campaigns" },
//       { label: "Documents" },
//       { label: "Followers" },
//     ],
//   },
// ];
// const others = [
//   { label: "Account", icon: <AccountBox /> },
//   { label: "Corporate", icon: <Group /> },
//   { label: "Blog", icon: <Article /> },
//   { label: "Social", icon: <ChatBubbleOutline /> },
// ];
// function SidebarList({ items, collapsed, parentKey = "" }) {
//   const [openItems, setOpenItems] = useState({});
//   const handleToggle = (key) => {
//     setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
//   };
//   return (
//     <List dense disablePadding sx={{ pl: parentKey ? 3 : 0 }}>
//       {items.map((item, index) => {
//         const key = `${parentKey}-${item.label || item}`;
//         const hasChildren = item?.subItems?.length > 0;
//         const isOpen = !!openItems[key];
//         if (!item) return null;
//         return (
//           <Box key={key}>
//             <ListItem disablePadding>
//               <ListItemButton
//                 onClick={hasChildren ? () => handleToggle(key) : undefined}
//                 sx={{
//                   justifyContent: collapsed ? "center" : "initial",
//                   px: 2,
//                   py: 1,
//                   "&:hover": {
//                     backgroundColor: "rgba(0,0,0,0.04)",
//                   },
//                 }}
//               >
//                 {!collapsed && (
//                   <ListItemIcon
//                     sx={{
//                       minWidth: 22,
//                       color: "#bbb",
//                       mr: 1,
//                       justifyContent: "center",
//                     }}
//                   >
//                     {isOpen ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//                   </ListItemIcon>
//                 )}
//                 <ListItemIcon
//                   sx={{
//                     minWidth: 0,
//                     mr: collapsed ? 0 : 3,
//                     justifyContent: "center",
//                     color: "#bbb",
//                   }}
//                 >
//                   {item.icon}
//                 </ListItemIcon>
//                 {!collapsed && (
//                   <ListItemText
//                     primary={item.label}
//                     primaryTypographyProps={{ fontSize: 13 }}
//                   />
//                 )}
//               </ListItemButton>
//             </ListItem>
//             {hasChildren && (
//               <Collapse in={isOpen} timeout="auto" unmountOnExit>
//                 <SidebarList
//                   items={item.subItems}
//                   collapsed={collapsed}
//                   parentKey={key}
//                 />
//               </Collapse>
//             )}
//           </Box>
//         );
//       })}
//     </List>
//   );
// }
// export default function LeftSidebar({ collapsed, isMobile, open, onClose }) {
//   const [favTab, setFavTab] = useState(0);
//   const handleTabChange = (event, newValue) => {
//     setFavTab(newValue);
//   };
//   return (
//     <Drawer
//       variant={isMobile ? "temporary" : "permanent"}
//       open={open}
//       onClose={onClose}
//       ModalProps={{ keepMounted: true }}
//       sx={{
//         width: collapsed ? collapsedWidth : drawerWidth,
//         "& .MuiDrawer-paper": {
//           width: collapsed ? collapsedWidth : drawerWidth,
//           boxSizing: "border-box",
//           overflowX: "hidden",
//           background: "#fff",
//           borderRight: "1px solid #f4f5f8",
//           transition: "width 0.3s",
//         },
//       }}
//     >
//       <Box
//         sx={{
//           p: 2,
//           height: "100%",
//           display: "flex",
//           flexDirection: "column",
//           overflowY: "auto",
//           userSelect: "none",
//         }}
//       >
//         <Box
//           sx={{
//             mb: 3,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: collapsed ? "center" : "flex-start",
//           }}
//         >
//           <Avatar
//             src="https://randomuser.me/api/portraits/men/7.jpg"
//             sx={{ width: 36, height: 36, mr: collapsed ? 0 : 1 }}
//           />
//           {!collapsed && (
//             <Typography variant="body1" sx={{ fontWeight: 600 }}>
//               ByeWind
//             </Typography>
//           )}
//         </Box>
//         {!collapsed && (
//           <Box sx={{ mb: 2 }}>
//             <Tabs
//               value={favTab}
//               onChange={handleTabChange}
//               variant="fullWidth"
//               textColor="primary"
//               indicatorColor="primary"
//               sx={{ minHeight: 32, mb: 1 }}
//             >
//               <Tab label="Favorites" sx={{ fontSize: 13, minHeight: 32 }} />
//               <Tab label="Recently" sx={{ fontSize: 13, minHeight: 32 }} />
//             </Tabs>
//             {favTab === 0 && (
//               <SidebarList items={favorites.favorites} collapsed={collapsed} />
//             )}
//             {favTab === 1 && (
//               <SidebarList items={favorites.recently} collapsed={collapsed} />
//             )}
//           </Box>
//         )}
//         {!collapsed && <Divider sx={{ my: 2 }} />}
//         <SidebarList items={dashboards} collapsed={collapsed} />
//         {!collapsed && <Divider sx={{ my: 2 }} />}
//         <SidebarList items={pages} collapsed={collapsed} />
//         {!collapsed && <Divider sx={{ my: 2 }} />}
//         <SidebarList items={others} collapsed={collapsed} />
//       </Box>
//     </Drawer>
//   );
// }


import React, { useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tabs,
  Tab,
  Collapse,
  Divider,
  useTheme,
} from "@mui/material";
import {
  StarOutline,
  FolderOpen,
  Dashboard,
  School,
  FolderSpecial,
  Pageview,
  AccountBox,
  Group,
  Article,
  ChatBubbleOutline,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";

const drawerWidth = 240;
const collapsedWidth = 60;

const favorites = {
  favorites: [
    { label: "Overview", icon: <StarOutline /> },
    { label: "Projects", icon: <FolderOpen /> },
  ],
  recently: [
    { label: "Recent 1", icon: <StarOutline /> },
    { label: "Recent 2", icon: <FolderOpen /> },
  ],
};

const dashboards = [
  { label: "Default", icon: <Dashboard /> },
  { label: "eCommerce", icon: <School /> },
  {
    label: "Projects",
    icon: <FolderSpecial />,
    subItems: [{ label: "Sub Project 1" }, { label: "Sub Project 2" }],
  },
  { label: "Online Courses", icon: <Pageview /> },
];

const pages = [
  {
    label: "User Profile",
    icon: <AccountBox />,
    subItems: [
      { label: "Overview" },
      { label: "Projects" },
      { label: "Campaigns" },
      { label: "Documents" },
      { label: "Followers" },
    ],
  },
];

const others = [
  { label: "Account", icon: <AccountBox /> },
  { label: "Corporate", icon: <Group /> },
  { label: "Blog", icon: <Article /> },
  { label: "Social", icon: <ChatBubbleOutline /> },
];

// function SidebarList({ items, collapsed, parentKey = "" }) {
//   const theme = useTheme();
//   const [openItems, setOpenItems] = useState({});
//   const handleToggle = (key) =>
//     setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));

//   return (
//     <List dense disablePadding sx={{ pl: parentKey ? 2 : 0 }}>
//       {items.map((item) => {
//         const key = `${parentKey}-${item.label || item}`;
//         const hasChildren = item?.subItems?.length > 0;
//         const isOpen = !!openItems[key];
//         if (!item) return null;

//         return (
//           <Box key={key}>
//             <ListItem disablePadding>
//               <ListItemButton
//                 onClick={hasChildren ? () => handleToggle(key) : undefined}
//                 sx={{
//                   justifyContent: collapsed ? "center" : "flex-start",
//                   px: collapsed ? 1 : 2,
//                   py: 0.75,
//                   borderRadius: 1,
//                   "&:hover": {
//                     backgroundColor: theme.palette.action.hover,
//                   },
//                 }}
//               >
//                 {!collapsed && (
//                   <ListItemIcon
//                     sx={{
//                       minWidth: 22,
//                       color: theme.palette.text.secondary,
//                       justifyContent: "left",
//                     }}
//                   >
//                     {isOpen ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//                   </ListItemIcon>
//                 )}
//                 <ListItemIcon
//                   sx={{
//                     minWidth: 0,
//                     mr: collapsed ? 0 : 2,
//                     justifyContent: "center",
//                     color: theme.palette.text.secondary,
//                   }}
//                 >
//                   {item.icon}
//                 </ListItemIcon>
//                 {!collapsed && (
//                   <ListItemText
//                     primary={item.label}
//                     primaryTypographyProps={{
//                       fontSize: 13,
//                       color: theme.palette.text.primary,
//                     }}
//                   />
//                 )}
//               </ListItemButton>
//             </ListItem>
//             {hasChildren && (
//               <Collapse in={isOpen} timeout="auto" unmountOnExit>
//                 <SidebarList
//                   items={item.subItems}
//                   collapsed={collapsed}
//                   parentKey={key}
//                 />
//               </Collapse>
//             )}
//           </Box>
//         );
//       })}
//     </List>
//   );
// }

function SidebarList({ items, collapsed, parentKey = "" }) {
  const theme = useTheme();
  const [openItems, setOpenItems] = useState({});
  const handleToggle = (key) =>
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <List dense disablePadding>
      {items.map((item) => {
        const key = `${parentKey}-${item.label || item}`;
        const hasChildren = item?.subItems?.length > 0;
        const isOpen = !!openItems[key];
        if (!item) return null;

        return (
          <Box key={key}>
            <ListItem disablePadding>
              <ListItemButton
                onClick={hasChildren ? () => handleToggle(key) : undefined}
                sx={{
                  justifyContent: collapsed ? "center" : "flex-start",
                  minHeight: 36,
                  px: collapsed ? 0 : 1,
                  py: 0.25,
                  borderRadius: 0,
                  "&:hover": {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                {/* Expand/Collapse icon (only when not collapsed and has children) */}
                {!collapsed && (
                  <ListItemIcon
                    sx={{
                      minWidth: 20,
                      color: theme.palette.text.secondary,
                      mr: 0.5,
                    }}
                  >
                    {isOpen ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                  </ListItemIcon>
                )}

                {/* Item Icon */}
                <ListItemIcon
                  sx={{
                    minWidth: 20,
                    mr: collapsed ? 0 : 1,
                    color: theme.palette.text.secondary,
                  }}
                >
                  {item.icon}
                </ListItemIcon>

                {/* Label */}
                {!collapsed && (
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: 13,
                      color: theme.palette.text.primary,
                    }}
                  />
                )}
              </ListItemButton>
            </ListItem>

            {hasChildren && (
              <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <SidebarList
                  items={item.subItems}
                  collapsed={collapsed}
                  parentKey={key}
                />
              </Collapse>
            )}
          </Box>
        );
      })}
    </List>
  );
}

export default function LeftSidebar({ collapsed, isMobile, open, onClose }) {
  const theme = useTheme();
  const [favTab, setFavTab] = useState(0);

  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
      sx={{
        width: collapsed ? collapsedWidth : drawerWidth,
        "& .MuiDrawer-paper": {
          width: collapsed ? collapsedWidth : drawerWidth,
          boxSizing: "border-box",
          overflowX: "hidden",
          background: theme.palette.background.paper,
          borderRight: `1px solid ${theme.palette.divider}`,
          transition: "width 0.3s",
        },
      }}
    >
      <Box
        sx={{
          p: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          userSelect: "none",
        }}
      >
        <Box
          sx={{
            mb: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: collapsed ? "center" : "flex-start",
          }}
        >
          <Avatar
            src="https://randomuser.me/api/portraits/men/7.jpg"
            sx={{ width: 36, height: 36, mr: collapsed ? 0 : 1 }}
          />
          {!collapsed && (
            <Typography
              variant="body2"
              sx={{ fontWeight: 600, color: theme.palette.text.primary }}
            >
              ByeWind
            </Typography>
          )}
        </Box>
        {!collapsed && (
          <Box>
            <Tabs
              value={favTab}
              onChange={(_, v) => setFavTab(v)}
              variant="fullWidth"
              textColor="primary"
              indicatorColor="primary"
              sx={{ minHeight: 32 }}
            >
              <Tab label="Favorites" sx={{ fontSize: 13, minHeight: 32 }} />
              <Tab label="Recently" sx={{ fontSize: 13, minHeight: 32 }} />
            </Tabs>
            {favTab === 0 && (
              <SidebarList items={favorites.favorites} collapsed={collapsed} />
            )}
            {favTab === 1 && (
              <SidebarList items={favorites.recently} collapsed={collapsed} />
            )}
          </Box>
        )}
        {!collapsed && <Divider sx={{ my: 1 }} />}
        <SidebarList items={dashboards} collapsed={collapsed} />
        {!collapsed && <Divider sx={{ my: 1 }} />}
        <SidebarList items={pages} collapsed={collapsed} />
        {!collapsed && <Divider sx={{ my: 1 }} />}
        <SidebarList items={others} collapsed={collapsed} />
      </Box>
    </Drawer>
  );
}
