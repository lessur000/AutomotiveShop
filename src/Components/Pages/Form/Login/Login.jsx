
const Login = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-80 ">
      <form action="">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Email Address
          </label>
          <input
            className="w-full px-3 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="email"
            id="email"
            placeholder="Email address"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Password
          </label>
          <input
            className="w-full px-3 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="mb-4 text-right">
          <a href="#" className="text-blue-500 text-sm hover:underline">
            Forgot password?
          </a>
        </div>
        <button className="w-full bg-blue-500  text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
