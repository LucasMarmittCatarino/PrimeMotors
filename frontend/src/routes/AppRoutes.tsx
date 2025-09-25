import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "~/pages/Products";
import Login from "~/pages/Login";
import SignUp from "~/pages/SignUp";
import MainLayout from "~/layouts/MainLayout";
import Profile from "~/pages/Profile";
import ProductDetails from "~/pages/ProductDetails";
import ProductForm from "~/pages/ProductForm";
import Cart from "~/pages/Cart";
import AdminOrders from "~/pages/AdminOrders";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Rotas com Header */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin-orders" element={<ProtectedRoute><AdminOrders /></ProtectedRoute>} />
        </Route>

        {/* Rotas sem Header */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products/new" element={<ProductForm />} />
        <Route path="/products/:id/edit" element={<ProductForm />} />
        <Route path="/cart" element={<ProtectedRoute><Cart/></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
