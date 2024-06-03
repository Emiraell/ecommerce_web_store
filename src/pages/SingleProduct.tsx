import { Params, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/Store";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { product } from "../store/features/products";
import { addToCart } from "../store/features/Cart";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Avatar, Rating } from "@mui/material";

export default function SingleProduct() {
  // get id from the url when page loads
  const { id }: Readonly<Params<string>> | any = useParams();

  // get products from the store
  const products: product[] | null = useAppSelector(
    (state) => state.productReducer.products
  );

  // single product
  const [product, setProduct] = useState<product>();

  const [amount, setAmount] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    // set product if the id matches the product id
    products?.map((product: product) => {
      if (product.id == id) {
        setProduct(product);
        setTotal(product.subTotal);
      }
    });
    // amount < 1 && setAmount(1);
  }, []);

  // dispatch action
  const dispatch = useAppDispatch();
  return (
    <div className=" h-[100vh] items-center flex w-[90%] m-auto pt-40 lg:w-[80%]">
      <Header />
      <div className=" flex md:flex-row flex-col md:items-center justify-center py-32">
        <div className=" md:w-1/3 mr-5">
          {/* product image */}
          <img
            src={product?.images[0]}
            alt={`${product?.title} image`}
            className=" object-cover rounded-lg "
          />
        </div>
        <div className=" px-3 text-xl">
          {/* product title */}
          <p className=" font-bold md:text-2xl pt-4">
            {product?.title} - <span>{product?.brand}</span>
          </p>
          {/* product description */}
          <p className="text-lg py-5 md:text-xl tracking-wider px-2">
            {product?.description}
          </p>
          {/* more product info */}
          <div className=" text-gray-600">
            <p>Availability: {product?.stock}</p>
            <p>Category: {product?.category}</p>
            <p>Brand: {product?.brand}</p>
            <p>Return Policy: {product?.returnPolicy}</p>
            <p>Warranty: {product?.warrantyInformation}</p>
            <p>Shipping Information: {product?.shippingInformation}</p>
            <div>
              <p className=" text-gray-950 py-3">Reviews</p>
              <div className="h-28 overflow-y-scroll p-4">
                {product?.reviews.map((review, i) => (
                  <div key={i} className=" py-3 border-b-2">
                    <div className="flex items-start gap-4 pb-3">
                      <Avatar children={review.reviewerName[0]} />
                      <div>
                        <div className="flex">
                          <p className="pr-5">{review.reviewerName}</p>
                          <Rating
                            precision={0.1}
                            readOnly
                            value={review.rating}
                          />
                        </div>
                        <p className="text-sm">{review.reviewerEmail}</p>
                      </div>
                    </div>
                    <p>{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* product price */}
          <p className="text-red-700 font-bold text-2xl py-6">
            ${product?.price}
          </p>

          <div className="font-bold">
            <span className="text-bold text-xl ">Quantity:</span>
            {/* product quantity */}
            <p className="border py-3 w-fit border-gray-700 rounded-full px-4 my-2 -ml-2">
              <FontAwesomeIcon
                className=" cursor-pointer"
                icon={faMinus}
                onClick={() => {
                  product &&
                    amount > 1 &&
                    (setAmount(amount - 1), setTotal(total - product?.price));
                }}
              />
              <span className="mx-9">{amount}</span>
              <FontAwesomeIcon
                className=" cursor-pointer"
                icon={faPlus}
                onClick={() => {
                  product &&
                    amount < product.stock &&
                    (setAmount(amount + 1), setTotal(total + product?.price));
                }}
              />
            </p>

            <span>Subtotal: ${total}</span>
          </div>

          <button
            onClick={() => {
              product &&
                dispatch(
                  addToCart({ ...product, quantity: amount, subTotal: total })
                );
              setAmount(1);
              product && setTotal(product?.price);
            }}
            className="my-5 bg-emerald-800 w-full py-3 rounded-full text-gray-100
					hover:text-emerald-800 hover:bg-transparent hover:border-2 border-emerald-800 cursor-pointer"
          >
            Add to cart
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
