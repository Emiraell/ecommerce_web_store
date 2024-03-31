import NavButtons from "../components/NavButtons";
import Carousel from "../components/slider/Carousel";
import { useAppSelector } from "../store/Store";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
export default function Home() {
  const products: any[] = useAppSelector((state) => state.productReducer.name);

  return (
    <div className="  pt-32 md:pt-44">
      <Carousel />
      <NavButtons />
      <div className="mx-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {products?.slice(0, 10).map((product, index) => (
          <div
            key={index}
            className=" shadow-lg rounded-lg text-lg tracking-wide"
          >
            <img
              src={product.images[0]}
              alt=""
              className=" rounded-lg border-b-4 border-blue-200 h-62 object-cover w-full"
            />
            <div className="p-5">
              <h3 className=" text-center font-semibold py-3">
                {product.title}
              </h3>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
        <Link to="/shop_all" className=" text-xl tracking-wider text-blue-500">
          Shop all
        </Link>
      </div>
      <Footer />
    </div>
  );
}
