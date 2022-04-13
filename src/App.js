import "./App.css";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import Products from "./Components/Products";
import Product from "./Components/Product/Product";
import Cart from "./Components/Cart";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
