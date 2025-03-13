import Pic1 from "/images/Sparkplug.png";
import Pic2 from "/images/manifold.jpg";
import Pic3 from "/images/BrakeRotors.avif";
import { Link } from "react-router";

const ProductReviews = () => {
  return (
    <div className="bg-black p-5">
      <div className="container mx-auto space-y-5">
        <h1 className="text-white font-semibold text-4xl">Product Reviews</h1>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-5">
          {/* Sparkplug */}
          <div className="border border-gray-500 overflow-hidden">
            <div className="space-y-4">
              <Link>
                <img
                  src={Pic1}
                  alt="Sparkplug"
                  className="w-full h-[280px] object-cover"
                />
              </Link>
              <div className="text-white p-5 space-y-4">
                <h4>Admin</h4>
                <h6>feb 5, 2025</h6>
                <h2 className="font-semibold text-2xl">Iridium Spark Plug</h2>
                <p>
                  Create a blog post subtitle that summarizes your post in a few
                  short, punchy sentences and entices your audience to continue
                  reading
                </p>
              </div>
            </div>
          </div>
          {/* Manifold */}
          <div className="border border-gray-500 overflow-hidden">
            <div className="space-y-4">
              <Link>
                <img
                  src={Pic2}
                  alt="Manifold"
                  className="w-full h-[280px] object-cover"
                />
              </Link>
              <div className="text-white p-5 space-y-4">
                <h4>Admin</h4>
                <h6>feb 5, 2025</h6>
                <h2 className="font-semibold text-2xl">Iridium Spark Plug</h2>
                <p>
                  Create a blog post subtitle that summarizes your post in a few
                  short, punchy sentences and entices your audience to continue
                  reading
                </p>
              </div>
            </div>
          </div>
          {/* BrakeRotors */}
          <div className="border border-gray-500 overflow-hidden">
            <div className="space-y-4">
              <Link>
                <img
                  src={Pic3}
                  alt="BrakeRotors"
                  className="w-full h-[280px] object-cover"
                />
              </Link>
              <div className="text-white p-5 space-y-4">
                <h4>Admin</h4>
                <h6>feb 5, 2025</h6>
                <h2 className="font-semibold text-2xl">Iridium Spark Plug</h2>
                <p>
                  Create a blog post subtitle that summarizes your post in a few
                  short, punchy sentences and entices your audience to continue
                  reading
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
