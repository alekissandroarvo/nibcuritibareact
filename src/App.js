import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Senib from "./components/senib/Senib";
import HomePage from "./components/homepage/HomePage";
import Ofertas from "./components/ofertas/Ofertas";
import Ministerios from "./components/ministerios/Ministerios";
import Avisos from "./components/avisos/Avisos";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/senib" element={<Senib />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/ministerios" element={<Ministerios />} />
        <Route path="/avisos" element={<Avisos />} />
      </Routes>
    </div>
  );
}
