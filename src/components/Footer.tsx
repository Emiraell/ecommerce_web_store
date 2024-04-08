import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import linkedIn from "../assets/icons/linkedIn.svg";
import { useAppSelector } from "../store/Store";

export default function Footer() {
  const userLoggedIn: boolean = useAppSelector(
    (state) => state.userReducer.userIn
  );
  return (
    <div className=" py-2 text-center bg-green-900 text-gray-100 md:text-lg italic tracking-wide fixed bottom-0 right-0 left-0">
      {userLoggedIn && (
        <div className=" flex items-center gap-7 justify-center pb-1">
          <a href="https://www.facebook.com/Edwinemmy.3?mibextid=LQQJ4d">
            <img src={facebook} alt="facbook" className="h-6" />
          </a>
          <a href="">
            <img src={twitter} alt="" className="h-6" />
          </a>
          <a href="https://twitter.com/emiirrael">
            <img
              src={linkedIn}
              alt="http://linkedin.com/in/emirael"
              className="h-6"
            />
          </a>
        </div>
      )}
      <FontAwesomeIcon icon={faCopyright} className=" text-blue-700" />{" "}
      <span>Emirael store 2024 | All right reserved</span>
    </div>
  );
}
