// import { useState } from "react";
// import Sidebar from "../Components/Sidebar";
// import Navbar from "../Components/Navbar";
// import OrderSidebar from "../Components/OrderSidebar";
// import CartIcon from "../Components/CartIcon";
// import { Outlet } from "react-router-dom";

// const MainLayout = () => {
//   const [showCart, setShowCart] = useState(false);
//   const [showSidebar, setShowSidebar] = useState(false);
//   const [showNavbar, setShowNavbar] = useState(false);

//   return (
//     <div className="h-screen bg-[#2A2933] flex relative overflow-hidden">
//       <Sidebar showSidebar={showSidebar} />
//       <Navbar showNavbar={showNavbar} />

//       {/* 🔽 PAGE CONTENT HERE */}
//       <Outlet />

//       <OrderSidebar showCart={showCart} />

//       <div className="fixed top-6 right-6 z-50">
//         <CartIcon onClick={() => setShowCart((prev) => !prev)} />
//       </div>
//     </div>
//   );
// // };

// export default MainLayout;
