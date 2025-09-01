import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />         {/* Rota principal */}
        <Route path="/about" element={<About />} />   {/* Página secundária */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
