import { Box } from "@mui/material";
import { ProjectionChart } from "./ProjectionChart";
import RevenueChart from "./RevenueChart";
import Tiles from "./Tiles";
import { SalesChart } from "./SalesChart";
import OrdersTable from "./OrdersTable";
export default function DashboardSummary() {
  return (
    <Box sx={{ mt: 4, px: 2, maxWidth: 1400, mx: "auto" }}>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          alignItems: "stretch",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Tiles />
        <ProjectionChart />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "stretch",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <RevenueChart />
        <SalesChart />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "stretch",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <OrdersTable />
      </Box>
    </Box>
  );
}
