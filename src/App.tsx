import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header";
import { useAppDispatch, useAppSelector } from "./store/Store";
import { useEffect } from "react";
import { getProducts } from "./store/features/products";
import SingleProduct from "./pages/SingleProduct";
import ShopAll from "./pages/shopAll/ShopAll";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
// import Cart from "./pages/Cart";

function App() {
  // dispatch action
  const dispatch = useAppDispatch();
  const userIn: boolean = useAppSelector((state) => state.userReducer.userIn);

  // get products on page load
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div className="font-roboto">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={userIn ? <Home /> : <Login />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/shop_all" element={<ShopAll />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
