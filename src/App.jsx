import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import PriceList from "./components/PriceList/PriceList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className="text-7xl text-purple-700">Hello from tailwind!!!</h1>
      <PriceList></PriceList>
    </div>
  );
}

export default App;
