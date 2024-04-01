import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import { useAppDispatch } from "./store/Store";
import { useEffect } from "react";
import { getProducts } from "./store/features/products";
import SingleProduct from "./pages/SingleProduct";
function App() {
  const dispatch = useAppDispatch();
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
