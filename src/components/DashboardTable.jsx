// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
// const products = [
//   {
//     name: "ASOS Ridley High Waist",
//     price: 79.49,
//     quantity: 82,
//     amount: 6518.18,
//   },
//   {
//     name: "Marco Lightweight Shirt",
//     price: 128.5,
//     quantity: 37,
//     amount: 4754.5,
//   },
//   { name: "Half Sleeve  Shirt", price: 39.99, quantity: 64, amount: 2559.36 },
//   { name: "Lightweight Jacket", price: 20.0, quantity: 184, amount: 3680.0 },
//   { name: "Marco Shoes", price: 79.49, quantity: 64, amount: 1965.81 },
// ];
// export default function SalesTable() {
//   return (
//     <Box
//       sx={{
//         background: "#f8f9fa",
//         borderRadius: 2,
//         p: 2,
//         width: "100%",
//         maxWidth: 850,
//       }}
//     >
//       <Box sx={{ fontWeight: 600, fontSize: 18, mb: 1 }}>
//         Top Selling Products
//       </Box>
//       <TableContainer
//         component={Paper}
//         sx={{ boxShadow: "none", background: "none" }}
//       >
//         <Table sx={{ minWidth: 650 }}>
//           <TableHead>
//             <TableRow>
//               <TableCell sx={{ color: "#9ea1a6", fontWeight: 600 }}>
//                 Name
//               </TableCell>
//               <TableCell
//                 align="right"
//                 sx={{ color: "#9ea1a6", fontWeight: 600 }}
//               >
//                 Price
//               </TableCell>
//               <TableCell
//                 align="right"
//                 sx={{ color: "#9ea1a6", fontWeight: 600 }}
//               >
//                 Quantity
//               </TableCell>
//               <TableCell
//                 align="right"
//                 sx={{ color: "#9ea1a6", fontWeight: 600 }}
//               >
//                 Amount
//               </TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {products.map((row) => (
//               <TableRow key={row.name}>
//                 <TableCell sx={{ fontWeight: 500 }}>{row.name}</TableCell>
//                 <TableCell align="right" sx={{ fontWeight: 500 }}>
//                   ${row.price.toFixed(2)}
//                 </TableCell>
//                 <TableCell align="right" sx={{ fontWeight: 500 }}>
//                   {row.quantity}
//                 </TableCell>
//                 <TableCell align="right" sx={{ fontWeight: 500 }}>
//                   $
//                   {row.amount.toLocaleString(undefined, {
//                     minimumFractionDigits: 2,
//                   })}
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// }
