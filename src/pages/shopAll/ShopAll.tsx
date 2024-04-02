import { useEffect, useState } from "react";
import { useAppSelector } from "../../store/Store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faStar } from "@fortawesome/free-solid-svg-icons";

export default function ShopAll() {
  const [laptops, setLaptops] = useState<any[] | null>();
  const [phones, setPhones] = useState<any[] | null>(null);
  const [fragrances, setFragrances] = useState<any[] | null>();
  const [skincares, setSkincares] = useState<any[] | null>();
  const [groceries, setGroceries] = useState<any[] | null>();
  const [homeDecorations, setHomeDecorations] = useState<any[] | null>();

  const products = useAppSelector(
    (state) => state.persistedReducer.productReducer.name
  );

  const assignProducts = () => {
    products.map((product: any) => {
      product.category === "smartphones" &&
        setPhones((prev) => (prev ? [...prev, product] : [product]));
      product.category === "laptops" &&
        setLaptops((prev) => (prev ? [...prev, product] : [product]));
      product.category === "fragrances" &&
        setFragrances((prev) => (prev ? [...prev, product] : [product]));
      product.category === "skincare" &&
        setSkincares((prev) => (prev ? [...prev, product] : [product]));
      product.category === "home-decoration" &&
        setHomeDecorations((prev) => (prev ? [...prev, product] : [product]));
      product.category === "groceries" &&
        setGroceries((prev) => (prev ? [...prev, product] : [product]));
    });
  };

  useEffect(() => {
    assignProducts();
  }, []);
  return (
    <div className="pt-48 w-[90%] m-auto text-lg  tracking-wider">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {phones?.map((phone) => (
          <div key={phone.id} className=" shadow-md">
            <div className="relative">
              <img
                src={phone.images[0]}
                alt=""
                className="rounded-lg h-48 object-contain w-full"
              />{" "}
              <p className=" absolute top-14 right-3 text-red-700 text-3xl font-bold uppercase -rotate-45">
                Sale%
              </p>
            </div>
            <div className="py-5 text-center text-xl font-bold ">
              <span>{phone.title}</span>{" "}
              <FontAwesomeIcon icon={faMinus} className="px-2" />
              <span>{phone.brand}</span>
            </div>
            <p className="text-center px-3 md:h-32">{phone.description}</p>

            <div className="flex justify-around">
              <p className=" text-xl font-bold text-emerald-900 ">
                ${phone.price}
              </p>{" "}
              <div className=" text-orange-400">
                <p>{phone.rating < 2 && <FontAwesomeIcon icon={faStar} />}</p>
                <p>
                  {phone.rating < 3 && (
                    <span>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                  )}
                </p>
                <p>
                  {phone.rating < 4 && (
                    <span>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                  )}
                </p>
                <p>
                  {phone.rating < 5 && (
                    <span>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                  )}
                </p>
              </div>
            </div>
            <button className=" w-full my-5 bg-yellow-500 p-3 rounded-full ">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
