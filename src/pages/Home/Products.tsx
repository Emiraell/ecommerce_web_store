import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/Store";
import { product } from "../../store/features/products";
import SingleProduct from "./SingleProduct";

type IProduct = {
  products: product[] | null;
  filteredProducts: product[];
};
export default function Products() {
  // all products
  const { products, filteredProducts }: IProduct = useAppSelector(
    (state) => state.productReducer
  );

  return (
    <>
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
