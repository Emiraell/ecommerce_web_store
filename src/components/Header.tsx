import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import linkedIn from "../assets/icons/linkedIn.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className=" flex fixed left-0 right-0 justify-between bg-gray-600 items-center">
      <div className=" flex items-center p-2">
        <FontAwesomeIcon icon={faMagnifyingGlass} className=" p-4" />
        <input
          type="text"
          className="w-[63vw] bg-transparent px-5 outline-none placeholder:text-gray-300"
          placeholder="what are you searching for?"
        />
      </div>
      <div className=" flex items-center">
        <a href="">
          <img src={facebook} alt="" className="h-5" />
        </a>
        <a href="">
          <img src={twitter} alt="" className="h-5 mx-3" />
        </a>
        <a href="">
          <img src={linkedIn} alt="" className="h-5 mr-5" />
        </a>
      </div>
    </div>
  );
}
