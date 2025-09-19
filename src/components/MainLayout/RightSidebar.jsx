// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   IconButton,
//   Box,
//   Avatar,Typography,Divider
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import PeopleIcon from "@mui/icons-material/People";
// import BugReportIcon from "@mui/icons-material/BugReport";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import NotificationsIcon from "@mui/icons-material/Notifications";

// // Sample avatar images/initials
// const contacts = [
//   { name: "Natali Craig", avatar: "https://randomuser.me/api/portraits/women/1.jpg" },
//   { name: "Drew Cano", avatar: "https://randomuser.me/api/portraits/men/2.jpg" },
//   { name: "Orlando Diggs", avatar: "https://randomuser.me/api/portraits/men/3.jpg" },
//   { name: "Andi Lane", avatar: "https://randomuser.me/api/portraits/women/4.jpg" },
//   { name: "Kate Morrison", avatar: "https://randomuser.me/api/portraits/women/5.jpg" },
//   { name: "Koray Okumus", avatar: "https://randomuser.me/api/portraits/men/6.jpg" },
// ];

// const menuItems = [
//   { text: "Notifications", icon: <DashboardIcon /> },
//   { text: "Profile", icon: <PeopleIcon /> },
// ];

// export default function RightSidebar({ isMobile, open, onClose, width }) {
//   return (
//     <Drawer
//       anchor="right"
//       variant={isMobile ? "temporary" : "permanent"}
//       open={open}
//       onClose={onClose}
//       ModalProps={{ keepMounted: true }}
//       sx={{
//         width,
//         flexShrink: 0,
//         display: isMobile ? "block" : open ? "block" : "none",
//         "& .MuiDrawer-paper": {
//           width,
//           boxSizing: "border-box",
//           transition: "width 0.3s ease",
//           height: "100vh",
//           overflowX: "hidden",
//           display: "flex",
//           flexDirection: "column",
//         },
//       }}
//     >
//       {isMobile && (
//         <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
//           <IconButton onClick={onClose}>
//             <CloseIcon sx={{ color: "red" }} />
//           </IconButton>
//         </Box>
//       )}
//       <List sx={{ pt: 1, flex: 1, overflowY: "auto" }}>
//         {menuItems.map((item, index) => (
//           <ListItem key={index} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>{item.icon}</ListItemIcon>
//               <ListItemText primary={item.text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Box
//       sx={{
//         width,
//         background: "#fff",
//         height: "100vh",
//         p: 3,
//         boxSizing: "border-box",
//         display: "flex",
//         flexDirection: "column",
//         gap: 0,
//       }}
//     >
//       {/* Notifications section */}
//       <Typography sx={{ fontWeight: 600, fontSize: 15, mb: 2 }}>
//         Notifications
//       </Typography>
//       <List sx={{ mb: 2, py: 0 }}>
//         <ListItem disableGutters sx={{ alignItems: "flex-start", mb: 1 }}>
//           <Avatar sx={{ bgcolor: "#e3f2fd", mr: 2, width: 32, height: 32 }}>
//             <BugReportIcon fontSize="small" />
//           </Avatar>
//           <Box>
//             <Typography fontSize={13} fontWeight={500}>You have a bug that needs...</Typography>
//             <Typography fontSize={11} color="text.secondary">Just now</Typography>
//           </Box>
//         </ListItem>
//         <ListItem disableGutters sx={{ alignItems: "flex-start", mb: 1 }}>
//           <Avatar sx={{ bgcolor: "#eafbe2", mr: 2, width: 32, height: 32 }}>
//             <PersonAddIcon fontSize="small" />
//           </Avatar>
//           <Box>
//             <Typography fontSize={13} fontWeight={500}>New user registered</Typography>
//             <Typography fontSize={11} color="text.secondary">59 minutes ago</Typography>
//           </Box>
//         </ListItem>
//         <ListItem disableGutters sx={{ alignItems: "flex-start", mb: 1 }}>
//           <Avatar sx={{ bgcolor: "#e3f2fd", mr: 2, width: 32, height: 32 }}>
//             <NotificationsIcon fontSize="small" />
//           </Avatar>
//           <Box>
//             <Typography fontSize={13} fontWeight={500}>You have a bug that needs...</Typography>
//             <Typography fontSize={11} color="text.secondary">12 hours ago</Typography>
//           </Box>
//         </ListItem>
//         <ListItem disableGutters sx={{ alignItems: "flex-start", mb: 1 }}>
//           <Avatar src={contacts[3].avatar} sx={{ mr: 2, width: 32, height: 32 }} />
//           <Box>
//             <Typography fontSize={13} fontWeight={500}>Andi Lane subscribed to you</Typography>
//             <Typography fontSize={11} color="text.secondary">Today, 11:59 AM</Typography>
//           </Box>
//         </ListItem>
//       </List>

