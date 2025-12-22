import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SIDEBAR_MENU } from "../constants/sidebarMenu";
import { Logout, Logo } from "../constants/icons";

const Sidebar = ({ showSidebar }) => {
  const navigate = useNavigate();
  const [active, setActive] = useState("home");

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
      <div className="mb-10 w-12 h-12 bg-[#F99147]/40 rounded-xl flex items-center justify-center">
        <Logo className="w-6 h-6 text-orange-500" />
      </div>

      <div className="flex flex-col gap-6 flex-1 w-full">
        {SIDEBAR_MENU.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              onClick={() => setActive(item.id)}
              className="relative w-full flex justify-center cursor-pointer"
            >
              {active === item.id && (
                <div className="absolute right-0 w-[72px] h-14 bg-[#2A2933] rounded-l-2xl">
                  <div className="absolute -top-[17%] -right-[10%] w-4 h-3 bg-[#2A2933] rounded-lg z-50"></div>
                  <div
                    className="absolute -top-[17%] -right-[20%] w-6 h-6 bg-gradient-to-b from-[#1F1D2B] to-[#17161F] z-50"
                    style={{ clipPath: "ellipse(40% 40% at 0% 0%)" }}
                  ></div>
                  <div className="absolute -bottom-[17%] -right-[10%] w-4 h-3 bg-[#2A2933] rounded-lg z-50"></div>
                  <div
                    className="absolute -bottom-[17%] -right-[20%] w-6 h-6 bg-gradient-to-b from-[#1F1D2B] to-[#17161F] z-50"
                    style={{ clipPath: "ellipse(40% 40% at 0% 100%)" }}
                  ></div>
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
                      ? "bg-[#f67a21] text-black"
                      : "bg-transparent text-gray-400 hover:text-white"
                  }
                `}
              >
                <Icon className="w-5 h-5" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6">
        <button
          onClick={() => navigate("/")}
          className="w-12 h-12 flex items-center justify-center rounded-xl text-gray-400 hover:text-orange-500 "
        >
          <Logout className="w-6 h-6" />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
