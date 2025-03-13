import { CartContext } from "./Context/CartContext";
import useCart from "./Hooks/useCart";
import PropTypes from "prop-types"; // Import PropTypes

const CartProvider = ({ children }) => {
  const cartState = useCart();

  return (
    <CartContext.Provider value={cartState}>{children}</CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
