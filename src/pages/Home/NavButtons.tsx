import { filterProduct } from "../../store/features/products";
import { useAppDispatch } from "../../store/Store";
import clothes from "../../assets/clothes.jpg";
export default function NavButtons() {
  // product navigation buttons
  const items: string[] = [
    "All",
    "Laptops",
    "SmartPhones",
    "Groceries",
    "Fragrances",
    "Home-Decoration",
    "Skincare",
  ];

  // dispatch action
  const dispatch = useAppDispatch();

  return (
    <div className=" w-[80%] m-auto">
      <div className="">
        <p className="text-center text-gray-50 p-3 my-7 rounded text-lg md:text-xl bg-gray-900 w-full m-auto">
          50% discount coming soon
        </p>

        <div>
          <img
            src={clothes}
            alt="clothes"
            className=" object-cover w-full h-[30vh] lg:h-[50vh] rounded-lg"
          />
        </div>
      </div>
      <div className=" grid gap-3 grid-cols-3 md:grid-cols-6 md:text-lg mt-5">
        {/* display product based on filtered item */}
        {items.map((item) => (
          <button
            className=" bg-slate-300 active:bg-green-300 text-gray-950 text-sm p-1 md:p-2 md:text-base pr-5"
            key={item}
            onClick={() => dispatch(filterProduct(item))}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
