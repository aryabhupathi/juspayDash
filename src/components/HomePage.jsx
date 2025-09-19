import { Box } from "@mui/material";
import { ProjectionChart } from "./ProjectionChart";
import RevenueChart from "./RevenueChart";
import Tiles from "./Tiles";
import { SalesChart } from "./SalesChart";
import SalesTable from "./SalesTable";
import MapChart from "./MapChart";
export default function DashboardSummary() {
  return (
    <Box sx={{ mt: 4, px: 2, width: "100%" }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 3,
        }}
      >
        <Tiles />
        <ProjectionChart />
      </Box>
      <Box
        mt={5}
        sx={{
          display: "grid",
          gridTemplateColumns: "7fr 3fr",
          gap: 3,
        }}
      >
        <RevenueChart />
        <MapChart />
      </Box>
      <Box
        mt={5}
        sx={{
          display: "grid",
          gridTemplateColumns: "7fr 3fr",
          gap: 3,
        }}
      >
        <SalesTable />
        <SalesChart />
      </Box>
    </Box>
  );
}
