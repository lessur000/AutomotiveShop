import { useState } from "react";
import Header from "../Home/Header";
import Login from "../Form/Login/Login";
import Signup from "../Form/Signup/Signup";
import Footer from "../Home/Footer";
import HeaderState from "../Home/Hooks/useHeaderState"; // Import the hook

const Form = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [textClicked, setTextClicked] = useState(false);

  const toggleForm = () => {
    setShowLogin(!showLogin);
    setTextClicked(!textClicked);
  };

  const { nav, handleNav, account, handleAccount } = HeaderState(false);

  return (
    <>
      <Header
        nav={nav}
        handleNav={handleNav}
        account={account}
        handleAccount={handleAccount}
      />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-red-900 to-black">
        {/* Forms Container */}
        <div className="relative w-[350px] h-[450px] bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Sliding Container */}
          <div
            className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ${
              showLogin ? "" : ""
            }`}
          >
            {/* Signup Form (Initially Hidden) */}
            <div className="flex flex-col items-center justify-center w-full h-full bg-blue-500 text-white p-6 pb-20">
              <button
                className={`text-2xl font-bold mb-4 text-center ${
                  textClicked ? "text-gray-500" : "text-white"
                }`}
                onClick={toggleForm}
                disabled={!textClicked}
              >
                Signup
              </button>
              <Signup />
            </div>
          </div>
          {/* Login form (initially) */}
          <div
            className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ${
              showLogin ? "translate-y-[350px]" : "translate-y-[60px]"
            }`}
          >
            {/* Login Form */}
            <div className="flex flex-col items-center justify-center w-full h-full rounded-t-[50px] bg-white text-black p-6">
              <button
                className="text-2xl font-bold text-black mb-4 text-center"
                onClick={toggleForm}
                disabled={!showLogin}
              >
                Login
              </button>
              <Login />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Form;
