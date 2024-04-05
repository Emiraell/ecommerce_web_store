import { useEffect } from "react";
import { removeItem } from "../store/features/Cart";
import { useAppDispatch, useAppSelector } from "../store/Store";

export default function Cart() {
  const cartProducts = useAppSelector((state) => state.cartReducer.cart);
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log("cart", cartProducts);
  }, []);
  return (
    <div className="pt-48 md:w-[70%] lg:w-[80%] m-auto w-[90%]">
      <p>Shopping Bag</p>
      <div className="lg:grid grid-cols-2 gap-8">
        {cartProducts?.map((product) => (
          <div
            key={product.id}
            className=" grid grid-cols-5 shadow-md my-10 py-3"
          >
            <div className=" col-span-2">
              <img src={product.image} alt="" />
              <div>
                <p className="text-center">{product.brand}</p>
                {/* <p>{product.description}</p> */}
              </div>
            </div>
            <div className=" col-span-3 flex flex-col gap-3 justify-center">
              <p>Item: {product.title}</p>
              <p>Quantity: {product.quantity}</p>
              <p>Single Item Price: ${product.price}</p>
              <p>Total Item price: ${product.totalPrice}</p>
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
    </div>
  );
}
