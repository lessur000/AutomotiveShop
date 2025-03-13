import Footer from "../Home/Footer";
import Header from "../Home/Header";
import Recommended from "./Recommended";
import HeaderState from "../Home/Hooks/useHeaderState"; // Import the hook

const Reviews = () => {
  const { nav, handleNav, account, handleAccount } = HeaderState(false);
  return (
    <>
      <Header
        nav={nav}
        handleNav={handleNav}
        account={account}
        handleAccount={handleAccount}
      />
      <div className="relative">
        <div className="fixed inset-0 bg-linear-[200deg,red_-90%,black_40%] -z-10"></div>
        <div className="relative z-10">
          <Recommended />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Reviews;
