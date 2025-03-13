import Footer from "../Home/Footer";
import Header from "../Home/Header";
import Club from "./Club";
import Register from "./Register";
import HeaderState from "../Home/Hooks/useHeaderState"; // Import the hook

const PremiumArea = () => {
  const { nav, handleNav, account, handleAccount } = HeaderState(false);
  return (
    <>
      <Header
        nav={nav}
        handleNav={handleNav}
        account={account}
        handleAccount={handleAccount}
      />
      <Club />
      <Register />
      <Footer />
    </>
  );
};

export default PremiumArea;
