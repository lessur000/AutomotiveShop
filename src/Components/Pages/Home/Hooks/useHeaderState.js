import { useState } from "react";

const useHeaderState = () => {
  //hamburgerMenu
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  //accountOpen/Close
  const [account, setAccount] = useState(false);
  const handleAccount = () => {
    setAccount(!account);
  };
  return { nav, setNav, handleNav, account, setAccount, handleAccount };
};

export default useHeaderState;
