//import images
import Pic1 from "/images/Compressor.jpg";
import Pic2 from "/images/manifold.jpg";
import Pic3 from "/images/Sparkplug.png";
import Pic4 from "/images/BrakeRotors.avif";

const Recommended = () => {
  return (
    <div className="container mx-auto pt-32">
      <div className="space-y-32">
        <div className="text-white space-y-5">
          <h1 className="text-2xl sm:text-5xl font-bold md:font-lightbold">
            Recommended Products
          </h1>
          <h4 className="text-sm sm:text-2xl font-medium">
            Let the community help you shop
          </h4>
        </div>
        {/* Card Post */}
        <div className="space-y-5">
          <h6 className="text-white">All Posts</h6>
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-10">
            <article className="border border-gray-500">
              <img
                src={Pic1}
                alt="Compressor"
                className="w-full h-[300px] object-cover"
              />
              <div className="space-y-5 m-5">
                <div className="text-white">
                  <h6 className="text-sm">admin</h6>
                  <h6 className="text-sm">Feb 11, 2025</h6>
                </div>
                <div className="text-white space-y-3">
                  <h2 className="font-semibold text-2xl">
                    SV11 A/C compressor
                  </h2>
                  <p>
                    Create a blog post subtitle that summarizes your post in a
                    few short, punchy sentences and entices
                  </p>
                </div>
              </div>
            </article>
            <article className="border border-gray-500">
              <img
                src={Pic2}
                alt="Manifold"
                className="w-full h-[300px] object-cover"
              />
              <div className="space-y-5 m-5">
                <div className="text-white">
                  <h6 className="text-sm">admin</h6>
                  <h6 className="text-sm">Feb 11, 2025</h6>
                </div>
                <div className="text-white space-y-3">
                  <h2 className="font-semibold text-2xl">
                    Dual-Plane Intake Manifold
                  </h2>
                  <p>
                    Create a blog post subtitle that summarizes your post in a
                    few short, punchy sentences and entices
                  </p>
                </div>
              </div>
            </article>
            <article className="border border-gray-500">
              <img
                src={Pic3}
                alt="BrakeRotors"
                className="w-full h-[300px] object-cover"
              />
              <div className="space-y-5 m-5">
                <div className="text-white">
                  <h6 className="text-sm">admin</h6>
                  <h6 className="text-sm">Feb 11, 2025</h6>
                </div>
                <div className="text-white space-y-3">
                  <h2 className="font-semibold text-2xl">
                    Brakes PL Series Brake Rotors
                  </h2>
                  <p>
                    Create a blog post subtitle that summarizes your post in a
                    few short, punchy sentences and entices
                  </p>
                </div>
              </div>
            </article>
            <article className="border border-gray-500">
              <img
                src={Pic4}
                alt="SparkPlug"
                className="w-full h-[300px] object-cover"
              />
              <div className="space-y-5 m-5">
                <div className="text-white">
                  <h6 className="text-sm">admin</h6>
                  <h6 className="text-sm">Feb 11, 2025</h6>
                </div>
                <div className="text-white space-y-3">
                  <h2 className="font-semibold text-2xl">
                    NRK 102 Iridium V Spark Plug
                  </h2>
                  <p>
                    Create a blog post subtitle that summarizes your post in a
                    few short, punchy sentences and entices
                  </p>
                </div>
              </div>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
