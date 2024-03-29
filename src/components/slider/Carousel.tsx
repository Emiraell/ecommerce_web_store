import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./Slider.module.css";

export default function Carousel() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    cssEase: "linear",
  };
  const datas = [
    {
      image: styles.imageOne,
      description: "Style your way to the top",
    },
    {
      image: styles.imageTwo,
      description: "Shop your favourite accessorie",
    },
    {
      image: styles.imageThree,
      description: "Fill your basket with home appliances",
    },
  ];
  return (
    <div>
      <Slider {...settings} className=" overflow-hidden">
        {datas.map((data, index) => (
          <div
            key={index}
            className={`h-[45vh] md:h-[50vh] lg:h-[60vh] ${data.image} bg-orange-200 bg-blend-multiply relative bg-no-repeat bg-cover bg-center`}
          >
            <p className=" text-gray-100 text-center font-bold tracking-wider text-xl md:text-2xl lg:text-3xl">
              {data.description}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
