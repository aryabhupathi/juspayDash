import { Card, Typography, Box, useTheme } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
const stats = (theme) => [
  {
    title: "Customers",
    value: "3,781",
    diff: "+11.01%",
    diffColor: theme.palette.success.main,
    bgcolor: theme.palette.blue.main,
    color: theme.palette.primary.contrastText,
    icon: (
      <TrendingUpIcon
        sx={{ color: theme.palette.common.black, fontSize: "medium" }}
      />
    ),
  },
  {
    title: "Orders",
    value: "1,219",
    diff: "-0.03%",
    diffColor: theme.palette.error.main,
    bgcolor: theme.palette.tilelight.main,
    color: theme.palette.text.primary,
    icon: (
      <TrendingDownIcon
        sx={{ color: theme.palette.common.black, fontSize: "medium" }}
      />
    ),
  },
  {
    title: "Revenue",
    value: "$695",
    diff: "+15.03%",
    diffColor: theme.palette.success.main,
    bgcolor: theme.palette.tilelight.main,
    color: theme.palette.text.primary,
    icon: (
      <TrendingUpIcon
        sx={{ color: theme.palette.common.black, fontSize: "medium" }}
      />
    ),
  },
  {
    title: "Growth",
    value: "30.1%",
    diff: "+6.08%",
    diffColor: theme.palette.success.main,
    bgcolor: theme.palette.purple.main,
    color: theme.palette.primary.contrastText,
    icon: (
      <TrendingUpIcon
        sx={{ color: theme.palette.common.black, fontSize: "medium" }}
      />
    ),
  },
];
export default function Tiles() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gap: 3,
      }}
    >
      {stats(theme).map((stat, index) => (
        <Card
          key={index}
          sx={{
            p: 3,
            borderRadius: 3,
            boxShadow: 1,
            bgcolor: stat.bgcolor,
            color: stat.color,
            justifyContent: "center",
          }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {stat.title}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold" }}
              mt={1}
              mb={1}
            >
              {stat.value}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: stat.diffColor,
              }}
            >
              <Typography variant="caption" fontWeight={600} mr={0.5}>
                {stat.diff}
              </Typography>
              {stat.icon}
            </Box>
          </Box>
        </Card>
      ))}
    </Box>
  );
}
