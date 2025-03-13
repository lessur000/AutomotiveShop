import { Link } from "react-router";
//import images
import Car from "/images/vehicles2.png";

const Enthusiasts = () => {
  return (
    <div className="bg-linear-[150deg,red_-90%,black_40%] p-10 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row pt-20">
        {/* flex col */}
        {/* Left */}
        <div className="space-y-10">
          <h1 className="text-white font-semibold text-3xl sm:text-6xl max-w-[700px]">
            The One-Stop Shop for Automotive Enthusiasts
          </h1>
          <p className="text-white max-w-[520px]">
            Im a paragraph. Click hear to add your own text and edit me. Im a
            great place for you to tell a story and let users know a little more
            about you
          </p>
          {/* Table */}
          <table className="border-collapse border border-white w-full md:w-[600px] md:h-[300px]">
            <tbody>
              <tr className="flex flex-col md:table-row">
                <td className="text-white border border-white p-4 md:w-1/2">
                  Free in-store or curbside pickup
                </td>
                <td className="text-white border border-white p-4 md:w-1/2">
                  Personalized care including battery testing and installation
                </td>
              </tr>
              <tr className="flex flex-col md:table-row">
                <td className="text-white border border-white p-4 md:w-1/2">
                  Certified technicians only
                </td>
                <td className="text-white border border-white p-4 md:w-1/2">
                  Get points for every purchase. Redeem points for rewards
                </td>
              </tr>
            </tbody>
          </table>
          {/* button */}
          <Link to={"/aboutus"}>
            <button className="bg-red-500 p-3 px-10 rounded-4xl hover:text-white hover:bg-black border hover:border-white transition delay-150 duration-200 ease-in-out">
              Learn More
            </button>
          </Link>
        </div>
        {/* Right */}
        <img src={Car} className="object-contain object-bottom hidden xl:block CarIn" />
      </div>
    </div>
  );
};

export default Enthusiasts;
