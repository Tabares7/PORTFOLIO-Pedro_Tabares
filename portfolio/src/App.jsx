import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import PortfolioGrid from "./assets/components/PortfolioGrid";
import DevProjectsGrid from "./assets/components/DevProjectsGrid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-gray-100">
              <PortfolioGrid />
            </div>
          }
        />
        <Route
        path="/projects"
        element={
          <DevProjectsGrid/>
        }
        />
      </Routes>
    </Router>
  );
}

export default App;
