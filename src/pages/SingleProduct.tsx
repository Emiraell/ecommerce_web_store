import { useParams } from "react-router-dom";
import { useAppSelector } from "../store/Store";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function SingleProduct() {
  const products: any[] = useAppSelector(
    (state) => state.persistedReducer.productReducer.name
  );
  const [product, setProduct] = useState<any | null>(null);

  useEffect(() => {
    products?.map((product: any) => {
      product.id == id && (setProduct(product), console.log(product));
    });
  }, []);
  const { id } = useParams();
  return (
    <div className=" h-[100vh] items-center flex w-[90%] m-auto md:pt-40 lg:w-[80%]">
      <div className=" flex md:flex-row flex-col md:items-center">
        <div className=" lg:w-2/3 mr-5">
          <img
            src={product?.images[3]}
            alt=""
            className=" object-cover h-[40vh] md:h-[48vh] lg:h-[60vh] rounded-lg "
          />
        </div>
        <div className=" px-3 text-xl">
          <p className=" font-bold md:text-2xl pt-4">
            {product?.title} - <span>{product?.brand}</span>
          </p>
          <p className="text-lg py-5  tracking-wide px-2">
            {product.description}
          </p>
          <div className=" text-gray-600">
            <p>Availability: In stock</p>
            <p>Category: {product?.category}</p>
            <p>Brand: {product?.brand}</p>
          </div>

          <p className="text-red-700 font-bold text-2xl py-6">
            ${product?.price}
          </p>

          <div className="font-bold">
            <span className="text-bold text-xl ">Quantity:</span>
            <p className="border py-3 w-fit border-gray-700 rounded-full px-4 my-2 -ml-2">
              <FontAwesomeIcon icon={faMinus} />{" "}
              <span className="mx-9 ">1</span>
              <FontAwesomeIcon icon={faPlus} />
            </p>
            <span>Subtotal: ${product?.price}</span>
          </div>
          <button
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
