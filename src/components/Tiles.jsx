import { Box, Grid, Card, Typography, useTheme } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
const metrics = [
  {
    label: "Customers",
    value: "3,781",
    change: "+11.01%",
    positive: true,
    color: "info.light",
  },
  {
    label: "Orders",
    value: "1,219",
    change: "-0.03%",
    positive: false,
    color: "",
  },
  {
    label: "Revenue",
    value: "$695",
    change: "+15.03%",
    positive: true,
    color: "info.light",
  },
  {
    label: "Growth",
    value: "30.1%",
    change: "+6.08%",
    positive: true,
    color: "info.light",
  },
];
export function Tiles() {
  const theme = useTheme();
  return (
    <Grid container spacing={2}>
      {metrics.map((item, idx) => (
        <Grid width={150}
      key={item.label}
      sx={{ display: "flex", justifyContent: "center" }}
    >
          <Card
            elevation={0}
            sx={{
              p: 2.5,
              backgroundColor: item.color
                ? theme.palette.mode === "light"
                  ? theme.palette.info.light
                  : theme.palette.background.paper
                : theme.palette.background.paper,
              borderRadius: 2,
              boxShadow:
                theme.palette.mode === "light"
                  ? "0px 1px 6px rgba(0,0,0,0.04)"
                  : "0px 1px 6px rgba(0,0,0,0.24)",
              height: 113,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="subtitle2" color="text.secondary">
              {item.label}
            </Typography>
            <Typography variant="h5" sx={{ mt: 1 }}>
              {item.value}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 0.5 }}>
              <Typography
                variant="body2"
                color={item.positive ? "success.main" : "error.main"}
                sx={{ fontWeight: 500 }}
              >
                {item.change}
              </Typography>
              {item.positive ? (
                <TrendingUpIcon
                  sx={{
                    fontSize: 18,
                    color: "success.main",
                    ml: 0.5,
                  }}
                />
              ) : (
                <TrendingDownIcon
                  sx={{
                    fontSize: 18,
                    color: "error.main",
                    ml: 0.5,
                  }}
                />
              )}
            </Box>
          </Card>
        </Grid>
        
      ))}
    </Grid>
  );
}
