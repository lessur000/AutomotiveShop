import { Link } from "react-router";


const Register = () => {
  return (
    <div className="bg-black text-white pt-36 pb-20">
      <div className="container mx-auto">
        <div className="flex justify-between flex-col">
          {/* left row*/}
          <div className="my-10">
            <div className="max-w-[400px]">
              <h2 className="text-4xl font-semibold">
                Sign up today and get exclusive club member benefits
              </h2>
              <p className="mt-4">
                Our premium membership will give you exclusive access to our
                early-bird sales, new arrivals, and other special offers.
              </p>
            </div>
          </div>
          <Link to={"/form/signup"}>
            <button className="bg-red-500 rounded-4xl p-3 px-5  border hover:border-gray-400 hover:text-white hover:bg-black">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
