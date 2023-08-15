import { useState } from "react";
import "./App.css";
import PortfolioGrid from "./assets/components/PortfolioGrid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <PortfolioGrid />
    </div>
  );
}

export default App;
