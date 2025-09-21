import { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Typography,
  Chip,
  IconButton,
  Pagination,
  TextField,
  Checkbox,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
  Stack,
  InputAdornment,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
const statusColors = {
  "In Progress": "progress",
  Complete: "complete",
  Pending: "pending",
  Approved: "approved",
  Rejected: "rejected",
};
const initialRows = [
  {
    orderId: "#CM9801",
    user: {
      name: "Natali Craig",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    orderId: "#CM9802",
    user: {
      name: "Kate Morrison",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    orderId: "#CM9803",
    user: {
      name: "Drew Cano",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    orderId: "#CM9804",
    user: {
      name: "Orlando Diggs",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    orderId: "#CM9805",
    user: {
      name: "Andi Lane",
      avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
  {
    orderId: "#CM9806",
    user: {
      name: "Natali Craig",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    orderId: "#CM9807",
    user: {
      name: "Kate Morrison",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    orderId: "#CM9808",
    user: {
      name: "Drew Cano",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    orderId: "#CM9809",
    user: {
      name: "Orlando Diggs",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    orderId: "#CM9810",
    user: {
      name: "Andi Lane",
      avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
];
export default function OrdersTable() {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));
  const handleSelect = (orderId) => {
    setSelected((prev) =>
      prev.includes(orderId)
        ? prev.filter((id) => id !== orderId)
        : [...prev, orderId]
    );
  };
  return (
    <Box p={1} sx={{ width: "100%" }}>
      <Typography
        color={theme.palette.text.primary}
        sx={{ fontSize: theme.typography.body1.fontSize, mb: 1 }}
      >
        Order List
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p={1}
        sx={{
          borderRadius: 2,
          bgcolor:
            theme.palette.mode === "dark"
              ? theme.palette.blacklight.main
              : theme.palette.tilelight.main,
        }}
      >
        <Box display="flex" alignItems="center">
          {[<AddIcon />, <FilterListIcon />, <SwapVertIcon />].map(
            (icon, i) => (
              <IconButton
                key={i}
                size="small"
                sx={{ color: theme.palette.text.primary }}
              >
                {icon}
              </IconButton>
            )
          )}
        </Box>
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
      </Box>
      {!isSmDown ? (
        <TableContainer>
          <Table size="medium">
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    size="small"
                    indeterminate={
                      selected.length > 0 &&
                      selected.length < initialRows.length
                    }
                    checked={
                      initialRows.length > 0 &&
                      selected.length === initialRows.length
                    }
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelected(initialRows.map((row) => row.orderId));
                      } else {
                        setSelected([]);
                      }
                    }}
                    sx={{
                      color: theme.palette.grey[400],
                      "&.Mui-checked": {
                        color: theme.palette.black.main,
                      },
                    }}
                  />
                </TableCell>
                {[
                  "Order ID",
                  "User",
                  "Project",
                  "Address",
                  "Date",
                  "Status",
                ].map((header) => (
                  <TableCell
                    key={header}
                    sx={{
                      color: theme.palette.text.primary,
                      fontSize: theme.typography.caption.fontSize,
                      px: 1,
                    }}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {initialRows.length ? (
                initialRows.map((row) => {
                  const isItemSelected = selected.includes(row.orderId);
                  return (
                    <TableRow
                      key={row.orderId}
                      hover
                      selected={isItemSelected}
                      sx={{
                        "&:hover .row-checkbox": { visibility: "visible" },
                      }}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          onChange={() => handleSelect(row.orderId)}
                          size="small"
                          sx={{
                            color: theme.palette.grey[400],
                            "&.Mui-checked": {
                              color: theme.palette.black.main,
                            },
                          }}
                        />
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: theme.typography.caption.fontSize }}
                      >
                        {row.orderId}
                      </TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center" gap={1}>
                          <Avatar
                            src={row.user.avatar}
                            alt={row.user.name}
                            sx={{ width: 30, height: 30 }}
                          />
                          <Typography
                            noWrap
                            sx={{ fontSize: theme.typography.caption.fontSize }}
                          >
                            {row.user.name}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: theme.typography.caption.fontSize }}
                      >
                        {row.project}
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: theme.typography.caption.fontSize }}
                      >
                        {row.address}
                      </TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center" gap={0.5}>
                          <CalendarTodayOutlinedIcon fontSize="small" />
                          <Typography
                            sx={{ fontSize: theme.typography.caption.fontSize }}
                          >
                            {row.date}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center" gap={1}>
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: "50%",
                              bgcolor:
                                theme.palette[statusColors[row.status]]?.main,
                            }}
                          />
                          <Typography
                            sx={{
                              fontWeight: 500,
                              color:
                                theme.palette[statusColors[row.status]]?.main,
                              fontSize: theme.typography.caption.fontSize,
                            }}
                          >
                            {row.status}
                          </Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell colSpan={7} align="center" sx={{ py: 4 }}>
                    No results found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Stack spacing={1} p={1}>
          {initialRows.length ? (
            initialRows.map((row) => {
              const isItemSelected = selected.includes(row.orderId);
              return (
                <Card
                  key={row.orderId}
                  sx={{
                    background:
                      theme.palette.mode === "dark"
                        ? theme.palette.background.default
                        : theme.palette.primary.main,
                  }}
                >
                  <CardContent sx={{ p: 1.5 }}>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Box display="flex" alignItems="center" gap={1}>
                        <Avatar
                          src={row.user.avatar}
                          alt={row.user.name}
                          sx={{ width: 36, height: 36 }}
                        />
                        <Typography fontWeight={600}>
                          {row.user.name}
                        </Typography>
                      </Box>
                      <Checkbox
                        checked={isItemSelected}
                        onChange={() => handleSelect(row.orderId)}
                        size="small"
                        sx={{
                          color: theme.palette.grey[400],
                          "&.Mui-checked": {
                            color: theme.palette.black.main,
                          },
                        }}
                      />
                    </Box>
                    <Box mt={1} p={1}>
                      <Typography variant="body2">
                        Order: {row.orderId}
                      </Typography>
                      <Typography variant="body2">
                        Project: {row.project}
                      </Typography>
                      <Typography variant="body2">
                        Address: {row.address}
                      </Typography>
                      <Typography
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                          fontSize: theme.typography.body2.fontSize,
                        }}
                      >
                        <CalendarTodayOutlinedIcon fontSize="small" />
                        {row.date}
                      </Typography>
                      <Chip
                        label={row.status}
                        size="small"
                        sx={{
                          mt: 1,
                          fontWeight: 500,
                          bgcolor:
                            theme.palette[statusColors[row.status]]?.main,
                          color: "#fff",
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              );
            })
          ) : (
            <Typography align="center" sx={{ py: 4 }}>
              No results found
            </Typography>
          )}
        </Stack>
      )}
      <Box display="flex" justifyContent="flex-end" p={1}>
        <Pagination count={5} page={1} color="primary" shape="rounded" />
      </Box>
    </Box>
  );
}
