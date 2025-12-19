import { useState } from "react";
import { GiShop } from "react-icons/gi";
import { GoHome } from "react-icons/go";
import { BiDish } from "react-icons/bi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoMailOutline, IoExitOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ showSidebar }) => {
  const navigate = useNavigate();
  const [active, setActive] = useState("home");

  const menuItems = [
    { id: "home", icon: <GoHome size={22} /> },
    { id: "orders", icon: <BiDish size={22} /> },
    { id: "favorites", icon: <MdOutlineFavoriteBorder size={22} /> },
    { id: "messages", icon: <IoMailOutline size={22} /> },
    { id: "notifications", icon: <FaRegBell size={22} /> },
  ];

  return (
   <aside
  className={`
    hidden md:flex
    fixed md:static
    top-0 left-0
    min-h-screen
    w-[90px]
    bg-gradient-to-b from-[#1F1D2B] to-[#17161F]
    rounded-tr-3xl rounded-br-3xl
    flex-col items-center
    py-6
    overflow-hidden
    transform transition-transform duration-300
    ${showSidebar ? "translate-x-0" : "-translate-x-full"}
    md:translate-x-0
    z-40
  `}
>

      {/* Logo */}
      <div className="mb-10 w-12 h-12 bg-[#F99147] rounded-xl flex items-center justify-center">
        <GiShop size={24} className="text-black" />
      </div>

      {/* Menu */}
      <div className="flex flex-col gap-6 flex-1 w-full">
        {menuItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActive(item.id)}
            className="relative w-full flex justify-center cursor-pointer"
          >
            {/* Curved active background */}

            {active === item.id && (
              <div
                className=" absolute  right-0 w-[70px] h-14 bg-[#2A2933] rounded-l-2xl " >
                <div className="absolute -top-[17%]  -right-[10%] w-4 h-3 bg-[#2A2933] rounded-lg  z-50"></div>
                <div className="absolute -top-[17%] -right-[20%] w-6 h-6 bg-gradient-to-b from-[#1F1D2B] to-[#17161F]  z-50"
                style={{clipPath:"ellipse(40% 40% at 0% 0%)"}}></div>



                 <div className="absolute -bottom-[17%]  -right-[10%] w-4 h-3 bg-[#2A2933] rounded-lg  z-50"></div>
                <div className="absolute -bottom-[17%] -right-[20%] w-6 h-6 bg-gradient-to-b from-[#1F1D2B] to-[#17161F]  z-50"
                style={{clipPath:"ellipse(40% 40% at 0% 100%)"}}></div>
              </div>

              
            )}

            <div
              className={`
    relative z-10
    w-12 h-12
    flex items-center justify-center
    rounded-xl
    transition
    mt-1
    ${
      active === item.id
        ? "bg-[#F99147] text-black"
        : "bg-transparent text-gray-400 hover:text-white"
    }
  `}
            >
              {item.icon}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bg-[#2A2933]"></div>

      {/* Logout */}
      <div className="mt-6">
        <button
          onClick={() => navigate("/")}
          className="w-12 h-12 flex items-center justify-center rounded-xl text-gray-400 hover:text-white"
        >
          <IoExitOutline size={22} />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
