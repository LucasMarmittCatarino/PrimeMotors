import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About/About";
import Products from "~/pages/Products";
import MainHeader from "~/components/MainHeader";

function AppRoutes() {
  return (
    <Router>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
