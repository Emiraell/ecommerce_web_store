import { faFaceAngry } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className=" bg-gray-300 h-[100vh] text-center pt-40">
      <p>
        <FontAwesomeIcon icon={faFaceAngry} className=" text-red-600 px-3" />
        404... page not found
      </p>
      <br />
      <Link to="/" className=" text-blue-600 italic">
        click to here to return to homepage
      </Link>
    </div>
  );
}
