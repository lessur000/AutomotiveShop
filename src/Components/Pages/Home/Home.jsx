import Category from "./ProductCard";
import Enthusiasts from "./Enthusiasts";
import Header from "./Header";
import Main from "./Main";
import ProductList from "./ProductList";
import Cta from "./Cta";
import ProductReviews from "./ProductReviews";
import Partnership from "./Partnership";
import Footer from "./Footer";
import HeaderState from "./Hooks/useHeaderState";

const Home = () => {
  const { nav, handleNav, account, handleAccount } = HeaderState(false);

  return (
    <>
      <Header
        nav={nav}
        handleNav={handleNav}
        account={account}
        handleAccount={handleAccount}
      />
      <Main />
      <Category />
      <Enthusiasts />
      <ProductList />
      <Cta />
      <ProductReviews />
      <Partnership />
      <Footer />
    </>
  );
};

export default Home;
