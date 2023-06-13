import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Forge from "./forge/Forge";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forge" element={<Forge />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
