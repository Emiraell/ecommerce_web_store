import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { product } from "../../store/features/products";

// props interface
interface IProps {
  product: product;
}

export default function SingleProduct({ product }: IProps) {
  return (
    <div
      key={product.id}
      className=" shadow-lg rounded-lg text-lg tracking-wide relative"
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
        <div className="p-5">
          <h3 className=" text-center font-semibold py-3">{product.title}</h3>
          <div className=" flex justify-around pt-6">
            <p className=" text-xl font-bold">${product.price}</p>
            <div className=" text-orange-500">
              <p>{product.rating < 2 && <FontAwesomeIcon icon={faStar} />}</p>
              <p>
                {product.rating < 3 && (
                  <span>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                )}
              </p>
              <p>
                {product.rating < 4 && (
                  <span>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                )}
              </p>
              <p>
                {product.rating < 5 && (
                  <span>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
