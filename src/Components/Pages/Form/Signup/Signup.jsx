

const Signup = () => {
  return (
    <div className=" p-6 rounded-lg  w-full md:w-80">
      <form action="">
        <div className="mb-4">
          <input
            className="w-full px-3 py-2 border text-gray-500 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Full Name"
            name="name"
          />
        </div>

        <div className="mb-4">
          <input
            className="w-full px-3 py-2 text-gray-500 border bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="email"
            placeholder="Email Address"
            name="email"
          />
        </div>

        <div className="mb-4">
          <input
            className="w-full px-3 py-2 text-gray-500 border bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="flex items-center mb-4">
          <input type="checkbox" id="terms" className="mr-2" />
          <label className="text-sm text-white">
            I accept all terms & conditions
          </label>
        </div>
        <button className="w-full bg-white text-black py-2 rounded-lg hover:bg-blue-600 transition duration-200">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
