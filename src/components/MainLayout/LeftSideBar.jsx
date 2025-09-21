import { useState } from "react";
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
  Tooltip,
  useTheme,
  IconButton,
} from "@mui/material";
import {
  FiberManualRecord,
  KeyboardArrowRight,
  KeyboardArrowDown,
} from "@mui/icons-material";
import {
  StarOutline,
  FolderOpen,
  AccountBox,
  ChatBubbleOutline,
} from "@mui/icons-material";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import { useNavigate, useLocation } from "react-router-dom";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import CloseIcon from "@mui/icons-material/Close";
const drawerWidth = 240;
const collapsedWidth = 60;
const favorites = {
  favorites: [
    { label: "Overview", icon: <StarOutline /> },
    { label: "Projects", icon: <FolderOpen />, path: "/projects" },
  ],
  recently: [
    { label: "Recent 1", icon: <StarOutline /> },
    { label: "Recent 2", icon: <FolderOpen /> },
  ],
};
const dashboards = [
  { label: "Default", icon: <PieChartOutlineIcon /> },
  { label: "eCommerce", icon: <ShoppingBagOutlinedIcon /> },
  {
    label: "Projects",
    icon: <FolderOpenOutlinedIcon />,
    subItems: [{ label: "Sub Project 1" }, { label: "Sub Project 2" }],
  },
  { label: "Online Courses", icon: <MenuBookOutlinedIcon /> },
];
const pages = [
  {
    label: "User Profile",
    icon: <AccountCircleOutlinedIcon />,
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
  { label: "Corporate", icon: <GroupsOutlinedIcon /> },
  { label: "Blog", icon: <ArticleOutlinedIcon /> },
  { label: "Social", icon: <ChatBubbleOutline /> },
];
function SidebarList({
  items,
  collapsed,
  parentKey = "",
  level = 0,
  isMobile,
  isFavorites,
}) {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [openItems, setOpenItems] = useState({});
  const handleToggle = (key) =>
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  const handleClick = (item, key, hasChildren) => {
    if (hasChildren) handleToggle(key);
    else if (item.path) navigate(item.path);
  };
  return (
    <List disablePadding>
      {items.map((item) => {
        if (!item) return null;
        const key = `${parentKey}-${item.label}`;
        const hasChildren = item?.subItems?.length > 0;
        const isOpen = !!openItems[key];
        const isActive = location.pathname === item.path;
        return (
          <Box key={key}>
            <ListItem disablePadding sx={{ position: "relative" }}>
              <Tooltip
                title={collapsed || isMobile ? item.label : ""}
                placement="right"
              >
                <ListItemButton
                  onClick={() => handleClick(item, key, hasChildren)}
                  sx={{
                    justifyContent:
                      collapsed || isMobile ? "center" : "flex-start",
                    minHeight: theme.spacing(4.5),
                    px:
                      collapsed || isMobile ? 0 : theme.spacing(2 + level * 2),
                    pr: theme.spacing(1),
                    bgcolor: isActive
                      ? theme.palette.action.selected
                      : "transparent",
                    "&:hover": { backgroundColor: theme.palette.action.hover },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: collapsed || isMobile ? 0 : 24,
                      mr: isMobile ? 2 : collapsed || isMobile ? 0 : 1,
                      ml: isMobile ? 2 : collapsed || isMobile ? 0 : 1,
                      justifyContent: "center",
                      color: theme.palette.text.secondary,
                      fontSize: "14px",
                    }}
                  >
                    {isFavorites ? (
                      <FiberManualRecord
                        sx={{
                          fontSize: 12,
                          color:
                            theme.palette.mode === "dark"
                              ? theme.palette.blacklight.main
                              : theme.palette.black.main,
                        }}
                      />
                    ) : (
                      item.icon
                    )}
                  </ListItemIcon>
                  {!collapsed && !isMobile && (
                    <ListItemText
                      primary={item.label}
                      slotProps={{
                        primary: {
                          fontWeight: theme.typography.fontWeightMedium,
                          fontSize: "14px",
                          color: theme.palette.text.primary,
                        },
                      }}
                    />
                  )}
                  {isMobile && (
                    <ListItemText
                      primary={item.label}
                      slotProps={{
                        primary: {
                          fontWeight: theme.typography.fontWeightMedium,
                          fontSize: "14px",
                          color: theme.palette.text.primary,
                        },
                      }}
                    />
                  )}
                  {!collapsed &&
                    !isMobile &&
                    hasChildren &&
                    (isOpen ? (
                      <KeyboardArrowDown
                        fontSize="small"
                        sx={{ fontSize: 14 }}
                      />
                    ) : (
                      <KeyboardArrowRight
                        fontSize="small"
                        sx={{ fontSize: 14 }}
                      />
                    ))}
                </ListItemButton>
              </Tooltip>
            </ListItem>
            {!collapsed && hasChildren && (
              <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <SidebarList
                  items={item.subItems}
                  collapsed={collapsed}
                  parentKey={key}
                  level={level + 1}
                  isMobile={isMobile}
                  isFavorites={false}
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
  const navigate = useNavigate();
  const [favTab, setFavTab] = useState(0);
  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
      sx={{
        width: collapsed && !isMobile ? collapsedWidth : drawerWidth,
        "& .MuiDrawer-paper": {
          width: isMobile
            ? drawerWidth
            : collapsed
            ? collapsedWidth
            : drawerWidth,
          boxSizing: "border-box",
          background:
            theme.palette.mode === "dark"
              ? theme.palette.background.default
              : theme.palette.primary.main,
          borderRight: `1px solid ${theme.palette.divider}`,
          transition: "width 0.3s",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box
        sx={{
          p: 2,
          borderBottom: `1px solid ${theme.palette.divider}`,
          display: "flex",
          alignItems: "center",
          justifyContent: collapsed ? "center" : "flex-start",
          flexShrink: 0,
        }}
      >
        <Avatar
          src="https://randomuser.me/api/portraits/men/7.jpg"
          sx={{ width: 30, height: 30, mr: collapsed ? 0 : 1 }}
        />
        {!collapsed && (
          <Typography
            sx={{
              fontSize: theme.typography.body2.fontSize,
            }}
            fontWeight={600}
            color={theme.palette.text.primary}
            onClick={() => {
              navigate("/");
              if (isMobile) onClose();
            }}
          >
            Arya Bhupathi
          </Typography>
        )}
        {isMobile && (
          <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
            <IconButton onClick={onClose}>
              <CloseIcon sx={{ color: theme.palette.error.main }} />
            </IconButton>
          </Box>
        )}
      </Box>
      <Box sx={{ flexGrow: 1, overflowY: "auto", userSelect: "none" }}>
        {!collapsed && (
          <Box>
            <Tabs
              value={favTab}
              onChange={(_, v) => setFavTab(v)}
              variant="fullWidth"
              indicatorColor="primary"
              sx={{
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? theme.palette.background.default
                    : theme.palette.primary.main,
              }}
            >
              <Tab
                label="Overview"
                sx={{
                  color:
                    theme.palette.mode === "dark"
                      ? theme.palette.text.primary
                      : theme.palette.common.black,
                  "&.Mui-selected": {
                    color:
                      theme.palette.mode === "dark"
                        ? theme.palette.common.white
                        : theme.palette.black.main,
                    bgcolor:
                      theme.palette.mode === "dark"
                        ? theme.palette.common.white
                        : theme.palette.tilelight.main,
                  },
                }}
              />
              <Tab
                label="Projects"
                sx={{
                  color:
                    theme.palette.mode === "dark"
                      ? theme.palette.text.primary
                      : theme.palette.common.black,
                  "&.Mui-selected": {
                    color:
                      theme.palette.mode === "dark"
                        ? theme.palette.common.white
                        : theme.palette.black.main,
                    bgcolor:
                      theme.palette.mode === "dark"
                        ? theme.palette.common.white
                        : theme.palette.tilelight.main,
                  },
                }}
              />
            </Tabs>
            {favTab === 0 && (
              <SidebarList
                items={favorites.favorites}
                collapsed={collapsed}
                isMobile={isMobile}
                isFavorites
              />
            )}
            {favTab === 1 && (
              <SidebarList
                items={favorites.recently}
                collapsed={collapsed}
                isMobile={isMobile}
                isFavorites
              />
            )}
          </Box>
        )}
        {!collapsed && <Divider sx={{ my: 1 }} />}
        {!collapsed && !isMobile && (
          <Typography variant="body2" ml={2}>
            Dashboards
          </Typography>
        )}
        <SidebarList
          items={dashboards}
          collapsed={collapsed}
          isMobile={isMobile}
        />
        {!collapsed && <Divider sx={{ my: 1 }} />}
        {!collapsed && !isMobile && (
          <Typography variant="body2" ml={2}>
            Pages
          </Typography>
        )}
        <SidebarList items={pages} collapsed={collapsed} isMobile={isMobile} />
        <SidebarList items={others} collapsed={collapsed} isMobile={isMobile} />
      </Box>
    </Drawer>
  );
}
