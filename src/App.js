import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import OrdersTable from "./components/OrdersTable";
import HomePage from "./components/HomePage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Dashboard />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<OrdersTable />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;