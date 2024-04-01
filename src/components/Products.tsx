import { Link } from "react-router-dom";
import { useAppSelector } from "../store/Store";

export default function Products() {
  const products: any[] = useAppSelector(
    (state) => state.persistedReducer.productReducer.name
  );
  return (
    <div className="mx-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
      {products?.slice(0, 10).map((product, index) => (
        <div
          key={index}
          className=" shadow-lg rounded-lg text-lg tracking-wide"
        >
          <img
            src={product.images[0]}
            alt=""
            className=" rounded-lg border-b-4 border-blue-200 h-64 object-contain w-full"
          />
          <div className="p-5">
            <h3 className=" text-center font-semibold py-3">{product.title}</h3>
            <p>{product.description}</p>
          </div>
        </div>
      ))}
      <Link to="/shop_all" className=" text-xl tracking-wider text-blue-500">
        Shop all
      </Link>
    </div>
  );
}
