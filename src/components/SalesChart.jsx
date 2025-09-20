import { Box, useTheme, Typography } from "@mui/material";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
const salesData = [
  { text: "Direct", value: 300.56, color: "#1C1C1C" },
  { text: "Affiliate", value: 135.18, color: "#BAEDBD" },
  { text: "Sponsored", value: 154.02, color: "#95A4FC" },
  { text: "E-mail", value: 48.96, color: "#B1E3FF" },
];
export function SalesChart() {
  const theme = useTheme();
  const processedData = salesData.map((item) => ({
    ...item,
    color: theme.palette[item.color]?.main || item.color,
  }));
  return (
    <Box
      sx={{
        bgcolor:
          theme.palette.tilelight?.main || theme.palette.background.paper,
        p: 3,
        borderRadius: 3,
        boxShadow:
          theme.palette.mode === "light"
            ? "0px 2px 6px rgba(0,0,0,0.08)"
            : "0px 2px 6px rgba(0,0,0,0.3)",
      }}
    >
      <Typography
        variant="h6"
        fontWeight={600}
        color={theme.palette.text.primary}
        mb={3}
      >
        Total Sales
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Box sx={{ position: "relative", width: 180, height: 180 }}>
          <PieChart
            series={[
              {
                valueKey: "value",
                innerRadius: 40,
                outerRadius: 70,
                cornerRadius: 8,
                paddingAngle: 1.5,
                data: salesData,
                arcLabel: null,
                highlightScope: { faded: "global", highlighted: "item" },
              },
            ]}
            legend={false}
            colors={salesData.map((d) => d.color)}
            width={180}
            height={180}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fill: "white",
                fontSize: theme.typography.body2.fontSize,
                fontWeight: 600,
              },
            }}
          />
        </Box>
      </Box>
      <Box>
        {processedData.map((item) => {
          const textColor =
            item.text === "Direct"
              ? theme.palette.text.primary
              : theme.palette.text.secondary;
          return (
            <Box
              key={item.text}
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 1.5,
                fontSize: theme.typography.body2.fontSize,
              }}
            >
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  background: item.color,
                  borderRadius: "50%",
                  mr: 2,
                  border:
                    item.text === "Direct"
                      ? "none"
                      : `1px solid ${theme.palette.divider}`,
                }}
              />
              <Box
                sx={{
                  flexGrow: 1,
                  fontWeight: item.text === "Direct" ? 600 : 500,
                  color: textColor,
                }}
              >
                {item.text}
              </Box>
              <Box
                sx={{ fontWeight: 500, color: theme.palette.text.secondary }}
              >
                ${item.value.toFixed(2)}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
