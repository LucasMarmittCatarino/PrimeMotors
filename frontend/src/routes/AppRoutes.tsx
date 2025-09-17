import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About/About";
import Products from "~/pages/Products";
import Login from "~/pages/Login";
import SignUp from "~/pages/SignUp";
import MainLayout from "~/layouts/MainLayout";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Rotas com Header */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Route>

        {/* Rotas sem Header */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
