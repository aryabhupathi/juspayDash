import { Card, Typography, Box } from "@mui/material";
const stats = [
  {
    title: "Customers",
    value: "3,781",
    diff: "+11.01%",
    diffColor: "success.main",
    bgcolor: "#2196f3",
    color: "white",
    icon: "📈",
  },
  {
    title: "Orders",
    value: "1,219",
    diff: "-0.03%",
    diffColor: "error.main",
    bgcolor: "white",
    color: "black",
    icon: "📉",
  },
  {
    title: "Revenue",
    value: "$695",
    diff: "+15.03%",
    diffColor: "success.main",
    bgcolor: "white",
    color: "black",
    icon: "📈",
  },
  {
    title: "Growth",
    value: "30.1%",
    diff: "+6.08%",
    diffColor: "success.main",
    bgcolor: "#2196f3",
    color: "white",
    icon: "📈",
  },
];
export default function Tiles() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gap: 3,
      }}
    >
      {stats.map((stat, index) => (
        <Card key={index} sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
          <Typography variant="subtitle1">{stat.title}</Typography>
          <Typography variant="h5" fontWeight={700} mt={1} mb={1}>
            {stat.value}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: stat.diffColor,
            }}
          >
            <Typography variant="body2" fontWeight={600} mr={0.5}>
              {stat.diff}
            </Typography>
            {stat.icon}
          </Box>
        </Card>
      ))}
    </Box>
  );
}
