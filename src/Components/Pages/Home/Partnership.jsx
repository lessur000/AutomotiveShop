import pic1 from '/images/Partnership/1.jpg'
import pic2 from "/images/Partnership/2.jpg";
import pic3 from "/images/Partnership/3.png";
import pic4 from "/images/Partnership/4.png";
import pic5 from "/images/Partnership/5.png";

const Partnership = () => {
  return (
    <div className="bg-black py-10 text-center">
      <h1 className="text-white text-lg font-semibold mb-6">Brands We Trust</h1>
      <div className="flex flex-wrap  justify-center items-center gap-5">
        <div className="flex items-center justify-center w-24 h-24 bg-gray-800 rounded-lg md:w-20 md:h-20">
          <img src={pic1} alt="" className="w-16" />
        </div>
        <div className="flex items-center justify-center w-24 h-24 bg-gray-800 rounded-lg md:w-20 md:h-20">
          <img src={pic2} alt="" className="w-16" />
        </div>
        <div className="flex items-center justify-center w-24 h-24 bg-gray-800 rounded-lg md:w-20 md:h-20">
          <img src={pic3} alt="" className="w-16" />
        </div>
        <div className="flex items-center justify-center w-24 h-24 bg-gray-800 rounded-lg md:w-20 md:h-20">
          <img src={pic4} alt="" className="w-16" />
        </div>
        <div className="flex items-center justify-center w-24 h-24 bg-gray-800 rounded-lg md:w-20 md:h-20">
          <img src={pic5} alt="" className="w-16" />
        </div>
      </div>
    </div>
  );
};

export default Partnership;
