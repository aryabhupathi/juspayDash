import { useTheme } from "@mui/material";
import {
  Drawer,
  List,
  ListItem,
  Avatar,
  Box,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import BugReportIcon from "@mui/icons-material/BugReport";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SensorsIcon from "@mui/icons-material/Sensors";
const contacts = [
  {
    name: "Natali Craig",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Drew Cano",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Orlando Diggs",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Andi Lane",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Kate Morrison",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    name: "Koray Okumus",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];
const notifications = [
  {
    icon: <BugReportIcon />,
    color: "blue",
    title: "You have a bug that needs...",
    time: "Just now",
  },
  {
    icon: <PersonAddIcon />,
    color: "tilelight",
    title: "New user registered",
    time: "59 minutes ago",
  },
  {
    icon: <NotificationsIcon />,
    color: "blue",
    title: "System alert",
    time: "12 hours ago",
  },
  {
    icon: <SensorsIcon />,
    color: "tilelight",
    title: "Andi Lane subscribed to you",
    time: "Today, 11:59 AM",
  },
];
const activities = [
  {
    avatar: contacts[0].avatar,
    title: "You have a bug that needs...",
    time: "Just now",
  },
  {
    avatar: contacts[1].avatar,
    title: "Released a new version",
    time: "9 minutes ago",
  },
  {
    avatar: contacts[2].avatar,
    title: "Submitted a bug",
    time: "12 hours ago",
  },
  {
    avatar: contacts[3].avatar,
    title: "Modified A data in Page X",
    time: "Today, 11:59 AM",
  },
  {
    avatar: contacts[4].avatar,
    title: "Deleted a page in Project X",
    time: "Feb 2, 2023",
  },
];
export default function RightSidebar({ isMobile, open, onClose, width }) {
  const theme = useTheme();
  const renderListSection = (title, items) => (
    <>
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: 15,
          mb: 1,
          color: theme.palette.text.primary,
        }}
      >
        {title}
      </Typography>
      <List sx={{ py: 0, mb: 2 }}>
        {items.map((item, idx) => (
          <ListItem
            key={idx}
            disableGutters
            sx={{ alignItems: "flex-start", mb: 1 }}
          >
            <Avatar
              src={item.avatar || ""}
              sx={{
                bgcolor: item.color
                  ? theme.palette[item.color]?.main
                  : "transparent",
                mr: 2,
                width: 32,
                height: 32,
                color: item.color
                  ? theme.palette.black.main
                  : theme.palette.text.primary,
              }}
            >
              {item.icon}
            </Avatar>
            <Box>
              <Typography
                fontSize={13}
                fontWeight={500}
                color={theme.palette.text.primary}
              >
                {item.title}
              </Typography>
              <Typography fontSize={11} color={theme.palette.text.secondary}>
                {item.time}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ my: 1, borderColor: theme.palette.divider }} />
    </>
  );
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
          height: "100vh",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          background:
            theme.palette.mode === "dark"
              ? theme.palette.background.default
              : theme.palette.primary.main,
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
      <Box sx={{ flex: 1, overflowY: "auto", p: 2 }}>
        {renderListSection("Notifications", notifications)}
        {renderListSection("Activities", activities)}
        {renderListSection(
          "Contacts",
          contacts.map((c) => ({ avatar: c.avatar, title: c.name, time: "" }))
        )}
      </Box>
    </Drawer>
  );
}
