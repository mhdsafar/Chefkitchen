import { useEffect, useState } from "react";
import { DISHES } from "../constants/dishes";
import { TABS } from "../constants/tabs";
import { ORDER_TYPES } from "../constants/orderTypes";
import { SearchIcon, ArrowDown, CloseIcon } from "../constants/icons";
import { useOrder } from "../context/OrderContext.jsx";

const KitchenCenter = () => {
  const { addToOrder } = useOrder();

  const [selectedSizes, setSelectedSizes] = useState({});
  const [orderType, setOrderType] = useState("Dine in");
  const [open, setOpen] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const filteredDishes = DISHES.filter((dish) =>
    dish.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="flex-1 px-4 pb-28 text-white overflow-y-auto scrollbar-hide">
      {/* HEADER */}
      <div className="sticky top-0 z-40 bg-[#2A2933] pt-6 pb-4">
        <div className="relative mb-4">
          <h1 className="text-2xl lg:text-3xl font-semibold">
            Chef Kitchen
          </h1>

          <p className="text-xs lg:text-sm text-gray-400 mt-1">
            {dateTime.toLocaleDateString("en-GB", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            •{" "}
            {dateTime.toLocaleTimeString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>

          {/* SEARCH */}
          <div className="flex items-center gap-2 bg-[#1F1D2B] px-3 py-2 rounded-lg w-full lg:w-80 mt-4 lg:absolute lg:right-20 lg:top-0">
            <SearchIcon className="w-4 h-4 text-gray-400" />
            <input
              placeholder="Search for food, coffee, etc..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent outline-none text-sm w-full"
            />
            {searchTerm && (
              <button onClick={() => setSearchTerm("")}>
                <CloseIcon className="w-4 h-4 text-gray-400" />
              </button>
            )}
          </div>
        </div>

        {/* TABS */}
        <div className="relative flex gap-6 text-sm text-gray-300 pb-2 mb-4">
          <span className="absolute left-0 bottom-0 h-[2px] w-full bg-gray-500/30"></span>
          {TABS.map((tab) => (
            <button key={tab} className="relative group text-white">
              {tab}
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-orange-500 transition-all group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* ORDER TYPE */}
        <div className="flex justify-between items-center">
          <h2 className="font-semibold">Choose Dishes</h2>

          <div className="relative">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="flex items-center gap-2 bg-[#1F1D2B] px-4 py-2 rounded-lg text-sm w-32 justify-between"
            >
              <span>{orderType}</span>
              <ArrowDown
                className={`w-4 h-4 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-32 bg-[#1F1D2B] rounded-lg z-50">
                {ORDER_TYPES.map((type) => (
                  <button
                    key={type}
                    onClick={() => {
                      setOrderType(type);
                      setOpen(false);
                    }}
                    className="block w-full px-4 py-2 text-sm hover:bg-[#2D2B3C]"
                  >
                    {type}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* DISH GRID */}
      <div className="mt-6 grid grid-cols-2 lg:grid-cols-5 gap-4">
        {filteredDishes.map((dish, index) => (
          <div
            key={index}
            className="bg-[#1F1D2B] rounded-xl p-4 pt-8"
          >
            {/* IMAGE */}
            <div className="flex justify-center -mt-6 mb-3">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>

            {/* NAME */}
            <p className="text-center text-sm">{dish.name}</p>

            {/* PRICE */}
            <div className="flex justify-center gap-2 mt-2 text-xs">
              <span className="line-through text-red-400 opacity-80">
                {dish.oldPrice}
              </span>
              <span className="text-green-400 font-semibold">
                {dish.price}
              </span>
            </div>

            {/* AVAILABILITY */}
            <p className="text-xs text-gray-400 text-center mt-1">
              {dish.available}
            </p>

            {/* SIZE BUTTONS */}
            <div className="flex justify-center gap-2 mt-3">
              {["S", "M", "L"].map((size) => (
                <button
                  key={size}
                  disabled={selectedSizes[index] === size}
                  onClick={() => {
                    setSelectedSizes((prev) => ({
                      ...prev,
                      [index]: size,
                    }));
                    addToOrder(dish, size);
                  }}
                  className={`px-3 py-1 text-xs rounded ${
                    selectedSizes[index] === size
                      ? "bg-green-500 text-black cursor-not-allowed"
                      : "bg-[#2D2B3C] text-gray-400 hover:text-white"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default KitchenCenter;
