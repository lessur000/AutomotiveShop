import Header from "../Home/Header";
import ProductSidebar from "./ProductSidebar";
import Footer from "../../Pages/Home/Footer";
import HeaderState from "../Home/Hooks/useHeaderState"; // Import the hook

const Store = () => {
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
          <ProductSidebar />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Store;
