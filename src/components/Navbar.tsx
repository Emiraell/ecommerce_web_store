import {
  faBars,
  faShoppingCart,
  faUser,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../store/Store";
import {} from "@material-tailwind/react";

export default function Navbar() {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  const totalCart = useAppSelector((state) => state.cartReducer.totalItem);
  return (
    <nav
      className={` flex justify-between px-5 md:px-7 py-5 text-lg md:text-2xl md:items-center bg-[#2d3900] text-slate-100`}
    >
      <div className=" md:hidden" onClick={() => setMenuOpened(!menuOpened)}>
        {!menuOpened ? (
          <FontAwesomeIcon icon={faBars} />
        ) : (
          <FontAwesomeIcon icon={faX} />
        )}
      </div>
      <p>emirael store</p>
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
        <p>
          user <FontAwesomeIcon icon={faUser} />
        </p>
        <div className=" w-fit">
          {" "}
          <Link to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            <p className=" absolute top-[65px] right-3 text-red-500 text-2xl">
              {totalCart}
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
