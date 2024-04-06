import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import { useAppDispatch } from "./store/Store";
import { useEffect } from "react";
import { getProducts } from "./store/features/products";
import SingleProduct from "./pages/SingleProduct";
import ShopAll from "./pages/shopAll/ShopAll";
import Cart from "./pages/Cart";
// import Cart from "./pages/Cart";

function App() {
  // dispatch action
  const dispatch = useAppDispatch();

  // get products on page load
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div className="font-roboto">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/shop_all" element={<ShopAll />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
