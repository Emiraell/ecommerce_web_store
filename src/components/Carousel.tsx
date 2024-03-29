import cloth from "../assets/carouselImages/men.png";
import electronics from "../assets/carouselImages/electronics.png";
import laptop from "../assets/carouselImages/laptop.png";

export default function Carousel() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const data = [
    {
      image: cloth,
      description: "",
    },
    {
      image: laptop,
      description: "",
    },
    {
      image: electronics,
      description: "",
    },
  ];
  return <div></div>;
}
