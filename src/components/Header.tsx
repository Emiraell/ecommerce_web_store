import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import linkedIn from "../assets/icons/linkedIn.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className=" fixed left-0 right-0 z-10">
      <div className="flex justify-between bg-gray-600 items-center px-4">
        <div className=" flex items-center p-2">
          <FontAwesomeIcon icon={faMagnifyingGlass} className=" p-4" />
          <input
            type="text"
            className="w-[60vw] bg-transparent px-2 outline-none placeholder:text-gray-300"
            placeholder="what are you searching for?"
          />
        </div>
        <div className=" flex items-center gap-3 md:gap-4">
          <a href="">
            <img src={facebook} alt="" className="h-6" />
          </a>
          <a href="">
            <img src={twitter} alt="" className="h-6" />
          </a>
          <a href="">
            <img src={linkedIn} alt="" className="h-6" />
          </a>
        </div>
      </div>

      <Navbar />
    </div>
  );
}
