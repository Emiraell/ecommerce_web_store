import NavButtons from "../components/NavButtons";
import Carousel from "../components/slider/Carousel";
import Footer from "../components/Footer";
import Products from "../components/Products";
export default function Home() {
  return (
    <div className="pt-32 md:pt-44">
      <Carousel />
      <NavButtons />
      <Products />
      <Footer />
    </div>
  );
}
