import { useContext } from "react";
import { SidebarContext } from "./Context/SidebarContext";
//import icons
import { IoMdArrowRoundForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
//
import CartProducts from "./CartProducts";
import { CartContext } from "./Context/CartContext";

const SidebarMenuBar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, total, clearCart, itemAmount } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-black fixed top-0 h-full shadow-2xl md:w-[35vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-5">
        <h2 className="text-white">Products Cart ({itemAmount})</h2>
        {/* icons */}
        <IoMdArrowRoundForward onClick={handleClose} className="text-2xl text-white" />
      </div>
      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[700px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((product) => (
          <CartProducts product={product} key={product.id} />
        ))}
      </div>
      <div className="py-4 mt-4 border-gray-500 border-t-4 ">
        <div className="flex w-full justify-between items-center pt-5">
          {/* total */}
          <div className="uppercase font-semibold">
            <span className="text-white">Total:{total}</span>
          </div>
          {/* clear cart icon */}
          <FiTrash2 size={30} onClick={clearCart} className="text-white"/>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenuBar;
