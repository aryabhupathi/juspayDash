
// import './App.css';
// import Dashboard from './components/Dashboard';

// function App() {
//   return (
//     <div className="App">
//       <Dashboard />
//     </div>
//   );
// }

// export default App;


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* other routes */}
      </Routes>
    </Router>
  );
}

export default App;