//       <Divider sx={{ my: 1 }} />

//       {/* Activities section */}
//       <Typography sx={{ fontWeight: 600, fontSize: 15, mb: 2 }}>
//         Activities
//       </Typography>
//       <List sx={{ mb: 2, py: 0 }}>
//         <ListItem disableGutters sx={{ alignItems: "flex-start", mb: 1 }}>
//           <Avatar src={contacts[0].avatar} sx={{ mr: 2, width: 32, height: 32 }} />
//           <Box>
//             <Typography fontSize={13} fontWeight={500}>You have a bug that needs...</Typography>
//             <Typography fontSize={11} color="text.secondary">Just now</Typography>
//           </Box>
//         </ListItem>
//         <ListItem disableGutters sx={{ alignItems: "flex-start", mb: 1 }}>
//           <Avatar src={contacts[1].avatar} sx={{ mr: 2, width: 32, height: 32 }} />
//           <Box>
//             <Typography fontSize={13} fontWeight={500}>Released a new version</Typography>
//             <Typography fontSize={11} color="text.secondary">9 minutes ago</Typography>
//           </Box>
//         </ListItem>
//         <ListItem disableGutters sx={{ alignItems: "flex-start", mb: 1 }}>
//           <Avatar src={contacts[2].avatar} sx={{ mr: 2, width: 32, height: 32 }} />
//           <Box>
//             <Typography fontSize={13} fontWeight={500}>Submitted a bug</Typography>
//             <Typography fontSize={11} color="text.secondary">12 hours ago</Typography>
//           </Box>
//         </ListItem>
//         <ListItem disableGutters sx={{ alignItems: "flex-start", mb: 1 }}>
//           <Avatar src={contacts[3].avatar} sx={{ mr: 2, width: 32, height: 32 }} />
//           <Box>
//             <Typography fontSize={13} fontWeight={500}>Modified A data in Page X</Typography>
//             <Typography fontSize={11} color="text.secondary">Today, 11:59 AM</Typography>
//           </Box>
//         </ListItem>
//         <ListItem disableGutters sx={{ alignItems: "flex-start", mb: 1 }}>
//           <Avatar src={contacts[4].avatar} sx={{ mr: 2, width: 32, height: 32 }} />
//           <Box>
//             <Typography fontSize={13} fontWeight={500}>Deleted a page in Project X</Typography>
//             <Typography fontSize={11} color="text.secondary">Feb 2, 2023</Typography>
//           </Box>
//         </ListItem>
//       </List>

//       <Divider sx={{ my: 1 }} />

//       {/* Contacts section */}
//       <Typography sx={{ fontWeight: 600, fontSize: 15, mb: 2 }}>
//         Contacts
//       </Typography>
//       <List sx={{ py: 0 }}>
//         {contacts.map(c => (
//           <ListItem key={c.name} disableGutters sx={{ alignItems: "center", mb: 0.5 }}>
//             <Avatar src={c.avatar} sx={{ mr: 2, width: 32, height: 32 }} />
//             <Typography fontSize={13} fontWeight={500}>{c.name}</Typography>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//     </Drawer>
//   );
// }


import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
  Avatar,
  Typography,
  Divider,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import BugReportIcon from "@mui/icons-material/BugReport";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import NotificationsIcon from "@mui/icons-material/Notifications";

// Sample avatar images/initials
const contacts = [
  { name: "Natali Craig", avatar: "https://randomuser.me/api/portraits/women/1.jpg" },
  { name: "Drew Cano", avatar: "https://randomuser.me/api/portraits/men/2.jpg" },
  { name: "Orlando Diggs", avatar: "https://randomuser.me/api/portraits/men/3.jpg" },
  { name: "Andi Lane", avatar: "https://randomuser.me/api/portraits/women/4.jpg" },
  { name: "Kate Morrison", avatar: "https://randomuser.me/api/portraits/women/5.jpg" },
  { name: "Koray Okumus", avatar: "https://randomuser.me/api/portraits/men/6.jpg" },
];

const menuItems = [
  { text: "Notifications", icon: <DashboardIcon /> },
  { text: "Profile", icon: <PeopleIcon /> },
];

