import { useOrder } from "../context/OrderContext.jsx";
import { IoCartOutline } from "react-icons/io5";

const CartIcon = ({ onClick }) => {
  const { orders } = useOrder();

  const cartCount = orders.reduce(
    (total, item) => total + item.qty,
    0
  );

  return (
    <button
      onClick={onClick}
      className="relative bg-transparent text-orange-500 p-3 rounded-xl shadow-black/20 shadow-xl"
    >
      <IoCartOutline size={24} />

      {cartCount > 0 && (
        <span
          className="
            absolute -top-1 -right-1
            min-w-[18px] h-[18px]
            px-1
            flex items-center justify-center
            text-[10px] font-bold
            bg-orange-500 text-black
            rounded-full
          "
        >
          { cartCount}  
        </span>
      )}
    </button>
  );
};

export default CartIcon;
