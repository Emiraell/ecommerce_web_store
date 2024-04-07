import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/Header";
import {
  faEnvelope,
  faLocationPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Header />

      <div className="md:pt-32 p-20 md:w-[70%] lg:w-[60%] text-lg m-auto ">
        {/* About */}
        <p className=" font-lato text-center py-5 text-orange-600 ">About Us</p>
        <p>
          Welcome to the Emirael Store, where you can get fresh groceries,
          opulent skincare products, exquisite home décor, and cutting-edge
          technology all at your fingertips. <br />
          <br />
          Our goal at emirael is to give you the best possible shopping
          experience. Shop with confidence and convenience, knowing that we
          prioritize quality and customer satisfaction. Start exploring today
          and discover endless possibilities to enhance every aspect of your
          life.
        </p>

        {/* contact */}
        <div className="py-5">
          <p className="font-lato text-center py-5 text-orange-600">
            Contact Us
          </p>

          <div className="md:text-xl">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faLocationPin} />
              <div className="mx-5">
                <p className="text-blue-700">Address</p>
                <span>Abuja, Nigeria</span>
              </div>
            </div>

            <div className=" flex items-center my-4">
              <FontAwesomeIcon icon={faPhone} />
              <div className=" mx-5">
                <p className="text-blue-700">Phone Us</p>
                <span>+2348136553986</span>
              </div>
            </div>

            <div className="flex items-center mb-10">
              <FontAwesomeIcon icon={faEnvelope} />
              <div className=" mx-5">
                <p className="text-blue-700">Email Us</p>
                <span>emmzex19@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
