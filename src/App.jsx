import { Activity, Heart } from "lucide-react";
import "./App.css";
import Rechart from "./components/Rechart/Rechart";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Rechart></Rechart>
      <Heart />
      <Activity />
    </>
  );
}

export default App;
