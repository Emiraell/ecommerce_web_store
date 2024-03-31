import { useEffect, useState } from "react";
import NavButtons from "../components/NavButtons";
import Carousel from "../components/slider/Carousel";
import { useAppSelector } from "../store/Store";
export default function Home() {
  // const products = useAppSelector((state) => state.productReducer.name);

  // const products: any[] = [];
  const [products, setProducts] = useState<any[] | null>(null);

  const getProduct = async () => {
    console.log("daad");
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    // console.log(data);
    // products.push()
    // fetch("https://dummyjson.com/products")
    //   .then((res) => res.json())
    //   .then(console.log);

    // data.products.map((pro: any) => {
    //   if (pro.category === "smartphones") {
    //     setProducts({ ...products, produ: pro } as any[]);
    //     console.log(pro);
    //   }
    //   console.log(products);
    // });
    setProducts(data.products);
    console.log(products);
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="  pt-32 md:pt-44">
      <Carousel />
      <NavButtons />
      <div className="mx-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {products?.splice(0, 10).map((product, index) => (
          <div
            key={index}
            className=" shadow-lg rounded-lg text-lg tracking-wide"
          >
            <img
              src={product.images[0]}
              alt=""
              className=" rounded-lg border-b-4 border-blue-200 h-62 object-cover w-full"
            />
            <div className="p-5">
              <h3 className=" text-center font-semibold py-3">
                {product.title}
              </h3>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
