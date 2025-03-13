const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": { //AddCart from cart
      const { product, id } = action.payload;
      const newItem = { ...product, amount: 1 };
      const cartItem = state.find((item) => item.id === id);

      if (cartItem) {
        //if products exist in the cart, update the amount
        return state.map((item) =>
          item.id === id ? { ...item, amount: item.amount + 1 } : item
        );
      } else {
        return [...state, newItem];
      }
    }

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload); //Remove from cart

    case "INCREASE_AMOUNT":
      return state.map(
        (item) =>
          item.id === action.payload
            ? { ...item, amount: item.amount + 1 }
            : item //Increase amount
      );

    case "DECREASE_AMOUNT": {
      const cartItem = state.find((item) => item.id === action.payload);
      if (cartItem.amount === 1) {
        return state.filter((item) => item.id !== action.payload);
      }
      return state.map(
        (item) =>
          item.id === action.payload
            ? { ...item, amount: item.amount - 1 }
            : item // Decrease Amount
      );
    }
    
    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};

export default cartReducer;
