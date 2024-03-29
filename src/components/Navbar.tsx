import {
  faBars,
  faShoppingCart,
  faUser,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Navbar() {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  return (
    <nav
      className={` flex justify-between px-5 md:px-7 py-5 text-lg md:text-2xl`}
    >
      <div className=" md:hidden" onClick={() => setMenuOpened(!menuOpened)}>
        {menuOpened ? (
          <FontAwesomeIcon icon={faBars} />
        ) : (
          <FontAwesomeIcon icon={faX} />
        )}
      </div>
      <p>emirael store</p>
      <div className="md:static absolute mt-16 md:mt-0 right-7 ">
        <ul
          className={` ${
            menuOpened ? "hidden" : "flex-col"
          } flex md:flex-row md:items-center gap-6`}
        >
          <li>Home</li>
          <li>Shop all</li>
          <li>About</li>
        </ul>
      </div>
      <div className=" flex gap-4 items-center ">
        <p>
          user <FontAwesomeIcon icon={faUser} />
        </p>
        <div>
          <FontAwesomeIcon icon={faShoppingCart} />
          <p className=" absolute top-[65px] right-3 text-red-500 text-2xl">
            0
          </p>
        </div>
      </div>
    </nav>
  );
}
