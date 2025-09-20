import { useTheme } from "@mui/material/styles";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Card,
  Tooltip,
} from "@mui/material";
function createData(name, price, quantity, amount) {
  return { name, price, quantity, amount };
}
const rows = [
  createData("FASOS Ridley High Waist", "$79.49", 82, "$6518.18"),
  createData("Marco Lightweight Shirt", "$128.50", 37, "$4754.50"),
  createData("Half Sleeve Shirt", "$39.99", 64, "$2559.36"),
  createData("Lightweight Jacket", "$20.00", 184, "$3680.00"),
  createData("Marco Shoes", "$79.49", 64, "$1965.81"),
];
export default function SalesTable() {
  const theme = useTheme();
  return (
    <Card
      elevation={3}
      sx={{
        p: 2,
        borderRadius: 3,
        background:
          theme.palette.mode === "dark"
            ? theme.palette.blacklight.main
            : theme.palette.tilelight.main,
        boxShadow:
          theme.palette.mode === "light"
            ? "0px 1px 6px rgba(0,0,0,0.04)"
            : "0px 1px 6px rgba(0,0,0,0.24)",
      }}
    >
      <Typography
        sx={{ fontSize: theme.typography.body2.fontSize, fontWeight: "bold" }}
        color={theme.palette.text.primary}
        mb={2}
      >
        Top Selling Product
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "none",
          width: "100%",
          background:
            theme.palette.mode === "dark"
              ? theme.palette.blacklight.main
              : theme.palette.tilelight.main,
          borderRadius: 2,
        }}
      >
        <Box sx={{ minWidth: { xs: "100%", sm: "100%", md: "auto" } }}>
          <Table
            size="small"
            sx={{
              tableLayout: "fixed",
              width: "100%",
              borderCollapse: "separate",
              borderSpacing: 0,
            }}
          >
            <TableHead>
              <TableRow>
                {["Name", "Price", "Quantity", "Amount"].map(
                  (header, index) => (
                    <TableCell
                      key={header}
                      sx={{
                        borderBottom: `2px solid ${theme.palette.divider}`,
                        fontWeight: 600,
                        color: theme.palette.text.secondary,
                        px: 1,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontSize: theme.typography.caption.fontSize,
                        width: index === 0 ? "50%" : "16%",
                      }}
                    >
                      <Tooltip title={header}>{header}</Tooltip>
                    </TableCell>
                  )
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td": { borderBottom: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      borderBottom: "none",
                      px: 1,
                      py: 2,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      fontSize: theme.typography.caption.fontSize,
                      color: theme.palette.text.primary,
                    }}
                  >
                    <Tooltip title={row.name}>{row.name}</Tooltip>
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      borderBottom: "none",
                      px: 1,
                      py: 2,
                      fontSize: theme.typography.caption.fontSize,
                      color: theme.palette.text.secondary,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    <Tooltip title={row.price}>{row.price}</Tooltip>
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      borderBottom: "none",
                      px: 1,
                      py: 2,
                      fontSize: theme.typography.caption.fontSize,
                      color: theme.palette.text.secondary,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    <Tooltip title={row.quantity}>{row.quantity}</Tooltip>
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      borderBottom: "none",
                      px: 1,
                      py: 2,
                      fontSize: theme.typography.caption.fontSize,
                      color: theme.palette.text.secondary,
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Tooltip title={row.amount}>{row.amount}</Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </TableContainer>
    </Card>
  );
}
