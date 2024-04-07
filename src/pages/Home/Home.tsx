import NavButtons from "./NavButtons";
import Carousel from "../../components/slider/Carousel";
import Footer from "../../components/Footer";
import Products from "./Products";
import Header from "../../components/Header";
export default function Home() {
  return (
    <div className="">
      {/* add component for the home page */}
      <Header />
      <Carousel />
      <NavButtons />
      <Products />
      <Footer />
    </div>
  );
}
