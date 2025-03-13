import { Link } from "react-router";
import background from "/images/vehicles3.jpg";

const Cta = () => {
  return (
    <div className="">
      <div
        className="bg-no-repeat bg-cover md:p-40 bg-bottom"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container mx-auto pt-20 ">
          <div className="space-y-5 max-w-[580px]">
            <h2 className="text-white text-3xl md:text-7xl max-w-[550px] font-semibold">
              Join Our Premium Club
            </h2>
            <div className="border border-b-4 border-white"></div>
            <p className="text-white">
              Our premium membership will give you exclusive access to our
              early-bird sales, new arrivals and other special offers.
            </p>
            <Link>
              <button className="text-black bg-red-500 hover:bg-black hover:text-white border hover:border-white rounded-3xl p-2 px-10">
                Join Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
