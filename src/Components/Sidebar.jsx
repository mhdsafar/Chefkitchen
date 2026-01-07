import { NavLink, useLocation } from "react-router-dom";
import { SIDEBAR_MENU } from "../constants/sidebarMenu";
import { Logout, Logo } from "../constants/icons";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
  setActivePath(location.pathname);
}, [location.pathname]);

  return (
    <aside
      className="
        hidden md:flex
        fixed md:static
        top-0 left-0
        min-h-screen
        w-[90px]
        bg-gradient-to-b from-[#1F1D2B] to-[#17161F]
        rounded-tr-3xl rounded-br-3xl
        flex-col items-center
        py-6
        z-40
      "
    >
      <div className="mb-10 w-12 h-12 bg-[#F99147]/40 rounded-xl flex items-center justify-center">
        <Logo className="w-6 h-6 text-orange-500" />
      </div>

      <div className="flex flex-col gap-6 flex-1 w-full">
       {SIDEBAR_MENU.map((item) => {
  const Icon = item.icon;
  const isActive = activePath === item.path;

  return (
    <NavLink
      key={item.id}
      to={item.path}
      onClick={() => setActivePath(item.path)} 
      className="relative w-full flex justify-center cursor-pointer"
    >
      <>
        {isActive && (
          <div className="absolute right-0 w-[72px] h-14 bg-[#2A2933] rounded-l-2xl" />
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
              isActive
                ? "bg-[#f67a21] text-black"
                : "text-gray-400 hover:text-white"
            }
          `}
        >
          <Icon className="w-5 h-5" />
        </div>

        {isActive && (
          <>
            <span className="absolute w-4 h-4 bg-[#1f1d2b] z-10 -top-4 right-0 rounded-br-2xl" />
            <span className="absolute w-4 h-4 bg-[#252836] -top-4 right-0" />

            <span className="absolute w-4 h-4 bg-[#1f1d2b] z-10 -bottom-5 right-0 rounded-tr-2xl" />
            <span className="absolute w-4 h-4 bg-[#252836] -bottom-4 right-0" />
          </>
        )}
      </>
    </NavLink>
  );
})}

      </div>

      <div className="mt-6">
        <button className="w-12 h-12 flex items-center justify-center rounded-xl text-gray-400 hover:text-orange-500">
          <Logout className="w-6 h-6" />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
