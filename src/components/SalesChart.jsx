import { PieChart } from "@mui/x-charts/PieChart";
import Box from "@mui/material/Box";
const salesData = [
  { text: "Direct", value: 300.56, color: "#232931" },
  { text: "Affiliate", value: 135.18, color: "#baf6c3" },
  { text: "Sponsored", value: 154.02, color: "#a3bafa" },
  { text: "E-mail", value: 48.96, color: "#e8eefc" },
];
export function SalesChart() {
  return (
    <Box
      sx={{
        background: "#fff",
        p: 3,
        borderRadius: 3,
        boxShadow: "0px 2px 6px rgba(0,0,0,0.08)",
      }}
    >
      <Box sx={{ fontSize: 18, fontWeight: 600, mb: 3 }}>Total Sales</Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Box sx={{ position: "relative", width: 180, height: 180 }}>
          <PieChart
            series={[
              {
                innerRadius: 40,
                outerRadius: 70,
                cornerRadius: 6,
                paddingAngle: 1.5,
                data: salesData,
                arcLabel: null,
                highlightScope: { faded: "global", highlighted: "item" },
              },
            ]}
            legend={false}
            colors={salesData.map((d) => d.color)}
            width={180}
            height={180}
          />
        </Box>
      </Box>
      <Box>
        {salesData.map((item) => (
          <Box
            key={item.text}
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 1.5,
              fontSize: 14,
            }}
          >
            <Box
              sx={{
                width: 10,
                height: 10,
                background: item.color,
                borderRadius: "50%",
                mr: 2,
                border: item.text === "Direct" ? "none" : "1px solid #bfcce2",
              }}
            />
            <Box
              sx={{
                flexGrow: 1,
                fontWeight: item.text === "Direct" ? 600 : 500,
                color: item.text === "Direct" ? "#232931" : "rgba(0,0,0,0.7)",
              }}
            >
              {item.text}
            </Box>
            <Box sx={{ fontWeight: 500, color: "rgba(0,0,0,0.8)" }}>
              ${item.value.toFixed(2)}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
