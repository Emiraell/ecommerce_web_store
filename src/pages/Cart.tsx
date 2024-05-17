import { useContext, useEffect, useState } from "react";
import { cartProduct, removeItem } from "../store/features/Cart";
import { useAppDispatch, useAppSelector } from "../store/Store";
import Footer from "../components/Footer";
import { AppContext } from "../App";
import { Dialog, DialogTitle } from "@mui/material";

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

  const { cartOpen, setCartOpen } = useContext(AppContext);

  useEffect(() => {
    cart.map((productPrice) =>
      setItemsTotalPrice(itemsTotalPrice + productPrice.subTotal)
    );
  }, []);
  return (
    <>
      {/* <Header /> */}
      <Dialog
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* title and total price*/}
        <div className="flex justify-between">
          {/* <p className=" text-xl text-orange-500 font-semibold pb-8"> */}
          <DialogTitle> Shopping Bag </DialogTitle>
          {/* </p> */}

          {/* cart total price */}
          {totalPrice !== 0 && (
            <p className=" font-bold text-lg">
              Total: <span className="text-orange-500">${totalPrice}</span>
            </p>
          )}
        </div>
        {cart.length === 0 ? (
          <p className="text-center text-gray-500 italic text-lg ">
            Shopping bag is empty
          </p>
        ) : (
          <div className="lg:grid grid-cols-2 gap-10">
            {cart?.map((product) => (
              // single product content
              <div
                key={product.id}
                className=" grid grid-cols-5 shadow-md my-10 py-3 gap-x-10 bg-gray-200"
              >
                <div className=" col-span-2">
                  <div className="mb-2 -mt-3">
                    <img
                      src={product.image}
                      alt={`${product.title} photo`}
                      className=" rounded-r-md"
                    />
                  </div>
                  <div>
                    <p className="text-center font-bold">{product.brand}</p>
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
                    className="w-full bg-red-500 rounded-full py-2 -ml-5"
                    onClick={() => dispatch(removeItem(product))}
                  >
                    Remove item
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </Dialog>
      <Footer />
    </>
  );
}
