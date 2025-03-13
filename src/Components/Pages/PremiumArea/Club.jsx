import Background from "/images/car.avif";

const Club = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      className="relative bg-fixed bg-cover bg-no-repeat min-h-[500px]"
    >
      {/* Red overlay */}
      <div className="absolute inset-0 bg-fixed bg-linear-[200deg,red_-30%,black_40%] opacity-60"></div>

      {/* Content */}
      <div className="container mx-auto">
        <div className="relative z-10 text-white pt-44">
          <h1 className="text-6xl font-bold">
            Join Our <br /> Premium Club
          </h1>
          <p className="text-xl mt-4">For people who love cars</p>
        </div>
      </div>
    </div>
  );
};

export default Club;
