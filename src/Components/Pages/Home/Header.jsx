import { Link } from "react-router-dom";
import Logo from "/images/Logo/Rusgine.png";
//React icons
import { MdAccountCircle } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext } from "react";
import { SidebarContext } from "../../Cart/Context/SidebarContext";
import { CartContext } from "../../Cart/Context/CartContext";
import PropTypes from "prop-types";

const Header = ({ nav, handleNav, account, handleAccount }) => {
  //header state
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  //Cart state
  const { itemAmount } = useContext(CartContext);

  return (
    <>
      <header className="bg-[#FCCB06] flex items-center justify-around lg:gap-[500px]">
        <Link to={"/"}>
          <img src={Logo} className="w-[100px] sm:w-[130px] h-auto" />
        </Link>
        {/* Navbar */}
        <div className="sm:hidden flex">
          <div className="relative">
            <MdAccountCircle size={40} onClick={handleAccount} />
            {account && (
              <div className="absolute bg-white shadow-md p-4 rounded-lg z-10 w-[100px] text-center">
                <Link to={"/form"}>Log in</Link>
              </div>
            )}
          </div>
          <IoCart size={40} onClick={() => setIsOpen(!isOpen)} />
          {/* hamburger menu */}
          {nav ? (
            <IoMdClose size={40} onClick={handleNav} />
          ) : (
            <GiHamburgerMenu size={40} onClick={handleNav} />
          )}
          {nav && (
            <div className="fixed left-0 top-30 bg-black w-full h-full z-20">
              <nav className="py-10">
                {/* Navbar */}
                <ul className="flex flex-col items-center text-[#FCCB06] gap-5 ">
                  <Link to={"/store"}>Shop Parts</Link>
                  <Link to={`/store`}>Wholesale</Link>
                  <Link to={`/reviews`}>Reviews</Link>
                  <Link to={`/premium`}>Premium Area</Link>
                  <Link>Contact</Link>
                </ul>
              </nav>
            </div>
          )}
        </div>
        <div className="hidden sm:flex gap-5">
          <ul className="flex text-center items-center text-black gap-5 font-semibold ">
            <Link to={"/store"} className="hover:text-white">
              Shop Parts
            </Link>
            <Link to={`/store`} className="hover:text-white">
              Wholesale
            </Link>
            <Link to={`/reviews`} className="hover:text-white">
              Reviews
            </Link>
            <Link to={`/premium`} className="hover:text-white">
              Premium Area
            </Link>
            <Link className="hover:text-white">Contact</Link>
          </ul>
          <div className="relative">
            <MdAccountCircle size={40} onClick={handleAccount} />
            {account && (
              <div className="absolute bg-white shadow-md p-4 rounded-lg z-10 w-[100px] text-center">
                <Link to={"/form"}>Log in</Link>
              </div>
            )}
          </div>
          <div className="relative">
            <IoCart size={40} onClick={() => setIsOpen(!isOpen)} />
            <span className="bg-red-500 rounded-full absolute top-0 -right-1 w-[18px] text-white text-center ">
              {itemAmount}
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  nav: PropTypes.bool.isRequired,
  handleNav: PropTypes.func.isRequired,
  account: PropTypes.bool.isRequired,
  handleAccount: PropTypes.func.isRequired
};

export default Header;
