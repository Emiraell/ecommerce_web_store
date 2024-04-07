import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import linkedIn from "../assets/icons/linkedIn.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className=" fixed left-0 right-0 z-10 top-0 ">
      {/* add navbar */}
      <Navbar />
    </div>
  );
}
