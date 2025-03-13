import { useContext } from "react";

//React Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartContext } from "../../Cart/Context/CartContext";
import ProductFetch from "../../../API/Context/ProductContext";

const ProductList = () => {
  //Get Products from the ProductFetch accessing the context that provides product items
  const { parts } = useContext(ProductFetch);

  //get the addtocart function from the context
  const { addToCart } = useContext(CartContext); // Use 'addToCart'

  //React Slick settings
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
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
    <div className="bg-black md:p-20">
      <div className="container mx-auto space-y-10 pt-20">
        <h1 className="text-white font-semibold text-4xl">Top Sellers</h1>
        <Slider {...settings}>
          {parts.map((part) => (
            <div key={part.id} className="p-5">
              <div className="ProductListIn">
                <div className="relative overflow-hidden">
                  <img
                    src={`/images/${part.image}` }
                    className="h-[300px] w-full object-cover"
                  />
                  <h6
                    className="bg-red-500 absolute top-0 p-2 rounded-s-lg"
                    dir="rtl"
                  >
                    Best Seller
                  </h6>
                </div>
                {/* name & price */}
                <div className="flex flex-col space-y-3">
                  <h4 className="text-white">{part.name}</h4>
                  <span className="text-gray-400">₱ {part.Price}</span>
                  {/* Add To cart */}
                  <button
                    onClick={() => addToCart(part, part.id)}
                    className="text-white cursor-pointer border border-white w-full rounded-2xl p-2 hover:bg-red-500"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductList;
