import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import { useAppDispatch, useAppSelector } from "./store/Store";
import { useEffect } from "react";
import { getProducts } from "./store/features/products";
import SingleProduct from "./pages/SingleProduct";
import ShopAll from "./pages/shopAll/ShopAll";
import Cart from "./pages/Cart";

function App() {
  const product = useAppSelector(
    (state) => state.persistedReducer.productReducer.name
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProducts());
    console.log(product);
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
