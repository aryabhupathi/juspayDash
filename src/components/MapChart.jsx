import { Box, Typography, LinearProgress } from "@mui/material";
const LegendItem = ({ city, count, progress }) => {
  return (
    <Box sx={{ mb: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
        <Typography variant="body2" fontWeight={600}>
          {city}
        </Typography>
        <Typography variant="body2" fontWeight={500}>
          {count}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 8,
          borderRadius: 4,
          "& .MuiLinearProgress-bar": {
            borderRadius: 4,
          },
        }}
      />
    </Box>
  );
};
export default function CustomLegend() {
  const data = [
    { city: "New York", count: 43, progress: 70 },
    { city: "Los Angeles", count: 27, progress: 45 },
    { city: "Chicago", count: 15, progress: 30 },
    { city: "Chicnnnago", count: 15, progress: 30 },
  ];
  return (
    <Box>
      <Box
        component="img"
        src="/map.png"
        alt="Map"
        sx={{
          width: "100%",
          height: "auto",
          objectFit: "contain",
          borderRadius: 2,
        }}
      />
      {data.map((item) => (
        <LegendItem
          key={item.city}
          city={item.city}
          count={item.count}
          progress={item.progress}
        />
      ))}
    </Box>
  );
}
