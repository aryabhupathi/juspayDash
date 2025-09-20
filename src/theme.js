import { createTheme } from "@mui/material/styles";
const getTheme = (mode = "light") =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#ffffff",
      },
      secondary: {
        main: "#a3bafa",
      },
      success: {
        main: "#4caf50",
      },
      info: {
        main: "#29b6f6",
      },
      blue: {
        main: "#E3F5FF",
      },
      purple: {
        main: "#E5ECF6",
      },
      pink: { main: "#C6C7F8" },
      cyan: {
        main: "#A8C5DA",
      },
      cyanlight: {
        main: "#bfe0f8ff",
      },
      light: {
        main: "#ccd3daff",
      },
      tilelight: {
        main: "#F7F9FB",
      },
      blacklight: {
        main: "#1C1C1C",
      },
      black: {
        main: "#000000ff",
      },
      progress: {
        main: "#8A8CD9",
      },
      complete: {
        main: "#4AA785",
      },
      pending: {
        main: "#59A8D4",
      },
      approved: {
        main: "#FFC555",
      },
      rejected: {
        main: mode === "light" ? "#1C1C1C" : "#4e4e4e",
      },
      pie: {
        main: "#C6C7F8",
      },
      background: {
        default: mode === "light" ? "#f9f9f9" : "#121212",
        paper: mode === "light" ? "#ffffff" : "#797878ff",
      },
    },
    typography: {
      fontFamily: "'Roboto', sans-serif",
      h4: {
        fontSize: "24px",
      },
      h5: {
        fontSize: "20px",
      },
      h6: {
        fontSize: "18px",
      },
      subtitle1: {
        fontSize: "16px",
        fontWeight: 500,
      },
      subtitle2: {
        fontSize: "14px",
      },
      body1: {
        fontSize: "16px",
        color: mode === "light" ? "#000" : "#ddd",
      },
      body2: {
        fontSize: "14px",
        color: mode === "light" ? "#000" : "#aaa",
      },
      caption: {
        fontSize: "12px",
        color: mode === "light" ? "#888" : "#bbb",
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            boxShadow: "0px 4px 12px rgba(0,0,0,0.05)",
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            textTransform: "capitalize",
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: "none",
          },
        },
      },
    },
  });
export default getTheme;
