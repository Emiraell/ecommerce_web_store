import NavButtons from "./NavButtons";
import Carousel from "../../components/slider/Carousel";
import Footer from "../../components/Footer";
import Products from "./Products";
export default function Home() {
  return (
    <div className="pt-32 md:pt-44">
      {/* add component for the home page */}
      <Carousel />
      <NavButtons />
      <Products />
      <Footer />
    </div>
  );
}
