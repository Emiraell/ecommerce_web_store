import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faUser,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import { useState } from "react";

interface pages {
  name: string;
  path: string;
}
export default function Navbar() {
  const navbarPages: pages[] = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Contact", path: "/contact" },
  ];

  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  return (
    <>
      <Header />
      <div className="bg-red-800 w-full fixed top-16 flex justify-between p-5 text-gray-200 ">
        <p className=" font-rochester hidden md:block text-3xl text-green-400">
          emirael shop
        </p>

        <div>
          <p
            className={`md:hidden text-2xl`}
            onClick={() => setMenuOpened(!menuOpened)}
          >
            {!menuOpened ? (
              <FontAwesomeIcon icon={faBars} />
            ) : (
              <FontAwesomeIcon icon={faX} />
            )}
          </p>

          <div
            className={` ${
              !menuOpened ? "hidden" : "block my-8"
            } md:flex justify-between items-center md:w-[25vw] text-lg tracking-wide`}
          >
            {navbarPages.map((page) => (
              <ol key={page.name} className={`${menuOpened && "my-5"}`}>
                <Link to={`${page.path}`}>{page.name}</Link>
              </ol>
            ))}
          </div>
        </div>

        <p
          className={`font-rochester text-green-400 ${
            menuOpened && "hidden"
          } md:hidden text-3xl`}
        >
          emirael shop
        </p>
        <div className=" flex text-xl">
          <div>
            <span>user</span>
            <FontAwesomeIcon icon={faUser} className="px-1" />
          </div>
          <div className="md:mx-5 mx-2">
            <span className=" hidden md:inline">cart</span>
            <FontAwesomeIcon icon={faCartShopping} className="px-1" />
          </div>
        </div>
      </div>
    </>
  );
}
