import { Box, Typography, useTheme } from "@mui/material";
import { ProjectionChart } from "./ProjectionChart";
import RevenueChart from "./RevenueChart";
import Tiles from "./Tiles";
import { SalesChart } from "./SalesChart";
import SalesTable from "./SalesTable";
import MapChart from "./MapChart";
export default function DashboardSummary() {
  const theme = useTheme();
  return (
    <Box sx={{ px: 2, width: "100%" }}>
      <Typography
        color={theme.palette.text.primary}
        sx={{
          fontSize: theme.typography.body1.fontSize,
          fontWeight: "bold",
          mb: 2,
        }}
      >
        eCommerce
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 6,
        }}
      >
        <Tiles />
        <ProjectionChart />
      </Box>
      <Box
        mt={5}
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "7fr 3fr" },
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
          gridTemplateColumns: { xs: "1fr", md: "7fr 3fr" },
          gap: 3,
        }}
      >
        <SalesTable />
        <SalesChart />
      </Box>
    </Box>
  );
}
