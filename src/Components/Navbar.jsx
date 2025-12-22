import { useState } from "react";
import { NAVBAR_MENU } from "../constants/navbarMenu";

const Navbar = () => {
  const [active, setActive] = useState("home");

  return (
    <aside
      className="
        flex flex-row
        md:hidden lg:hidden
        fixed bottom-0
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
      <div className="flex flex-row gap-3 flex-1 w-full">
        {NAVBAR_MENU.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              onClick={() => setActive(item.id)}
              className="w-full flex justify-center cursor-pointer"
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
                <Icon className="w-5 h-5" />
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Navbar;
