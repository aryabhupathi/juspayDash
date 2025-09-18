


import { useTheme, Card, Typography, Box } from "@mui/material";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend,CartesianGrid
} from "recharts";

const data = [
  { name: "Jan", projections: 10, actuals: 16 },
  { name: "Feb", projections: 15, actuals: 21 },
  { name: "Mar", projections: 13, actuals: 19 },
  { name: "Apr", projections: 15, actuals: 21 },
  { name: "May", projections: 13, actuals: 14 },
  { name: "Jun", projections: 15, actuals: 18 },
];

export function ProjectionChart() {
  const theme = useTheme();

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 3,
        p: 3,
        background: theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.background.paper,
        minWidth: 340,
        minHeight: 220,
        boxShadow: theme.palette.mode === "light"
          ? "0px 1px 6px rgba(0,0,0,0.04)"
          : "0px 1px 6px rgba(0,0,0,0.24)",
      }}
    >
      <Typography variant="subtitle1" gutterBottom>
        Projections vs Actuals
      </Typography>
      <Box sx={{ height: 160 }}>
         <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
         <XAxis dataKey="name" />
            <YAxis
              tickCount={6}
              tickFormatter={(value) => `${value}M`}
              domain={[0, 30]}
            />
        <Tooltip />
        <Legend />
        <Bar
              dataKey="projections"
              stackId="a"
              fill={theme.palette.primary.main}
              barSize={22}
              opacity={0.45}
            />
            <Bar
              dataKey="actuals"
              stackId="a"
              fill={theme.palette.primary.light}
              radius={[6, 6, 0, 0]}
              barSize={22}
              opacity={0.9}
            />
      </BarChart>
    </ResponsiveContainer>
      </Box>
    </Card>
  );
}

