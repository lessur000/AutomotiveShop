//import React Slick CArousel (Library)
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router";
//import images
import Wheels from "/images/Wheels/Aluminum.jpg";
import Engine from "/images/Engine/1.jpg";
import Parts from "/images/PartsBody/1.jpg";
import Bulb from "/images/Accessories/1.jpg";



const Category = () => {

  

  //React Slick settings
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-black">
      <div className="container mx-auto pt-30 pb-10">
        <div className="flex justify-between">
          <h1 className="text-white text-xl sm:text-3xl font-semibold">
            Shop By Category
          </h1>
          <Link to={"/store"}>
            <button className="text-white border border-white py-2 px-6 rounded-3xl cursor-pointer hover:bg-red-500">
              Shop
            </button>
          </Link>
        </div>
        <div data-aos="zoom-in-up" className="pt-20 max-w-[260px] mx-auto sm:max-w-full">
          <Slider {...settings} className="">
            <Link>
              <div className="border  border-gray-200/10 overflow-hidden sm:m-4">
                <img
                  alt="Wheels"
                  src={Wheels}
                  className="w-full h-[500px] object-cover transition delay-150 duration-300 ease-in-out hover:scale-125"
                />
              </div>
            </Link>
            <Link>
              <div className="border  border-gray-200/10 overflow-hidden sm:m-4">
                <img
                  alt="Engine"
                  src={Engine}
                  className="w-full h-[500px] object-cover transition delay-150 duration-300 ease-in-out hover:scale-125"
                />
              </div>
            </Link>
            <Link>
              <div className="border  border-gray-200/10 overflow-hidden sm:m-4">
                <img
                  alt="Parts"
                  src={Parts}
                  className="w-full h-[500px]  object-cover transition delay-150 duration-300 ease-in-out hover:scale-125"
                />
              </div>
            </Link>
            <Link>
              <div className="border  border-gray-200/10 overflow-hidden sm:m-4">
                <img
                  alt="bulb"
                  src={Bulb}
                  className="w-full h-[500px]  object-cover transition delay-150 duration-300 ease-in-out hover:scale-125"
                />
              </div>
            </Link>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Category;
