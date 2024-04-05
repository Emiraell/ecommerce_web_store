import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/Store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { getProducts, product } from "../store/features/products";

export default function Products() {
  // all products
  const products: product[] = useAppSelector(
    (state) => state.productReducer.products
  );

  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(getProducts());
  // }, []);
  return (
    <div className="mx-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
      {products?.slice(0, 10).map((product, index) => (
        <div
          key={index}
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
              <h3 className=" text-center font-semibold py-3">
                {product.title}
              </h3>
              <div className=" flex justify-around pt-6">
                <p className=" text-xl font-bold">${product.price}</p>
                <div className=" text-orange-500">
                  <p>
                    {product.rating < 2 && <FontAwesomeIcon icon={faStar} />}
                  </p>
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
      ))}
      <span>
        <Link to="/shop_all" className=" text-xl tracking-wider text-blue-500">
          Shop all
        </Link>
      </span>
    </div>
  );
}
