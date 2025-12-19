import { useState } from "react";
import KitchenCenter from "../Components/KitchenCenter";
import OrderSidebar from "../Components/OrderSidebar";
import Sidebar from "../Components/Sidebar";
import { IoCartOutline, IoMenu } from "react-icons/io5";
import Landingpage from "../Components/Landingpage";
import Navbar from "../Components/Navbar";

const ChefKitchen = () => {
  const [showCart, setShowCart] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [orders, setOrders] = useState([]);

  const addToOrder = (dish, size) => {
    setOrders((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.name === dish.name && item.size === size
      );

      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex].qty += 1;
        return updated;
      }

      return [
        ...prev,
        {
          name: dish.name,
          price: parseFloat(dish.price),
          image: dish.image,
          size,
          qty: 1,
        },
      ];
    });
  };

  return (
<div className="h-screen bg-[#2A2933] flex relative overflow-hidden">
     
      <Sidebar showSidebar={showSidebar} />
      <Navbar showNavbar={showNavbar} />

    <KitchenCenter addToOrder={addToOrder} />


      <OrderSidebar orders={orders} setOrders={setOrders} showCart={showCart} />
      

      {/* <button
        onClick={() => setShowSidebar((prev) => !prev)}
        className="lg:hidden fixed top-6 right-6 bg-[#F99147] p-3 rounded-xl text-black z-50"
      >
        <IoMenu size={22} />
      </button> */}

      <button
        onClick={() => setShowCart((prev) => !prev)}
        className=" fixed top-6 right-6 bg-transparent text-orange-500 p-3  rounded-xl shadow-black/20 shadow-xl z-50"
      >
        <IoCartOutline size={24} />
      </button>
    </div>
  );
};

export default ChefKitchen;
