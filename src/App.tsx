import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { useAppDispatch, useAppSelector } from "./store/Store";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { getProducts } from "./store/features/products";
import SingleProduct from "./pages/SingleProduct";
import ShopAll from "./pages/shopAll/ShopAll";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import ToTop from "./components/ToTop";
import About from "./pages/About";
import Error from "./pages/Error";

interface OpenCart {
  cartOpen: boolean;
  setCartOpen: Dispatch<SetStateAction<boolean>>;
}
export const AppContext = createContext<OpenCart>({
  cartOpen: false,
  setCartOpen: () => false,
});
function App() {
  // dispatch action
  const dispatch = useAppDispatch();
  const userIn: boolean = useAppSelector((state) => state.userReducer.userIn);
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  // get products on page load
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div className="font-roboto">
      <AppContext.Provider value={{ cartOpen, setCartOpen }}>
        <Router basename="/ecommerce_web_store">
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
            <Route
              path="/shop_all"
              element={userIn ? <ShopAll /> : <Login />}
            />
            {/* <Route path="/cart" element={userIn ? <Cart /> : <Login />} /> */}
            <Route path="/about" element={userIn ? <About /> : <Login />} />
            <Route path="*" element={userIn ? <Error /> : <Login />} />
          </Routes>
          <Cart />
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
