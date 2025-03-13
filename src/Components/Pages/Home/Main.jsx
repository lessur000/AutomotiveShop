import { Link } from "react-router";
import bg from "/images/vehicles.jpg";
//react icons
import { MdOutlineLocalShipping } from "react-icons/md";
import { LuActivity } from "react-icons/lu";
import { RiCustomerService2Line } from "react-icons/ri";

const Main = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container mx-auto pt-5 text-center sm:pt-[250px] space-y-15 sm:p-20">
        <h1 className="text-white font-semibold text-3xl">
          Shop Our Premium Auto Parts
        </h1>
        <h2 className="text-white font-bold text-2xl sm:text-5xl">
          Build Your Dream Car Today.
          <br />
          <span className="text-red-500 transform duration-700 Fadein">
            Now 15% Off
          </span>{" "}
          On All Items.
        </h2>
        {/* Button */}
        <Link to={"/Store"}>
          <button className="bg-red-500 rounded-4xl p-3 px-5 border hover:border-gray-400 hover:text-white hover:bg-black">
            Shop now
          </button>
        </Link>

        {/* Shipping/Quality/service */}
        <div className="flex flex-wrap justify-center gap-10 pt-10 transform duration-700 Fadein">
          <div className="flex items-center gap-5">
            {/* Shipping */}
            <MdOutlineLocalShipping size={40} className="fill-white " />
            <div className="border-r-4 border-red-400 h-10"></div>
            <p className="text-white ">
              Free Shipping
              <br /> On all orders over 75$
            </p>
          </div>
          {/* Quality */}
          <div className="flex items-center gap-5">
            <LuActivity size={40} className="fill-white " />
            <div className="border-r-4 border-red-400 h-10"></div>
            <p className="text-white ">
              Tested & Proven
              <br /> Highest quality testing standards
            </p>
          </div>
          <div className="flex items-center gap-5">
            {/* service */}
            <RiCustomerService2Line size={40} className="fill-white " />
            <div className="border-r-4 border-red-400 h-10"></div>
            <p className="text-white ">
              Customer Service
              <br /> Available 24/7
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
