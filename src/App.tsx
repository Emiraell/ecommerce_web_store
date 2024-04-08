import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { useAppDispatch, useAppSelector } from "./store/Store";
import { useEffect } from "react";
import { getProducts } from "./store/features/products";
import SingleProduct from "./pages/SingleProduct";
import ShopAll from "./pages/shopAll/ShopAll";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import ToTop from "./components/ToTop";
import About from "./pages/About";
import Error from "./pages/Error";

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
        <ToTop />
        {/* <Header /> */}
        <Routes>
          <Route
            path="/ecommerce_web_store"
            element={userIn ? <Home /> : <Login />}
          />
          <Route
            path="/product/:id"
            element={userIn ? <SingleProduct /> : <Login />}
          />
          <Route path="/shop_all" element={userIn ? <ShopAll /> : <Login />} />
          <Route path="/cart" element={userIn ? <Cart /> : <Login />} />
          <Route path="/about" element={userIn ? <About /> : <Login />} />
          <Route path="*" element={userIn ? <Error /> : <Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
