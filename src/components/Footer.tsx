import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className=" py-4 text-center bg-green-950 text-gray-100 md:text-lg italic tracking-wide">
      <FontAwesomeIcon icon={faCopyright} className=" text-blue-700" />{" "}
      <span>Emirael store 2024 | All right reserved</span>
    </div>
  );
}
