import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../store/Store";
import { addToCart } from "../../store/features/Cart";
import { product } from "../../store/features/products";
import { Rating } from "@mui/material";

// received props interface
interface Iproduct {
  product: product;
}

export default function Product({ product }: Iproduct) {
  // dispatch function
  const dispatch = useAppDispatch();
  return (
    <div className="mx-3 shadow-lg">
      <div>
        <Link to={`/product/${product.id}`}>
          <div className="relative">
            <img
              src={product.images[0]}
              alt=""
              className="rounded-lg h-48 object-cover w-full"
            />
            <p className=" absolute top-14 right-3 text-red-700 text-3xl font-bold uppercase -rotate-45">
              Sale%
            </p>
          </div>
        </Link>
        <div className="bg-gray-100 py-4">
          <div className="text-center text-xl font-bold md:h-16 pb-3 ">
            <Link to={`/product/${product.id}`}>
              <span>{product.title}</span>
              <FontAwesomeIcon icon={faMinus} className="px-2" />
              <span>{product.brand}</span>
            </Link>
          </div>
          <p className="text-center px-3 md:h-32 h-28 md:text-lg tracking-wider">
            {product.description}
          </p>

          <div className="flex justify-around py-3">
            <p className=" text-xl font-bold text-emerald-900 ">
              ${product.price}
            </p>
            <div className=" text-orange-400">
              {/* product rating */}
              <Rating
                name="read-only"
                readOnly
                value={product.rating}
                precision={0.1}
              />
            </div>
          </div>
          <button
            className=" w-full bg-yellow-500 p-3 rounded-full "
            // add product to cart
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
