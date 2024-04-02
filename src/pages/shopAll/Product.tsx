import { faMinus, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Product({ product }: any) {
  return (
    <div>
      <div key={product.id} className=" shadow-lg">
        <Link to={`/product/${product.id}`}>
          <div className="relative">
            <img
              src={product.images[0]}
              alt=""
              className="rounded-lg h-48 object-contain w-full"
            />{" "}
            <p className=" absolute top-14 right-3 text-red-700 text-3xl font-bold uppercase -rotate-45">
              Sale%
            </p>
          </div>
          <div className="text-center text-xl font-bold md:h-16 mt-4 ">
            <span>{product.title}</span>{" "}
            <FontAwesomeIcon icon={faMinus} className="px-2" />
            <span>{product.brand}</span>
          </div>
        </Link>
        <p className="text-center px-3 md:h-32 text-lg">
          {product.description}
        </p>

        <div className="flex justify-around">
          <p className=" text-xl font-bold text-emerald-900 ">
            ${product.price}
          </p>{" "}
          <div className=" text-orange-400">
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
        <button className=" w-full my-5 bg-yellow-500 p-3 rounded-full ">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
