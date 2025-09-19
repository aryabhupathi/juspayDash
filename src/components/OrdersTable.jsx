import { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
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
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
const statusColors = {
  "In Progress": "info",
  Complete: "success",
  Pending: "primary",
  Approved: "warning",
  Rejected: "error",
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
];
export default function OrdersTable() {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;
  const filteredRows = initialRows.filter((row) =>
    [row.orderId, row.user.name, row.project, row.address, row.status].some(
      (field) => field.toLowerCase().includes(search.toLowerCase())
    )
  );
  const paginatedRows = filteredRows.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );
  const handleSelectAll = (event) => {
    setSelected(
      event.target.checked ? paginatedRows.map((row) => row.orderId) : []
    );
  };
  const handleSelect = (orderId) => {
    setSelected((prev) =>
      prev.includes(orderId)
        ? prev.filter((id) => id !== orderId)
        : [...prev, orderId]
    );
  };
  return (
    <Box p={isSmDown ? 1 : 2} sx={{ width: "100%" }}>
      <Typography variant={isSmDown ? "h6" : "h5"}>Order List</Typography>
      <Paper
        variant="outlined"
        sx={{
          borderRadius: 2,
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p={isSmDown ? 1 : 2}
        >
          <Box display="flex" alignItems="center" gap={1}>
            <IconButton size="small" color="primary">
              <AddIcon />
            </IconButton>
            <IconButton size="small" color="primary">
              <FilterListIcon />
            </IconButton>
            <IconButton size="small" color="primary">
              <SwapVertIcon />
            </IconButton>
          </Box>
          <TextField
            size="small"
            variant="outlined"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ minWidth: isSmDown ? 120 : 200 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
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
                      indeterminate={
                        selected.length > 0 &&
                        selected.length < paginatedRows.length
                      }
                      checked={
                        paginatedRows.length > 0 &&
                        selected.length === paginatedRows.length
                      }
                      onChange={handleSelectAll}
                    />
                  </TableCell>
                  <TableCell>Order ID</TableCell>
                  <TableCell>User</TableCell>
                  <TableCell>Project</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedRows.length > 0 ? (
                  paginatedRows.map((row) => {
                    const isItemSelected = selected.includes(row.orderId);
                    return (
                      <TableRow
                        key={row.orderId}
                        hover
                        selected={isItemSelected}
                      >
                        <TableCell
                          padding="checkbox"
                          onClick={() => handleSelect(row.orderId)}
                        >
                          <Checkbox checked={isItemSelected} color="primary" />
                        </TableCell>
                        <TableCell>{row.orderId}</TableCell>
                        <TableCell>
                          <Box display="flex" alignItems="center" gap={1}>
                            <Avatar
                              src={row.user.avatar}
                              alt={row.user.name}
                              sx={{ width: 30, height: 30 }}
                            />
                            <Typography noWrap>{row.user.name}</Typography>
                          </Box>
                        </TableCell>
                        <TableCell>{row.project}</TableCell>
                        <TableCell>{row.address}</TableCell>
                        <TableCell>
                          <Box display="flex" alignItems="center" gap={0.5}>
                            <span
                              role="img"
                              aria-label="calendar"
                              style={{ fontSize: 16 }}
                            >
                              <CalendarTodayOutlinedIcon />
                            </span>
                            <Typography>{row.date}</Typography>
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
                                flexShrink: 0,
                              }}
                            />
                            <Typography
                              variant="body2"
                              sx={{
                                fontWeight: 500,
                                color:
                                  theme.palette[statusColors[row.status]]?.main,
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
                    <TableCell colSpan={8} align="center" sx={{ py: 4 }}>
                      No results found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Stack spacing={1} p={1}>
            {paginatedRows.length > 0 ? (
              paginatedRows.map((row) => {
                const isItemSelected = selected.includes(row.orderId);
                return (
                  <Card key={row.orderId} variant="outlined">
                    <CardContent>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Box display="flex" alignItems="center" gap={1}>
                          <Checkbox
                            checked={isItemSelected}
                            onChange={() => handleSelect(row.orderId)}
                          />
                          <Avatar
                            src={row.user.avatar}
                            alt={row.user.name}
                            sx={{ width: 36, height: 36 }}
                          />
                          <Typography fontWeight={600}>
                            {row.user.name}
                          </Typography>
                        </Box>
                        {row.status === "Rejected" && (
                          <IconButton size="small">
                            <MoreHorizIcon />
                          </IconButton>
                        )}
                      </Box>
                      <Box mt={1}>
                        <Typography variant="body2" noWrap>
                          Order: {row.orderId}
                        </Typography>
                        <Typography variant="body2" noWrap>
                          Project: {row.project}
                        </Typography>
                        <Typography variant="body2" noWrap>
                          Address: {row.address}
                        </Typography>
                        <Typography variant="body2" noWrap>
                          Date:{" "}
                          <span role="img" aria-label="calendar">
                            📅
                          </span>{" "}
                          {row.date}
                        </Typography>
                        <Chip
                          label={row.status}
                          color={statusColors[row.status]}
                          size="small"
                          sx={{ mt: 1 }}
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
        <Box
          display="flex"
          justifyContent="flex-end"
          p={isSmDown ? 1 : 2}
          sx={{ backgroundColor: theme.palette.background.default }}
        >
          <Pagination
            count={Math.ceil(filteredRows.length / rowsPerPage)}
            page={page}
            onChange={(e, value) => setPage(value)}
            color="primary"
            size={isSmDown ? "small" : "medium"}
            shape="rounded"
          />
        </Box>
      </Paper>
    </Box>
  );
}
