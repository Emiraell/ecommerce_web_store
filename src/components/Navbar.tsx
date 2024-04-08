import {
  faBars,
  faShoppingCart,
  faUser,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/Store";
import {} from "@material-tailwind/react";
import { logout } from "../store/features/auth";

interface IUser {
  userName: string;
  userIn: boolean;
}
export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  // open menu bar on small screen devices
  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  // total number of items in the cart
  const totalCart = useAppSelector((state) => state.cartReducer.totalItem);

  // logged in user info
  const { userName: name, userIn }: IUser = useAppSelector(
    (state) => state.userReducer
  );

  //  dispatcch
  const dispatch = useAppDispatch();

  return (
    <nav
      className={` flex justify-between px-5 md:px-7 py-5 text-lg md:text-2xl md:items-center bg-[#2d3900] text-slate-100`}
    >
      {userIn && (
        <div className=" md:hidden" onClick={() => setMenuOpened(!menuOpened)}>
          {!menuOpened ? (
            <FontAwesomeIcon icon={faBars} />
          ) : (
            <FontAwesomeIcon icon={faX} />
          )}
        </div>
      )}
      <p>
        <Link to="/">
          emirael
          <span className=" font-rochester text-red-400 text-xl md:text-2xl tracking-wider">
            Store
          </span>
        </Link>
      </p>
      {userIn && (
        <>
          <div className="md:static absolute mt-11  md:mt-0 left-0 right-0 bg-[#2d3900] px-7 md:px-0 ">
            <ul
              className={` ${
                !menuOpened && "hidden md:flex"
              } flex md:flex-row md:items-center flex-col gap-6 w-[100vw] md:w-fit py-5`}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop_all">Shop all</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>

          <div className=" flex gap-4 items-center ">
            {/* logout */}
            <p onClick={() => dispatch(logout())}>
              {/* display only the first three letters of user */}
              {name.substring(0, 3)} <FontAwesomeIcon icon={faUser} />
            </p>
            <div
              className=" w-fit"
              onClick={() => {
                setIsCartOpen(!isCartOpen);
              }}
            >
              <Link to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} />
                <p className=" absolute top-0 md:top-4 right-3 md:right-5 text-red-500 text-2xl md:text-3xl">
                  {totalCart !== 0 && totalCart}
                </p>
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