export default function RightSidebar({ isMobile, open, onClose, width }) {
  const theme = useTheme();

  return (
    <Drawer
      anchor="right"
      variant={isMobile ? "temporary" : "permanent"}
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
      sx={{
        width,
        flexShrink: 0,
        display: isMobile ? "block" : open ? "block" : "none",
        "& .MuiDrawer-paper": {
          width,
          boxSizing: "border-box",
          transition: "width 0.3s ease",
          height: "100vh",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          bgcolor: theme.palette.background.paper,
          color: theme.palette.text.primary,
        },
      }}
    >
      {isMobile && (
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <IconButton onClick={onClose}>
            <CloseIcon sx={{ color: theme.palette.error.main }} />
          </IconButton>
        </Box>
      )}

      {/* Top menu items */}
      <List sx={{ pt: 1, flex: 1, overflowY: "auto" }}>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              sx={{
                "&:hover": {
                  backgroundColor: theme.palette.action.hover,
                },
              }}
            >
              <ListItemIcon sx={{ color: theme.palette.text.secondary }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: 500,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Scrollable content */}
      <Box
        sx={{
          width,
          height: "100vh",
          p: 3,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: 0,
          bgcolor: theme.palette.background.default,
        }}
      >
        {/* Notifications section */}
        <Typography sx={{ fontWeight: 600, fontSize: 15, mb: 2 }}>
          Notifications
        </Typography>
        <List sx={{ mb: 2, py: 0 }}>
          <ListItem disableGutters sx={{ alignItems: "flex-start", mb: 1 }}>
            <Avatar
              sx={{
                bgcolor: theme.palette.info.light,
                mr: 2,
                width: 32,
                height: 32,
              }}
            >
              <BugReportIcon fontSize="small" />
            </Avatar>
            <Box>
              <Typography fontSize={13} fontWeight={500}>
                You have a bug that needs...
              </Typography>
              <Typography fontSize={11} color="text.secondary">
                Just now
              </Typography>
            </Box>
          </ListItem>
          <ListItem disableGutters sx={{ alignItems: "flex-start", mb: 1 }}>
            <Avatar
              sx={{
                bgcolor: theme.palette.success.light,
                mr: 2,
                width: 32,
                height: 32,
              }}
            >
              <PersonAddIcon fontSize="small" />
            </Avatar>
            <Box>
              <Typography fontSize={13} fontWeight={500}>
                New user registered
              </Typography>
              <Typography fontSize={11} color="text.secondary">
                59 minutes ago
              </Typography>
            </Box>
          </ListItem>
          <ListItem disableGutters sx={{ alignItems: "flex-start", mb: 1 }}>
            <Avatar
              sx={{
                bgcolor: theme.palette.warning.light,
                mr: 2,
                width: 32,
                height: 32,
              }}
            >
              <NotificationsIcon fontSize="small" />
            </Avatar>
            <Box>
              <Typography fontSize={13} fontWeight={500}>
                You have a bug that needs...
              </Typography>
              <Typography fontSize={11} color="text.secondary">
                12 hours ago
              </Typography>
            </Box>
          </ListItem>
          <ListItem disableGutters sx={{ alignItems: "flex-start", mb: 1 }}>
            <Avatar src={contacts[3].avatar} sx={{ mr: 2, width: 32, height: 32 }} />
            <Box>
              <Typography fontSize={13} fontWeight={500}>
                Andi Lane subscribed to you
              </Typography>
              <Typography fontSize={11} color="text.secondary">
                Today, 11:59 AM
              </Typography>
            </Box>
          </ListItem>
        </List>

        <Divider sx={{ my: 1, borderColor: theme.palette.divider }} />

        {/* Activities section */}
        <Typography sx={{ fontWeight: 600, fontSize: 15, mb: 2 }}>
          Activities
        </Typography>
        <List sx={{ mb: 2, py: 0 }}>
          {contacts.slice(0, 5).map((c, i) => (
            <ListItem key={i} disableGutters sx={{ alignItems: "flex-start", mb: 1 }}>
              <Avatar src={c.avatar} sx={{ mr: 2, width: 32, height: 32 }} />
              <Box>
                <Typography fontSize={13} fontWeight={500}>
                  {i === 0
                    ? "You have a bug that needs..."
                    : i === 1
                    ? "Released a new version"
                    : i === 2
                    ? "Submitted a bug"
                    : i === 3
                    ? "Modified A data in Page X"
                    : "Deleted a page in Project X"}
                </Typography>
                <Typography fontSize={11} color="text.secondary">
                  {i === 0
                    ? "Just now"
                    : i === 1
                    ? "9 minutes ago"
                    : i === 2
                    ? "12 hours ago"
                    : i === 3
                    ? "Today, 11:59 AM"
                    : "Feb 2, 2023"}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 1, borderColor: theme.palette.divider }} />

        {/* Contacts section */}
        <Typography sx={{ fontWeight: 600, fontSize: 15, mb: 2 }}>
          Contacts
        </Typography>
        <List sx={{ py: 0 }}>
          {contacts.map((c) => (
            <ListItem key={c.name} disableGutters sx={{ alignItems: "center", mb: 0.5 }}>
              <Avatar src={c.avatar} sx={{ mr: 2, width: 32, height: 32 }} />
              <Typography fontSize={13} fontWeight={500}>
                {c.name}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
