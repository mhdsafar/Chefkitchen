import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import dishImage1 from "../assets/images/Image 7 (1).svg";
import dishImage2 from "../assets/images/Image 7 (2).svg";
import dishImage3 from "../assets/images/Image 7.svg";
import { useEffect, useState } from "react";

const dishes = [
  {
    name: "Healthy noodle with spinach leaf",
    oldPrice: "32.00 AED",
    price: "25.00 AED",
    available: "22 Bowls available",
    image: dishImage2,
  },
  {
    name: "Hot spicy fried rice with omelet",
    oldPrice: "32.00 AED",
    price: "25.00 AED",
    available: "13 Bowls available",
    image: dishImage3,
  },
  {
    name: "Spicy instant noodle with special omelette",
    oldPrice: "32.00 AED",
    price: "25.00 AED",
    available: "17 Bowls available",
    image: dishImage1,
  },
  {
    name: "Healthy noodle with spinach leaf",
    oldPrice: "32.00 AED",
    price: "25.00 AED",
    available: "22 Bowls available",
    image: dishImage2,
  },
  {
    name: "Hot spicy fried rice with omelet",
    oldPrice: "32.00 AED",
    price: "25.00 AED",
    available: "13 Bowls available",
    image: dishImage3,
  },
  {
    name: "Spicy instant noodle with special omelette",
    oldPrice: "32.00 AED",
    price: "25.00 AED",
    available: "17 Bowls available",
    image: dishImage1,
  },
  {
    name: "Healthy noodle with spinach leaf",
    oldPrice: "32.00 AED",
    price: "25.00 AED",
    available: "22 Bowls available",
    image: dishImage2,
  },
  {
    name: "Healthy noodle with spinach leaf",
    oldPrice: "32.00 AED",
    price: "25.00 AED",
    available: "22 Bowls available",
    image: dishImage2,
  },
  {
    name: "Healthy noodle with spinach leaf",
    oldPrice: "32.00 AED",
    price: "25.00 AED",
    available: "22 Bowls available",
    image: dishImage2,
  },
  {
    name: "Healthy noodle with spinach leaf",
    oldPrice: "32.00 AED",
    price: "25.00 AED",
    available: "22 Bowls available",
    image: dishImage2,
  },
  {
    name: "Healthy noodle with spinach leaf",
    oldPrice: "32.00 AED",
    price: "25.00 AED",
    available: "22 Bowls available",
    image: dishImage2,
  },
  {
    name: "Healthy noodle with spinach leaf",
    oldPrice: "32.00 AED",
    price: "25.00 AED",
    available: "22 Bowls available",
    image: dishImage2,
  },
];

const KitchenCenter = ({ addToOrder }) => {
  const [selectedSizes, setSelectedSizes] = useState({});
  const [orderType, setOrderType] = useState("Dine in");
  const [open, setOpen] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex-1 px-8 py-6 text-white">
      <div className=" mb-6">
        <div>
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
        </div>

        <div
          className="flex items-center gap-2 bg-[#1F1D2B] px-3 py-2 rounded-lg
                  w-full lg:w-72 mt-4 lg:mt-0 lg:absolute lg:right-8 lg:top-8"
        >
          <span className="text-gray-400 text-sm">
            <IoIosSearch />
          </span>
          <input
            placeholder="Search for food, coffee, etc..."
            className="bg-transparent outline-none text-sm w-full placeholder-gray-400"
          />
        </div>
      </div>

      <div className="mb-4">
        <div className="relative flex justify-between lg:justify-start gap-4 lg:gap-10 text-xs lg:text-sm text-gray-300 pb-2">
          <span className="absolute left-0 bottom-0 h-[2px] w-full bg-gray-500/30 z-0"></span>

          <button className="relative px-3 py-1 text-white group z-10">
            Today Special
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full z-20"></span>
          </button>

          <button className="relative px-3 py-1 text-white group z-10">
            Our Specials
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full z-20"></span>
          </button>

          <button className="relative px-3 py-1 text-white group z-10">
            South Indian Special
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full z-20"></span>
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold">Choose Dishes</h2>

        <div className="relative">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="flex items-center gap-2 bg-[#1F1D2B] px-4 py-2 rounded-lg text-sm text-gray-300 w-32 justify-between"
          >
            <span>{orderType}</span>
            <IoIosArrowDown
              className={`transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-32 bg-[#1F1D2B] rounded-lg shadow-lg overflow-hidden z-20">
              {["Dine in", "Take away", "Delivery"].map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setOrderType(type);
                    setOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-[#2D2B3C]"
                >
                  {type}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 ">
        {dishes.map((dish, index) => (
          <div key={index} className="bg-[#1F1D2B] rounded-xl p-4 lg:p-5">
            <div className="flex justify-center -mt-8 lg:-mt-10 mb-2">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-20 h-20 lg:w-28 lg:h-28 rounded-full object-cover"
              />
            </div>

            <p className="text-xs lg:text-sm text-center leading-tight">
              {dish.name}
            </p>

            <div className="text-center mt-1 text-[10px] lg:text-xs">
              <span className="line-through text-red-500 mr-2">
                {dish.oldPrice}
              </span>
              <span className="text-green-400">{dish.price}</span>
            </div>

            <p className="text-[10px] lg:text-xs text-gray-400 text-center mt-1">
              {dish.available}
            </p>

            <div className="flex justify-center gap-2 mt-2">
              {["S", "M", "L"].map((size) => (
                <button
                  key={size}
                  onClick={() => {
                    setSelectedSizes((prev) => ({
                      ...prev,
                      [index]: size,
                    }));
                    addToOrder(dish, size);
                  }}
                  className={`px-2 py-[2px] text-[10px] rounded-md
        ${
          selectedSizes[index] === size
            ? "bg-green-500 text-black font-semibold"
            : "bg-[#2D2B3C] text-gray-400"
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
