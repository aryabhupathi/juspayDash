import { Card, Typography, Box, useTheme, ButtonBase } from "@mui/material";
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
    bgcolor:
      theme.palette.mode === "dark"
        ? theme.palette.blacklight.main
        : theme.palette.tilelight.main,
    color:
      theme.palette.mode === "dark"
        ? theme.palette.common.white
        : theme.palette.common.black,
    icon: (
      <TrendingDownIcon
        sx={{
          color:
            theme.palette.mode === "dark"
              ? theme.palette.common.white
              : theme.palette.common.black,
          fontSize: "medium",
        }}
      />
    ),
  },
  {
    title: "Revenue",
    value: "$695",
    diff: "+15.03%",
    diffColor: theme.palette.success.main,
    bgcolor:
      theme.palette.mode === "dark"
        ? theme.palette.blacklight.main
        : theme.palette.tilelight.main,
    color:
      theme.palette.mode === "dark"
        ? theme.palette.common.white
        : theme.palette.common.black,
    icon: (
      <TrendingUpIcon
        sx={{
          color:
            theme.palette.mode === "dark"
              ? theme.palette.common.white
              : theme.palette.common.black,
          fontSize: "medium",
        }}
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
  const handleClick = (title) => {
    console.log(`${title} clicked!`);
  };
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr 1fr", md: "1fr 1fr" },
        gap: 3,
      }}
    >
      {stats(theme).map((stat, index) => (
        <ButtonBase
          key={index}
          onClick={() => handleClick(stat.title)}
          sx={{
            borderRadius: 3,
            width: "100%",
            "&:hover .MuiCard-root": {
              transform: "scale(1.03)",
              boxShadow: theme.shadows[10],
            },
          }}
        >
          <Card
            sx={{
              p: 2,
              borderRadius: 3,
              bgcolor: stat.bgcolor,
              color: stat.color,
              width: "100%",
              transition:
                "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              transform: "scale(1)",
              cursor: "pointer",
              boxShadow: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: {
                xs: "center",
                md: "flex-start",
              },
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: theme.typography.body2.fontSize,
                fontWeight: "bold",
                mb: 1,
                color:
                  stat.title === "Orders" || stat.title === "Revenue"
                    ? theme.palette.mode === "dark"
                      ? theme.palette.common.white
                      : theme.palette.common.black
                    : theme.palette.common.black,
              }}
            >
              {stat.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
                alignItems: "center",
                gap: 1,
                width: "100%",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: theme.typography.h4.fontSize,
                  fontWeight: "bold",
                  color:
                    stat.title === "Orders" || stat.title === "Revenue"
                      ? theme.palette.mode === "dark"
                        ? theme.palette.common.white
                        : theme.palette.common.black
                      : theme.palette.common.black,
                }}
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
                <Typography
                  variant="caption"
                  fontWeight={600}
                  mr={0.5}
                  sx={{
                    fontSize: theme.typography.caption.fontSize,
                    color:
                      stat.title === "Orders" || stat.title === "Revenue"
                        ? theme.palette.mode === "dark"
                          ? theme.palette.common.white
                          : theme.palette.common.black
                        : theme.palette.common.black,
                  }}
                >
                  {stat.diff}
                </Typography>
                {stat.icon}
              </Box>
            </Box>
          </Card>
        </ButtonBase>
      ))}
    </Box>
  );
}
