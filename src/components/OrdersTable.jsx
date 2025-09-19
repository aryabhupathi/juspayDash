import { useState, useMemo } from "react";
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
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
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
const OrdersTable = () => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;
  const filteredRows = useMemo(() => {
    if (!search) return initialRows;
    return initialRows.filter(
      (row) =>
        row.orderId.toLowerCase().includes(search.toLowerCase()) ||
        row.user.name.toLowerCase().includes(search.toLowerCase()) ||
        row.project.toLowerCase().includes(search.toLowerCase()) ||
        row.address.toLowerCase().includes(search.toLowerCase()) ||
        row.status.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);
  const paginatedRows = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    return filteredRows.slice(start, start + rowsPerPage);
  }, [page, filteredRows]);
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = paginatedRows.map((row) => row.orderId);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };
  const handleClick = (orderId) => {
    const selectedIndex = selected.indexOf(orderId);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, orderId);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };
  const isSelected = (orderId) => selected.indexOf(orderId) !== -1;
  const handleChangePage = (event, value) => {
    setPage(value);
  };
  return (
    <Box p={isSmDown ? 1 : 2} sx={{ width: "100%" }}>
      <Paper
        variant="outlined"
        sx={{
          overflow: "auto",
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
          <Typography variant={isSmDown ? "h6" : "h5"}>Orders</Typography>
          <TextField
            size="small"
            variant="outlined"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ minWidth: isSmDown ? "120px" : "200px" }}
          />
        </Box>
        <TableContainer>
          <Table size={isSmDown ? "small" : "medium"}>
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
                    onChange={handleSelectAllClick}
                    inputProps={{ "aria-label": "select all orders" }}
                  />
                </TableCell>
                {!isSmDown && <TableCell>Order ID</TableCell>}
                <TableCell>User</TableCell>
                {!isSmDown && <TableCell>Project</TableCell>}
                {!isSmDown && <TableCell>Address</TableCell>}
                <TableCell>Date</TableCell>
                {!isSmDown && <TableCell>Status</TableCell>}
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedRows.map((row, idx) => {
                const isItemSelected = isSelected(row.orderId);
                const labelId = `order-checkbox-${row.orderId}`;
                return (
                  <TableRow
                    key={row.orderId}
                    hover
                    role="checkbox"
                    aria-checked={isItemSelected}
                    selected={isItemSelected}
                    tabIndex={-1}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell
                      padding="checkbox"
                      onClick={() => handleClick(row.orderId)}
                    >
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </TableCell>
                    {!isSmDown && (
                      <TableCell component="th" id={labelId} scope="row">
                        {row.orderId}
                      </TableCell>
                    )}
                    <TableCell>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Avatar
                          src={row.user.avatar}
                          alt={row.user.name}
                          sx={{ width: 30, height: 30 }}
                        />
                        <Typography
                          noWrap
                          variant={isSmDown ? "body2" : "body1"}
                        >
                          {row.user.name}
                        </Typography>
                      </Box>
                    </TableCell>
                    {!isSmDown && <TableCell>{row.project}</TableCell>}
                    {!isSmDown && <TableCell>{row.address}</TableCell>}
                    <TableCell>
                      <Box
                        display="flex"
                        alignItems="center"
                        gap={0.5}
                        sx={{ whiteSpace: "nowrap" }}
                      >
                        <span
                          role="img"
                          aria-label="calendar"
                          style={{ fontSize: 16 }}
                        >
                          📅
                        </span>
                        <Typography variant={isSmDown ? "body2" : "body1"}>
                          {row.date}
                        </Typography>
                      </Box>
                    </TableCell>
                    {!isSmDown && (
                      <TableCell>
                        <Chip
                          label={row.status}
                          color={statusColors[row.status]}
                          size="small"
                          sx={{ minWidth: 80, fontWeight: 600 }}
                        />
                      </TableCell>
                    )}
                    <TableCell align="center">
                      {row.status === "Rejected" && (
                        <IconButton size="small" aria-label="options">
                          <MoreHorizIcon />
                        </IconButton>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
              {paginatedRows.length === 0 && (
                <TableRow>
                  <TableCell colSpan={8} align="center" sx={{ py: 4 }}>
                    No results found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          p={isSmDown ? 1 : 2}
          sx={{ backgroundColor: theme.palette.background.default }}
        >
          <Pagination
            count={Math.ceil(filteredRows.length / rowsPerPage)}
            page={page}
            onChange={handleChangePage}
            color="primary"
            size={isSmDown ? "small" : "medium"}
            shape="rounded"
          />
        </Box>
      </Paper>
    </Box>
  );
};
export default OrdersTable;
