import { useTheme, Card, Typography, Box } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
const data = [
  { name: "Jan", projections: 18, actuals: 4 },
  { name: "Feb", projections: 22, actuals: 5 },
  { name: "Mar", projections: 19, actuals: 4 },
  { name: "Apr", projections: 23, actuals: 6 },
  { name: "May", projections: 16, actuals: 3 },
  { name: "Jun", projections: 21, actuals: 5 },
];
export function ProjectionChart() {
  const theme = useTheme();
  return (
    <Card
      elevation={3}
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        p: 2,
        bgcolor: theme.palette.tilelight.main,
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
        sx={{ fontWeight: "bold", fontSize: theme.typography.body2.fontSize }}
        gutterBottom
      >
        Projections vs Actuals
      </Typography>
      <Box sx={{ flex: 1, minHeight: 220 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, left: 0, right: 0, bottom: 5 }}
            barCategoryGap={0}
          >
            <CartesianGrid
              vertical={false}
              stroke={
                theme.palette.mode === "light"
                  ? theme.palette.grey[300]
                  : theme.palette.grey[700]
              }
              strokeDasharray="3 3"
            />
            <XAxis
              dataKey="name"
              tick={{
                fill: theme.palette.text.primary,
                fontSize: theme.typography.body2.fontSize,
              }}
              axisLine={{ stroke: theme.palette.divider }}
              tickLine={false}
            />
            <YAxis
              ticks={[0, 10, 20, 30]}
              domain={[0, 30]}
              tickFormatter={(value) => `${value}M`}
              tick={{
                fill: theme.palette.text.primary,
                fontSize: theme.typography.body2.fontSize,
              }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: theme.palette.background.paper,
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 8,
                fontSize: theme.typography.body2.fontSize,
                color: theme.palette.text.primary,
              }}
            />
            <Bar
              dataKey="projections"
              stackId="a"
              fill={theme.palette.cyan.main}
              barSize={22}
            />
            <Bar
              dataKey="actuals"
              stackId="a"
              fill={theme.palette.purple.main}
              radius={[6, 6, 0, 0]}
              barSize={22}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Card>
  );
}
