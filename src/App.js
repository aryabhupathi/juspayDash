import { useState, useEffect, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import getTheme from "./theme";
import Dashboard from "./components/Dashboard";
import OrdersTable from "./components/OrdersTable";
import HomePage from "./components/HomePage";
const App = () => {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("themeMode") || "light";
  });
  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);
  const theme = useMemo(() => getTheme(mode), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route element={<Dashboard mode={mode} setMode={setMode} />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<OrdersTable />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
export default App;
