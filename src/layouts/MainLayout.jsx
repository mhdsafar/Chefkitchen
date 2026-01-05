import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
  return (
    <div className="h-screen bg-[#2A2933] flex">
      <Sidebar />
      <Outlet />
      <Navbar />
    </div>
  );
};

export default MainLayout;
