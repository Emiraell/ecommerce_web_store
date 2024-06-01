import { useEffect, useState } from "react";
import { useAppSelector } from "../../store/Store";
import { product, products } from "../../store/features/products";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SliderCarousel from "./Slider";

export default function ShopAll() {
  //  get all products
  const { products, status }: products = useAppSelector(
    (state) => state.productReducer
  );

  // products for each category
  const [funitures, setFunitures] = useState<product[] | null>(null);
  const [beauty, setBeauty] = useState<product[] | null>(null);
  const [fragrances, setFragrances] = useState<product[] | null>(null);
  const [skincares, setSkincares] = useState<product[] | null>(null);
  const [groceries, setGroceries] = useState<product[] | null>(null);
  const [homeDecorations, setHomeDecorations] = useState<product[] | null>(
    null
  );

  //  assign products to each category
  const assignProducts = () => {
    products?.map((product: product) => {
      product.category === "beauty" &&
        setBeauty((prev) => (prev ? [...prev, product] : [product]));
      product.category === "furniture" &&
        setFunitures((prev) => (prev ? [...prev, product] : [product]));
      product.category === "fragrances" &&
        setFragrances((prev) => (prev ? [...prev, product] : [product]));
      product.category === "groceries" &&
        setGroceries((prev) => (prev ? [...prev, product] : [product]));
    });
    console.log(products);
  };

  useEffect(() => {
    assignProducts();
  }, []);

  // message to display if products ain't displaying
  const [message, setMessage] = useState<string>("");
  // assign on page load
  useEffect(() => {
    assignProducts();
    status === "pending" && setMessage("Loading....");
    status === "error" &&
      setMessage("something went wrong, please check connection and refresh");
  }, []);

  return (
    <div className="pt-32 md:pt-44 w-[90%] m-auto text-lg  tracking-wider">
      <Header />
      {/* display message */}
      {products && products.length < 1 ? (
        <p className="italic text-red-500">{message}</p>
      ) : (
        // display items
        <div className="pb-32">
          <>
            <p className=" border-b border-green-500 mb-5 text-yellow-500 font-bolds text-xl py-2">
              Beauty
            </p>
            <SliderCarousel products={beauty} />
          </>

          <div className="mt-16">
            <p className=" border-b border-green-500 mb-5 text-yellow-500 font-bolds text-xl py-2">
              Funitures
            </p>
            <SliderCarousel products={funitures} />
          </div>

          <div className="mt-16">
            <p className=" border-b border-green-500 mb-5 text-yellow-500 font-bolds text-xl py-2">
              Fragrances
            </p>
            <SliderCarousel products={fragrances} />
          </div>

          <div className="mt-16">
            <p className=" border-b border-green-500 mb-5 text-yellow-500 font-bolds text-xl py-2">
              Groceries
            </p>
            <SliderCarousel products={groceries} />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
