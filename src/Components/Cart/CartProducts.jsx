import { useContext } from "react";
import { BsTrash } from "react-icons/bs";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { CartContext } from "./Context/CartContext";

const CartProducts = ({ product }) => {
  //destructure product
  const { image, id, name, amount, price } = product;
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);

  return (
    <div className="flex space-y-3 items-center">
      {/* Images */}
      <img src={`/Images/${image}`} className="max-w-[200px]" />
      {/* Title and remove price  */}
      <div className="w-full p-10 space-y-2">
        <div className="flex items-center justify-between w-full ">
          <p className="text-white">{name}</p>
          <BsTrash
            size={20}
            className="text-white"
            onClick={() => removeFromCart(id)}
          />
        </div>
        <p className="text-white">₱ {price}</p>
        {/* Remove & Add & amount */}
        <div className="flex items-center justify-between">
          <div className="flex items-center border border-gray-500 p-1 px-3">
            <IoMdRemove size={20} onClick={() => decreaseAmount(id)} className="mr-2 text-white" />
            <p className="text-white">{amount}</p>
            <IoMdAdd size={20} onClick={() => increaseAmount(id)} className="ml-2 text-white" />
          </div>
          <p className="text-white">{price * amount}</p>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
