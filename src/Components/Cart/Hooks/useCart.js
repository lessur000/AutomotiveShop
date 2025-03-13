import { useEffect, useReducer, useState } from "react";
import cartReducer from "../Context/cartReducer";

const useCart = () => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  //state for total items and total price
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  //update total item
  useEffect(() => {
    setItemAmount(cart.reduce((acc, item) => acc + item.amount, 0));
  }, [cart]);

  //update total price
  useEffect(() => {
    setTotal(cart.reduce((acc, item) => acc + item.price * item.amount, 0));
  }, [cart]);
  return {
    cart,
    itemAmount,
    total,
    addToCart: (product, id) =>dispatch({ type: "ADD_TO_CART", payload: { product, id } }),
    removeFromCart: (id) => dispatch({ type: "REMOVE_FROM_CART", payload: id }),
    increaseAmount: (id) => dispatch({ type: "INCREASE_AMOUNT", payload: id }),
    decreaseAmount: (id) => dispatch({ type: "DECREASE_AMOUNT", payload: id }),
    clearCart: () => dispatch({ type: "CLEAR_CART" }),
  };
};

export default useCart;
