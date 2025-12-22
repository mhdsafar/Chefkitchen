import { useState } from "react";
import KitchenCenter from "../Components/KitchenCenter";
import OrderSidebar from "../Components/OrderSidebar";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import { IoCartOutline } from "react-icons/io5";

const Menu = () => {
  const [showCart, setShowCart] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div className="h-screen bg-[#2A2933] flex relative overflow-hidden">
      <Sidebar showSidebar={showSidebar} />
      <Navbar showNavbar={showNavbar} />

      <KitchenCenter />

      <OrderSidebar showCart={showCart} />

      <button
        onClick={() => setShowCart((prev) => !prev)}
        className="fixed top-6 right-6 bg-transparent text-orange-500 p-3 rounded-xl shadow-black/20 shadow-xl z-50"
      >
        <IoCartOutline size={24} />
      </button>
    </div>
  );
};

export default Menu;
