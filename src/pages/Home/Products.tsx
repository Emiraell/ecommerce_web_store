import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/Store";
import { product, products } from "../../store/features/products";
import SingleProduct from "./SingleProduct";
import { useEffect, useState } from "react";

export default function Products() {
  // all products
  const { products, filteredProducts, status }: products = useAppSelector(
    (state) => state.productReducer
  );

  // message to display if products ain't displaying
  const [message, setMessage] = useState<string>("");
  // assign on page load
  useEffect(() => {
    status === "pending" && setMessage("Loading....");
    status === "error" &&
      setMessage("something went wrong, please check connection and refresh");
  }, []);

  return (
    <>
      {products && products.length < 1 ? (
        <p className="text-xl text-red-600 text-center italic py-10">
          {message}
        </p>
      ) : (
        <div className="mx-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
          {/* display product based on if they're filtered or not */}
          {filteredProducts.length !== 0
            ? filteredProducts.map((product) => (
                <SingleProduct product={product} />
              ))
            : products
                ?.slice(0, 10)
                .map((product) => <SingleProduct product={product} />)}
        </div>
      )}

      <span className="pb-32 px-16">
        <Link
          to="/shop_all"
          className=" text-lg tracking-wider text-blue-500 cursor-pointer"
        >
          Shop all
        </Link>
      </span>
    </>
  );
}
