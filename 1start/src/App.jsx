import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NavBar from "./components/NavBar";
import "./App.css";
import ProductDetails from "./pages/ProductDetails";

export default function App(){

  return(
    <>
    <NavBar />
    <Routes>
      <Route index element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product-details/:id" element={<ProductDetails />} />
    </Routes>  
    </>
  )
}