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
        main: "#1C1C1C",
      },
      background: {
        default: mode === "light" ? "#f9f9f9" : "#121212",
        paper: mode === "light" ? "#ffffff" : "#797878ff",
      },
    },
    typography: {
      fontFamily: "'Roboto', sans-serif",
      h1: {
        fontSize: "2.5rem", // 40px
        fontWeight: 700,
        lineHeight: 1.2,
      },
      h2: {
        fontSize: "2rem", // 32px
        fontWeight: 700,
        lineHeight: 1.3,
      },
      h3: {
        fontSize: "1.75rem", // 28px
        fontWeight: 600,
        lineHeight: 1.3,
      },
      h4: {
        fontSize: "1.5rem", // 24px
        fontWeight: 600,
        lineHeight: 1.35,
      },
      h5: {
        fontSize: "1.25rem", // 20px
        fontWeight: 600,
        lineHeight: 1.4,
      },
      h6: {
        fontSize: "1.125rem", // 18px
        fontWeight: 600,
        lineHeight: 1.4,
      },
      subtitle1: {
        fontSize: "1rem", // 16px
        fontWeight: 500,
        lineHeight: 1.5,
      },
      subtitle2: {
        fontSize: "0.875rem", // 14px
        fontWeight: 500,
        lineHeight: 1.5,
      },
      body1: {
        fontSize: "1rem", // 16px
        lineHeight: 1.6,
        color: mode === "light" ? "#444" : "#ddd",
      },
      body2: {
        fontSize: "0.875rem", // 14px
        lineHeight: 1.6,
        color: mode === "light" ? "#666" : "#aaa",
      },
      caption: {
        fontSize: "0.75rem", // 12px
        lineHeight: 1.4,
        color: mode === "light" ? "#888" : "#bbb",
      },
      overline: {
        fontSize: "0.75rem", // 12px
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        fontWeight: 500,
      },
      button: {
        fontSize: "0.875rem", // 14px
        fontWeight: 600,
        textTransform: "capitalize",
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
