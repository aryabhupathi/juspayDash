import { Card, Typography, useTheme, Box, useMediaQuery } from "@mui/material";
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
  { name: "Jan", current: 15000000, previous: 10000000 },
  { name: "Feb", current: 11000000, previous: 17000000 },
  { name: "Mar", current: 11000000, previous: 17000000 },
  { name: "Apr", current: 16000000, previous: 12000000 },
  { name: "May", current: 21000000, previous: 16000000 },
  { name: "Jun", current: 22000000, previous: 26000000 },
];
const cutIndex = 3;
const processedData = data.map((item, index) => ({
  ...item,
  currentSolid: index <= cutIndex ? item.current : null,
  currentDotted: index >= cutIndex ? item.current : null,
}));
const RevenueChart = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Card
      elevation={3}
      sx={{
        p: 2,
        borderRadius: 3,
        bgcolor:
          theme.palette.tilelight?.main || theme.palette.background.paper,
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
      <Box
        sx={{
          alignItems: "center",
          mb: 2,
        }}
      >
        <>
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 3, fontSize: 14, mb: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography
                  sx={{ fontSize: theme.typography.body1.fontSize }}
                  mr={4}
                  fontWeight={600}
                >
                  Revenue
                </Typography>
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    bgcolor:
                      theme.palette.mode === "dark"
                        ? theme.palette.pink.main
                        : theme.palette.black.main,
                  }}
                />
                <Typography
                  sx={{ fontSize: theme.typography.caption.fontSize }}
                >
                  Current Week <b>$58,211</b>
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    bgcolor: theme.palette.cyan.main,
                  }}
                />
                <Typography
                  sx={{ fontSize: theme.typography.caption.fontSize }}
                >
                  Previous Week <b>$68,768</b>
                </Typography>
              </Box>
            </Box>
          )}
          {isMobile && (
            <Typography
              sx={{
                fontSize: theme.typography.body1.fontSize,
                fontWeight: 600,
                textAlign: "left",
                mb: 1,
              }}
            >
              Revenue
            </Typography>
          )}
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={processedData}>
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
                  fontSize: theme.typography.body2.fontSize,
                  fill: theme.palette.text.secondary,
                }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                ticks={[0, 10000000, 20000000, 30000000]}
                tickFormatter={(value) => `${value / 1_000_000}M`}
                tick={{
                  fontSize: theme.typography.body2.fontSize,
                  fill: theme.palette.text.secondary,
                }}
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
                type="natural"
                dataKey="currentSolid"
                stroke={
                  theme.palette.mode === "dark"
                    ? theme.palette.pink.main
                    : theme.palette.black.main
                }
                strokeWidth={3}
                dot={false}
                connectNulls
              />
              <Line
                type="natural"
                dataKey="currentDotted"
                stroke={
                  theme.palette.mode === "dark"
                    ? theme.palette.pink.main
                    : theme.palette.black.main
                }
                strokeWidth={3}
                strokeDasharray="6 4"
                dot={false}
                connectNulls
              />
              <Line
                type="natural"
                dataKey="previous"
                stroke={theme.palette.cyan.main}
                strokeWidth={3}
                dot={false}
                opacity={0.9}
              />
            </LineChart>
          </ResponsiveContainer>
          {isMobile && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 3,
                fontSize: 14,
                mt: 2,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    bgcolor:
                      theme.palette.mode === "dark"
                        ? theme.palette.pink.main
                        : theme.palette.black.main,
                  }}
                />
                <Typography
                  sx={{ fontSize: theme.typography.caption.fontSize }}
                >
                  Current <b>$58,211</b>
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    bgcolor: theme.palette.cyan.main,
                  }}
                />
                <Typography
                  sx={{ fontSize: theme.typography.caption.fontSize }}
                >
                  Previous <b>$68,768</b>
                </Typography>
              </Box>
            </Box>
          )}
        </>
      </Box>
    </Card>
  );
};
export default RevenueChart;
