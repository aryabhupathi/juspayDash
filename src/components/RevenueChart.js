import { Card, Typography, useTheme, Box } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const data = [
  { name: "Jan", current: 7000000, previous: 13000000 },
  { name: "Feb", current: 19000000, previous: 17000000 },
  { name: "Mar", current: 24000000, previous: 21000000 },
  { name: "Apr", current: 12000000, previous: 16000000 },
  { name: "May", current: 10000000, previous: 9000000 },
  { name: "Jun", current: 23000000, previous: 23000000 },
];
const cutIndex = 3;
const processedData = data.map((item, index) => ({
  ...item,
  currentSolid: index <= cutIndex ? item.current : null,
  currentDotted: index >= cutIndex ? item.current : null,
}));
const RevenueChart = () => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        p: 1,
        borderRadius: 3,
        backgroundColor: theme.palette.background.paper,
        boxShadow: "none",
        border:"2px solid teal"
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="subtitle" fontWeight={600}>
          Revenue
        </Typography>
        <Box sx={{ display: "flex", gap: 3, fontSize: 14 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                bgcolor: "#111",
              }}
            />
            <Typography variant="subtitle">Current Week <b>$58,211</b></Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                bgcolor: "#8bc4f5",
              }}
            />
            <Typography variant="subtitle">Previous Week <b>$68,768</b></Typography>
          </Box>
        </Box>
      </Box>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={processedData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 13, fill: theme.palette.text.secondary }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            ticks={[0, 10000000, 20000000, 30000000]}
            tickFormatter={(value) => `${value / 1000000}M`}
            tick={{ fontSize: 13, fill: theme.palette.text.secondary }}
            axisLine={false}
            tickLine={false}
            domain={[0, 30000000]}
          />
          <Tooltip
            formatter={(value) =>
              new Intl.NumberFormat("en", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              }).format(value)
            }
            labelFormatter={(label) => `Month: ${label}`}
            cursor={{ strokeDasharray: "3 3", strokeWidth: 2 }}
          />
          <Line
            type="monotone"
            dataKey="currentSolid"
            stroke="#111"
            strokeWidth={3}
            dot={false}
            connectNulls
          />
          <Line
            type="monotone"
            dataKey="currentDotted"
            stroke="#111"
            strokeWidth={3}
            strokeDasharray="6 4"
            dot={false}
            connectNulls
          />
          <Line
            type="monotone"
            dataKey="previous"
            stroke="#8bc4f5"
            strokeWidth={3}
            dot={false}
            opacity={0.9}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};
export default RevenueChart;
