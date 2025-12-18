import React, { useState } from 'react'
import { BiDish } from 'react-icons/bi';
import { FaRegBell } from 'react-icons/fa';
import { GoHome } from 'react-icons/go';
import { IoMailOutline } from 'react-icons/io5';
import { MdOutlineFavoriteBorder } from 'react-icons/md';

const Navbar = () => {
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
  className="
    flex flex-row
    md:hidden
    lg:hidden
    fixed
    bottom-0
  w-[calc(100%-1rem)]
left-1/2 -translate-x-1/2

    mb-4

    bg-white/10
    backdrop-blur-lg
    border border-white/20
    shadow-lg

    rounded-full
    items-center
    py-2
    z-40
  "
>

        
   
         {/* Menu */}
         <div className="flex flex-row gap-3     flex-1 w-full">
           {menuItems.map((item) => (
             <div
               key={item.id}
               onClick={() => setActive(item.id)}
               className=" w-full flex justify-center cursor-pointer"
             >
              
               <div
                 className={`
        z-10
       w-8 h-8
       flex items-center justify-center
       rounded-xl
       transition
       mt-1
       ${
         active === item.id
           ? "bg-transparent text-orange-500 shadow-orange-500/20 shadow-lg"
           : "bg-transparent text-gray-400 hover:text-white"
       }
     `}
               >
                 {item.icon}
               </div>
             </div>
           ))}
         </div>
       
   
        
       </aside>
     );
   };
   
 

export default Navbar;
