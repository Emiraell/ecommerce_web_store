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
        <p className=" font-rochester hidden md:block">emirael shop</p>

        <div>
          <p className={`md:hidden`} onClick={() => setMenuOpened(!menuOpened)}>
            {!menuOpened ? (
              <FontAwesomeIcon icon={faBars} />
            ) : (
              <FontAwesomeIcon icon={faX} />
            )}
          </p>

          <div
            className={` ${
              !menuOpened ? "hidden" : "block"
            } md:flex justify-between items-center md:w-[25vw]`}
          >
            {navbarPages.map((page) => (
              <ol key={page.name}>
                <Link to={`${page.path}`}>{page.name}</Link>
              </ol>
            ))}
          </div>
        </div>

        <p className=" font-rochester md:hidden">emirael shop</p>
        <div className=" flex">
          <div>
            <span>userName</span>
            <FontAwesomeIcon icon={faUser} className="px-1" />
          </div>
          <div className="mx-5">
            <span>cart</span>
            <FontAwesomeIcon icon={faCartShopping} className="px-1" />
          </div>
        </div>
      </div>
    </>
  );
}
