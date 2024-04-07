import { useState } from "react";
import { auth, login } from "../store/features/auth";
import { useAppDispatch } from "../store/Store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  // user details
  const [userDetails, setUserDetails] = useState<auth>({
    userName: "",
    password: "",
    userIn: false,
  });

  // toggle password visibility
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  // Alert user if detals entered doesn't meet requirement
  const [alert, setAlert] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  return (
    <div className=" m-auto pt-48 md:w-fit tracking-wider md:text-lg w-full">
      <div className="py-10">
        <p className=" text-green-700 font-rochester text-xl md:text-2xl">
          Welcome to emirael store
        </p>
      </div>

      {/* login form */}
      <form
        action=""
        className="bg-blue-950 px-10 py-10 rounded-lg text-slate-200 mx-5 "
      >
        {/* user name */}
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="block rounded text-gray-900 p-1 outline-none w-60"
            placeholder="user"
            onChange={(e) =>
              setUserDetails({ ...userDetails, userName: e.target.value })
            }
          />
        </div>

        {/* password */}
        <div className="my-4 relative">
          <label htmlFor="password">Password</label>
          <input
            type={!passwordVisible ? "password" : "text"}
            id="password"
            className="block rounded text-gray-900 p-1 outline-none w-60"
            placeholder="Enter password"
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
          />
          <FontAwesomeIcon
            icon={faEye}
            className="absolute right-2 top-7 text-gray-800"
            onClick={() => setPasswordVisible(!passwordVisible)}
          />
        </div>

        {/* message if entered details doesn't meet requirement */}
        {alert && (
          <p className="text-sm text-red-500 italic">
            Name and password are all <br /> required <br />
            NB: password mustn't be less
            <br /> than 5 characters
          </p>
        )}

        {/* submit */}
        <button
          className=" bg-green-700 w-full rounded-md hover:opacity-80 py-2 mt-3"
          onClick={(e) => {
            e.preventDefault();

            // conditions to meet before user is logged in
            if (
              userDetails.password &&
              userDetails.userName !== "" &&
              userDetails.password?.length > 5
            ) {
              setUserDetails({ ...userDetails, userIn: true });
              dispatch(login(userDetails));
            } else {
              setUserDetails({ userName: "", password: "", userIn: false });
              setAlert(true);
              setTimeout(() => {
                setAlert(false);
              }, 3000);
            }
          }}
        >
          submit
        </button>
      </form>
    </div>
  );
}
