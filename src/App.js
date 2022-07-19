import { Switch } from "@mui/material";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Pay from "./components/Pay";
import Success from "./components/Success";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
         <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pay" element={<Pay />} />
                <Route path="/success" element={<Success />} />
                <Route path="/productlist" element={<ProductList />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/addtocart" element={<Product />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App;
