import { useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
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
    <Box>
      <Typography>Top Selling Product</Typography>
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "none",
          width: "100%",
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
                        color: theme.palette.text.primary,
                        px: 1,
                        py: 2.5,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        width: index === 0 ? "50%" : "16%",
                      }}
                    >
                      {header}
                    </TableCell>
                  )
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      borderBottom: "none",
                      px: 1,
                      py: 2.5,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      borderBottom: "none",
                      px: 1,
                      py: 2.5,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {row.price}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      borderBottom: "none",
                      px: 1,
                      py: 2.5,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {row.quantity}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      borderBottom: "none",
                      px: 1,
                      py: 2.5,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {row.amount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </TableContainer>
    </Box>
  );
}
