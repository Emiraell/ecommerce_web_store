import { useEffect, useState } from "react";
import { useAppSelector } from "../../store/Store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Product from "./Product";

export default function ShopAll() {
  const [laptops, setLaptops] = useState<any[] | null>();
  const [phones, setPhones] = useState<any[] | null>(null);
  const [fragrances, setFragrances] = useState<any[] | null>();
  const [skincares, setSkincares] = useState<any[] | null>();
  const [groceries, setGroceries] = useState<any[] | null>();
  const [homeDecorations, setHomeDecorations] = useState<any[] | null>();

  const products = useAppSelector(
    (state) => state.persistedReducer.productReducer.name
  );

  const assignProducts = () => {
    products.map((product: any) => {
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

  useEffect(() => {
    assignProducts();
  }, []);
  return (
    <div className="pt-44 w-[90%] m-auto text-lg  tracking-wider">
      <div>
        <p className=" border-b border-green-500 mb-5 ">Phone</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {phones?.map((phone) => (
            <Product product={phone} />
          ))}
        </div>
      </div>

      <div className="mt-16">
        <p className=" border-b border-green-500 mb-5 ">Laptops</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {laptops?.map((laptop) => (
            <Product product={laptop} />
          ))}
        </div>
      </div>

      <div className="mt-16">
        <p className=" border-b border-green-500 mb-5 ">Home Decoration</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homeDecorations?.map((decoration) => (
            <Product product={decoration} />
          ))}
        </div>
      </div>

      <div className="mt-16">
        <p className=" border-b border-green-500 mb-5 ">Skincare</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skincares?.map((skincare) => (
            <Product product={skincare} />
          ))}
        </div>
      </div>

      <div className="mt-16">
        <p className=" border-b border-green-500 mb-5 ">Fragrances</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fragrances?.map((fragrance) => (
            <Product product={fragrance} />
          ))}
        </div>
      </div>

      <div className="mt-16">
        <p className=" border-b border-green-500 mb-5 ">Groceries</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groceries?.map((grocery) => (
            <Product product={grocery} />
          ))}
        </div>
      </div>
    </div>
  );
}
