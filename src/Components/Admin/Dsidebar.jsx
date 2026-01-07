// import React, { useState } from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import { MdCategory } from "react-icons/md";
// import { IoListOutline } from "react-icons/io5";
// import { FiShoppingBag } from "react-icons/fi";
// import { ArrowForward, DailyDish } from "../../constants/icons";
// import { Dot } from "lucide-react";

// const adminNavlinks = [
//   {
//     name: "Category",
//     path: "/admin/categories",
//     icon: MdCategory,
   
//   },
//   {
//     name: "Products",
//     path: "/admin/products",
//     icon: IoListOutline,

//   },
//   {
//     name: "Orders",
//     path: "/admin/orders",
//     icon: FiShoppingBag,
   
//   },
// ];

// const Dsidebar = () => {
//   const [openMenu, setOpenMenu] = useState(null);
//   const location = useLocation();

//   return (
//     <div className="h-screen w-64 bg-white shadow-lg justify-center ">
//       <div className="flex  items-center">
//         <div className="w-12 h-12 m-4">
//         <DailyDish className="w-full h-full rounded-full" />
//       </div>
//       <h1 className="text-[#D4AF37] text-2xl font-extrabold font-sans">ChefKitchen</h1>
//       </div>

//       <nav className="mt-6">
//         {adminNavlinks.map((link) => {
//           const Icon = link.icon;
//           const isParentActive =
//             location.pathname === link.path ||
//             link.children?.some((c) => location.pathname.startsWith(c.path));

//           const isOpen = openMenu === link.name || isParentActive;

//           return (
//             <div key={link.path}>
//               <button
//                 onClick={() => setOpenMenu(isOpen ? null : link.name)}
//                 className={`relative w-full flex items-center gap-3 py-2.5 pl-2 pr-2 text-gray-700 hover:bg-gray-200  hover:rounded-md ${
//                   isParentActive ? "bg-gray-500 font-bold" : "font-bold"
//                 }`}
//               >
//                 <Icon className="w-5 h-5" />
//                 <span>{link.name}</span>
//                 <ArrowForward
//                   className={`ml-auto transition-transform duration-200 ${
//                     isOpen ? "rotate-90" : "rotate-0"
//                   }`}
//                 />
//               </button>

//               {link.children && isOpen && (
//                 <div className="ml-14 mt-1 space-y-1">
//                   {link.children.map((child) => (
//                     <NavLink
//                       key={child.path}
//                       to={child.path}
//                       className={({ isActive }) =>
//                         `block text-sm py-1 text-gray-700 ${
//                           isActive ? "text-primary font-semibold" : "font-semibold"
//                         }`
//                       }
//                     >
//                       <Dot className="w-3 h-3 inline-block mr-2" />
//                       {child.name}
//                     </NavLink>
//                   ))}
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </nav>
//     </div>
//   );
// };

// export default Dsidebar;
import React from "react";
import { NavLink } from "react-router-dom";
import { MdCategory } from "react-icons/md";
import { IoListOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { DailyDish } from "../../constants/icons";

const Dsidebar = () => {
  const linkClasses = ({ isActive }) =>
    `w-full flex items-center gap-3 py-2.5 px-3 rounded-md font-bold transition
     ${
       isActive
         ? "bg-gray-300 text-black"
         : "text-gray-700 hover:bg-gray-200"
     }`;

  return (
    <div className="h-screen w-64 bg-white shadow-lg">
      {/* Logo */}
      <div className="flex items-center px-4 py-4">
        <div className="w-12 h-12 mr-3">
          <DailyDish className="w-full h-full rounded-full" />
        </div>
        <h1 className="text-[#D4AF37] text-2xl font-extrabold">
          ChefKitchen
        </h1>
      </div>

      {/* Navigation */}
      <nav className="mt-6 space-y-1 px-2">
        <NavLink end={true} to='/admin' className={linkClasses}>
          <MdCategory className="w-5 h-5" />
          <span>Category</span>
        </NavLink>

        <NavLink to="/admin/products" className={linkClasses}>
          <IoListOutline className="w-5 h-5" />
          <span>Products</span>
        </NavLink>

        <NavLink to="/admin/orders" className={linkClasses}>
          <FiShoppingBag className="w-5 h-5" />
          <span>Orders</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Dsidebar;
