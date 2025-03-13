import Header from "../Home/Header";
import Mechanic from "/images/mechanic.avif";
import Features from "./Features";
import Cta from "./Cta";
import Footer from "../Home/Footer";

const AboutUs = () => {
  return (
    <>
      <Header />
      {/* About Us Section */}
      <section
        style={{ backgroundImage: `url(${Mechanic})` }}
        className="relative bg-no-repeat bg-fixed bg-cover bg-bottom"
      >
        {/* Red overlay */}
        <div className="absolute inset-0 bg-linear-[200deg,red_-30%,black_40%] opacity-60"></div>

        <div className="container mx-auto space-y-3 py-40 relative">
          <h1 className="font-semibold text-5xl text-white">About Us</h1>
          <p className="text-white text-3xl ">
            People with a passsion for auto parts, <br />
            service & relationships
          </p>
        </div>
      </section>
      <Features />
      <Cta />
      <Footer />
    </>
  );
};

export default AboutUs;
