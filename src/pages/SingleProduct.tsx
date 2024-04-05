import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/Store";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { product } from "../store/features/products";
import { addToCart } from "../store/features/Cart";

export default function SingleProduct() {
  // get id from the url when page loads
  const { id } = useParams();

  // get products from the store
  const products: product[] = useAppSelector(
    (state) => state.productReducer.products
  );

  // single product
  const [product, setProduct] = useState<product>();

  useEffect(() => {
    // set product if the id matches the product id
    products?.map((product: any) => {
      product.id == id && setProduct(product);
    });
  }, []);

  // dispatch action
  const dispatch = useAppDispatch();
  return (
    <div className=" h-[100vh] items-center flex w-[90%] m-auto md:pt-40 lg:w-[80%]">
      <div className=" flex md:flex-row flex-col md:items-center">
        <div className=" lg:w-2/3 mr-5">
          {/* product image */}
          <img
            src={product?.images[0]}
            alt={`${product?.title} image`}
            className=" object-cover h-[40vh] md:h-[48vh] lg:h-[60vh] rounded-lg "
          />
        </div>
        <div className=" px-3 text-xl">
          {/* product title */}
          <p className=" font-bold md:text-2xl pt-4">
            {product?.title} - <span>{product?.brand}</span>
          </p>
          {/* product description */}
          <p className="text-lg py-5  tracking-wide px-2">
            {product?.description}
          </p>
          {/* more product info */}
          <div className=" text-gray-600">
            <p>Availability: In stock</p>
            <p>Category: {product?.category}</p>
            <p>Brand: {product?.brand}</p>
          </div>
          {/* product price */}
          <p className="text-red-700 font-bold text-2xl py-6">
            ${product?.price}
          </p>

          <div className="font-bold">
            <span className="text-bold text-xl ">Quantity:</span>
            {/* product quantity */}
            <p className="border py-3 w-fit border-gray-700 rounded-full px-4 my-2 -ml-2">
              <FontAwesomeIcon icon={faMinus} />{" "}
              <span className="mx-9 ">{product?.quantity}</span>
              <FontAwesomeIcon icon={faPlus} />
            </p>

            {/* <span>Subtotal: ${product?.price}</span> */}
          </div>

          <button
            onClick={() => product && dispatch(addToCart(product))}
            className="my-5 bg-emerald-800 w-full py-3 rounded-full text-gray-100
					hover:text-emerald-800 hover:bg-transparent hover:border-2 border-emerald-800"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
