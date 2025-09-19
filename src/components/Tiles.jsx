import { Box, Card, Typography, Grid } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
const stats = [
  {
    title: "Customers",
    value: "3,781",
    diff: "+11.01%",
    icon: <TrendingUpIcon fontSize="small" />,
    bgcolor: "#05A7F7",
    color: "#fff",
    diffColor: "#95ffd6",
  },
  {
    title: "Orders",
    value: "1,219",
    diff: "-0.03%",
    icon: <TrendingDownIcon fontSize="small" />,
    bgcolor: "#fff",
    color: "#222",
    diffColor: "#FF647C",
  },
  {
    title: "Revenue",
    value: "$695",
    diff: "+15.03%",
    icon: <TrendingUpIcon fontSize="small" />,
    bgcolor: "#f7fafc",
    color: "#222",
    diffColor: "#3ED598",
  },
  {
    title: "Growth",
    value: "30.1%",
    diff: "+6.08%",
    icon: <TrendingUpIcon fontSize="small" />,
    bgcolor: "#05A7F7",
    color: "#fff",
    diffColor: "#95ffd6",
  },
];
export default function Tiles() {
  return (
    <Box sx={{ mt: 4, px: 2 }}>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          alignItems: "stretch",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{
            width: { xs: "100%", md: "calc(66% - 16px)" },
            flex: "1 1 0",
            alignContent: "stretch",
          }}
        >
          {stats.map((stat, idx) => (
            <Grid item xs={12} sm={6} key={stat.title}>
              <Card
                sx={{
                  borderRadius: 3,
                  bgcolor: stat.bgcolor,
                  color: stat.color,
                  boxShadow: 4,
                  p: 3,
                  height: 170,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6">{stat.title}</Typography>
                <Typography variant="h6" fontWeight={700} mt={1} mb={1}>
                  {stat.value}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: stat.diffColor,
                  }}
                >
                  <Typography variant="body1" fontWeight={600} mr={0.5}>
                    {stat.diff}
                  </Typography>
                  {stat.icon}
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
