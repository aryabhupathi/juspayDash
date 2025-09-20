import { Box, Typography, LinearProgress, Card, useTheme } from "@mui/material";
const LegendItem = ({ city, progress }) => {
  const theme = useTheme();
  return (
    <Box sx={{ mb: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
        <Typography variant="body2" fontWeight={600} color="text.primary">
          {city}
        </Typography>
        <Typography
          variant="body2"
          fontWeight={500}
          color="text.secondary"
          sx={{ minWidth: 30, textAlign: "right" }}
        >
          {progress}K
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 8,
          borderRadius: 4,
          backgroundColor:
            theme.palette.mode === "light" ? "#f4f3f3ff" : "#555",
          "& .MuiLinearProgress-bar": {
            borderRadius: 4,
            backgroundColor: theme.palette.cyan.main,
          },
        }}
      />
    </Box>
  );
};
export default function CustomLegend() {
  const theme = useTheme();
  const data = [
    { city: "New York", progress: 72, count: 100 },
    { city: "Los Angeles", progress: 39, count: 100 },
    { city: "Chicago", progress: 25, count: 100 },
    { city: "Chicnnnago", progress: 61, count: 100 },
  ];
  return (
    <Card
      elevation={3}
      sx={{
        p: 2,
        borderRadius: 3,
        bgcolor:
          theme.palette.tilelight?.main || theme.palette.background.paper,
        boxShadow:
          theme.palette.mode === "light"
            ? "0px 1px 6px rgba(0,0,0,0.04)"
            : "0px 1px 6px rgba(0,0,0,0.24)",
      }}
    >
      <Box
        component="img"
        src="/map.png"
        alt="Map"
        sx={{
          width: "100%",
          height: "auto",
          objectFit: "contain",
          borderRadius: 2,
          mb: 2,
        }}
      />
      {data.map((item) => (
        <LegendItem key={item.city} city={item.city} progress={item.progress} />
      ))}
    </Card>
  );
}
