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

  const handleAddToCart = (dish, index) => {
    const size = selectedSizes[index];
    if (!size) return;

    addToOrder(dish, size);

    setSelectedSizes((prev) => {
      const updated = { ...prev };
      delete updated[index];
      return updated;
    });
  };

  return (
    <main className="flex-1 px-4 pb-28 text-white overflow-y-auto scrollbar-hide">
      <div className="sticky top-0 z-40 bg-[#2A2933] pt-6 pb-4">
        <div className="relative mb-4">
          <h1 className="text-2xl lg:text-3xl font-semibold">Chef Kitchen</h1>

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

        <div className="relative flex gap-6 text-md text-gray-300 pb-2 mb-4">
          <span className="absolute left-0 bottom-0 h-[2px] w-full bg-gray-500/30"></span>
          {TABS.map((tab) => (
            <button key={tab} className="relative group text-white">
              {tab}
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-orange-500 transition-all group-hover:w-full"></span>
            </button>
          ))}
        </div>

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

      <div className="mt-10 grid grid-cols-2 lg:grid-cols-5 gap-6">
        {filteredDishes.map((dish, index) => (
          <div
            key={index}
            className="bg-[#1F1D2B] rounded-xl p-4 pt-16 flex flex-col h-full relative overflow-visible"
          >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-26 h-26 rounded-full object-cover shadow-lg"
              />
            </div>

            <p className="text-center text-sm mt-8">{dish.name}</p>

            <div className="flex justify-center gap-2 mt-2 text-xs">
              <span className="line-through text-red-400 opacity-80">
                {dish.oldPrice}
              </span>
              <span className="text-green-400 font-semibold">
                {dish.price}
              </span>
            </div>

            <p className="text-xs text-gray-400 text-center mt-1">
              {dish.available}
            </p>

            <div className="flex justify-center gap-2 mt-3">
              {["S", "M", "L"].map((size) => (
                <button
                  key={size}
                  onClick={() =>
                    setSelectedSizes((prev) => ({
                      ...prev,
                      [index]: size,
                    }))
                  }
                  className={`px-3 py-1 text-xs rounded ${
                    selectedSizes[index] === size
                      ? "bg-orange-500 text-black"
                      : "bg-[#2D2B3C] text-gray-400 hover:text-white"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            <div className="mt-auto pt-4">
              <button
                disabled={!selectedSizes[index]}
                onClick={() => handleAddToCart(dish, index)}
                className={`w-full mx-1 py-2 text-xs rounded transition ${
                  selectedSizes[index]
                    ? "bg-green-500 text-black hover:bg-green-400"
                    : "bg-orange-600 text-black cursor-not-allowed"
                }`}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default KitchenCenter;
