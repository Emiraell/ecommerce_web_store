import clothes from "../assets/clothes.jpg";
export default function NavButtons() {
  const goods: string[] = [
    "Laptops",
    "Phones",
    "clothes",
    "Appliances",
    "Fragances",
    "skincare",
  ];

  return (
    <div className=" w-[80%] m-auto">
      <div className="">
        <p className="text-center text-gray-50 p-3 my-7 rounded text-lg md:text-xl bg-gray-900 w-full m-auto">
          Up to 50% sale discount
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
        {goods.map((good) => (
          <button
            className=" bg-slate-300 text-gray-950 p-2 pr-5"
            key={good}
            onClick={() => {}}
          >
            {good}
          </button>
        ))}
      </div>
      <div></div>
    </div>
  );
}
