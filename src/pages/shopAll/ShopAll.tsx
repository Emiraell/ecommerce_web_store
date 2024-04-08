import { useEffect, useState } from "react";
import { useAppSelector } from "../../store/Store";
import Product from "./Product";
import { product, products } from "../../store/features/products";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ShopAll() {
  //  get all products
  const { products, status }: products = useAppSelector(
    (state) => state.productReducer
  );

  // products for each category
  const [laptops, setLaptops] = useState<product[] | null>(null);
  const [phones, setPhones] = useState<product[] | null>(null);
  const [fragrances, setFragrances] = useState<product[] | null>(null);
  const [skincares, setSkincares] = useState<product[] | null>(null);
  const [groceries, setGroceries] = useState<product[] | null>(null);
  const [homeDecorations, setHomeDecorations] = useState<product[] | null>(
    null
  );

  //  assign products to each category
  const assignProducts = () => {
    products?.map((product: any) => {
      product.category === "smartphones" &&
        setPhones((prev) => (prev ? [...prev, product] : [product]));
      product.category === "laptops" &&
        setLaptops((prev) => (prev ? [...prev, product] : [product]));
      product.category === "fragrances" &&
        setFragrances((prev) => (prev ? [...prev, product] : [product]));
      product.category === "skincare" &&
        setSkincares((prev) => (prev ? [...prev, product] : [product]));
      product.category === "home-decoration" &&
        setHomeDecorations((prev) => (prev ? [...prev, product] : [product]));
      product.category === "groceries" &&
        setGroceries((prev) => (prev ? [...prev, product] : [product]));
    });
  };

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
        <p>{message}</p>
      ) : (
        // display items
        <div className="pb-32">
          <>
            <p className=" border-b border-green-500 mb-5 text-yellow-500 font-bolds text-xl py-2">
              Phones
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {phones?.map((phone) => (
                <Product product={phone} key={phone.id} />
              ))}
            </div>
          </>

          <div className="mt-16">
            <p className=" border-b border-green-500 mb-5 text-yellow-500 font-bolds text-xl py-2">
              Laptops
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {laptops?.map((laptop) => (
                <Product product={laptop} key={laptop.id} />
              ))}
            </div>
          </div>

          <div className="mt-16">
            <p className=" border-b border-green-500 mb-5 text-yellow-500 font-bolds text-xl py-2">
              Home Decoration
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {homeDecorations?.map((decoration) => (
                <Product product={decoration} key={decoration.id} />
              ))}
            </div>
          </div>

          <div className="mt-16">
            <p className=" border-b border-green-500 mb-5 text-yellow-500 font-bolds text-xl py-2">
              Skincare
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skincares?.map((skincare) => (
                <Product product={skincare} key={skincare.id} />
              ))}
            </div>
          </div>

          <div className="mt-16">
            <p className=" border-b border-green-500 mb-5 text-yellow-500 font-bolds text-xl py-2">
              Fragrances
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fragrances?.map((fragrance) => (
                <Product product={fragrance} key={fragrance.id} />
              ))}
            </div>
          </div>

          <div className="mt-16">
            <p className=" border-b border-green-500 mb-5 text-yellow-500 font-bolds text-xl py-2">
              Groceries
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {groceries?.map((grocery) => (
                <Product product={grocery} key={grocery.id} />
              ))}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
