import { Link } from "react-router-dom";
import { product } from "../../store/features/products";
import { Rating } from "@mui/material";

// props interface
interface IProps {
  product: product;
}

export default function SingleProduct({ product }: IProps) {
  return (
    <div
      key={product.id}
      className=" shadow-lg rounded-lg text-lg tracking-wide relative hover:opacity-85 bg-gray-200"
    >
      <Link to={`/product/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={`${product.title} photo`}
          className=" rounded-lg border-b-4 border-blue-200 h-64 object-cover w-full"
        />
        <p className=" absolute top-14 right-3 text-red-700 text-3xl font-bold uppercase -rotate-45">
          Sale%
        </p>
        <div>
          <h3 className=" text-center font-semibold py-3">{product.title}</h3>
          <div className=" flex justify-around pt-2">
            <p className=" text-xl font-bold">${product.price}</p>
            <div className=" text-orange-500">
              <Rating
                precision={0.1}
                readOnly
                name="read-only"
                value={product.rating}
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
