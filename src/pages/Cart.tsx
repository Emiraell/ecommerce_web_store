import { useContext, useEffect, useState } from "react";
import { cartProduct, removeItem } from "../store/features/Cart";
import { useAppDispatch, useAppSelector } from "../store/Store";
import { AppContext } from "../App";
import { Box, Modal } from "@mui/material";

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
      <Modal
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        aria-labelledby="alert-modal-title"
        aria-describedby="alert-modal-description"
        sx={{
          overflow: "scroll",
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -20%)",
          border: "none",
          width: { xs: 350, md: 900 },
        }}
      >
        <Box sx={{ bgcolor: "#ede4e4" }}>
          {/* title and total price*/}
          <div className=" flex items-center justify-between p-5 mb-7 ">
            <p className=" text-xl text-orange-500 font-semibold  text-center">
              shopping bag
            </p>

            {/* cart total price */}
            {totalPrice !== 0 && (
              <p className=" font-bold text-lg">
                Total: <span className="text-orange-500">${totalPrice}</span>
              </p>
            )}
          </div>
          {cart.length === 0 ? (
            <p className="text-center text-gray-500 italic text-lg px-5 py-10">
              Shopping bag is empty shop to <br />
              fill up your bag
            </p>
          ) : (
            <Box
              sx={{
                display: { md: "grid" },
                gap: 3,
                px: 3,
                gridTemplateColumns: "1fr 1fr",
              }}
            >
              {cart?.map((product) => (
                // single product content
                <Box className=" flex shadow-lg py-3 gap-3 justify-center items-center">
                  <div className="w-20">
                    <div className="mb-2">
                      <img
                        src={product.image}
                        alt={`${product.title} photo`}
                        className=" rounded-sm object-contain"
                      />
                      <p className="text-center font-bold">{product.brand}</p>
                    </div>
                  </div>
                  <div className=" flex-1 overflow-hidden">
                    <p>Item: {product.title}</p>
                    <p className="py-1">Quantity: {product.quantity}</p>
                    <p>Single Item Price: ${product.price}</p>
                    <p className="py-1">
                      Total Item price: ${product.subTotal}
                    </p>

                    {/* remove product from cart */}
                    <button
                      className="w-full bg-red-500 rounded-full py-2 mt-3 hover:bg-gray-100
                     hover:border-2 hover:text-red-500 hover:border-red-500"
                      onClick={() => dispatch(removeItem(product))}
                    >
                      Remove item
                    </button>
                  </div>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Modal>
    </>
  );
}
