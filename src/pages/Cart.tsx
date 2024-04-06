import { useEffect, useState } from "react";
import { cartProduct, removeItem } from "../store/features/Cart";
import { useAppDispatch, useAppSelector } from "../store/Store";

interface Icart {
  cart: cartProduct[];
  totalPrice: number;
}
export default function Cart() {
  //  get all products available in the cart
  const { cart, totalPrice }: Icart = useAppSelector(
    (state) => state.cartReducer
  );

  const [itemsTotalPrice, setItemsTotalPrice] = useState<number>(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    cart.map((productPrice) =>
      setItemsTotalPrice(itemsTotalPrice + productPrice.subTotal)
    );
  }, []);
  return (
    <div className="pt-48 md:w-[70%] lg:w-[80%] m-auto w-[90%]">
      {/* title */}
      <p className=" text-xl text-orange-500 font-semibold pb-8">
        Shopping Bag
      </p>
      <div className="lg:grid grid-cols-2 gap-10">
        {cart?.map((product) => (
          // single product content
          <div
            key={product.id}
            className=" grid grid-cols-5 shadow-md my-10 py-3 gap-x-10"
          >
            <div className=" col-span-2">
              <img src={product.image} alt={`${product.title} photo`} />
              <div>
                <p className="text-center">{product.brand}</p>
                {/* <p>{product.description}</p> */}
              </div>
            </div>
            <div className=" col-span-3 flex flex-col gap-3 justify-center">
              <p>Item: {product.title}</p>
              <p>Quantity: {product.quantity}</p>
              <p>Single Item Price: ${product.price}</p>
              <p>Total Item price: ${product.subTotal}</p>

              {/* remove product from cart */}
              <button
                className="w-full bg-red-500 rounded-full py-2"
                onClick={() => dispatch(removeItem(product))}
              >
                Remove item
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* cart total price */}
      {totalPrice !== 0 && (
        <p className=" font-bold text-lg">
          Total: <span className="text-orange-500">${totalPrice}</span>
        </p>
      )}
    </div>
  );
}
