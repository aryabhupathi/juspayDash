import { Card, useTheme } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
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
        p: 3,
        borderRadius: 3,
        backgroundColor: theme.palette.background.paper,
        boxShadow: "none",
        minWidth: 500,
      }}
    >
      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          data={processedData}
          margin={{ top: 5, right: 5, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
          <XAxis
            dataKey="name"
            interval={0}
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
            wrapperStyle={{ fontSize: 14 }}
            cursor={{ strokeDasharray: "3 3", strokeWidth: 2 }}
          />
          <Legend
            verticalAlign="bottom"
            align="center"
            iconType="circle"
            wrapperStyle={{ fontSize: 14 }}
          />
          <Line
            type="monotone"
            dataKey="currentSolid"
            stroke="#111"
            strokeWidth={3}
            dot={false}
            legendType="circle"
            name="Current Solid"
            connectNulls
          />
          <Line
            type="monotone"
            dataKey="currentDotted"
            stroke="#111"
            strokeWidth={3}
            dot={false}
            strokeDasharray="6 4"
            legendType="none"
            connectNulls
          />
          <Line
            type="monotone"
            dataKey="previous"
            stroke="#8bc4f5"
            strokeWidth={3}
            dot={false}
            opacity={0.95}
            name="previous"
            legendType="circle"
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};
export default RevenueChart;
