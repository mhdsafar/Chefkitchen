import { useOrder } from "../context/OrderContext.jsx";
import { Heart, HeartFilled } from "../constants/icons";

const DishCard = ({ dish, index, selectedSize, onSelectSize, onAddToCart }) => {
  const { favourites, toggleFavourite } = useOrder();

  const isFavourite = favourites.includes(dish.name);

  const effectiveSize = selectedSize || "L";
  const displayPrice = dish.prices[effectiveSize];
  const oldPrice = dish.oldPrices?.[effectiveSize];

  return (
    <div className="bg-[#1F1D2B] rounded-xl p-4 pt-20 sm:pt-24 md:pt-28 flex flex-col h-full relative overflow-visible">
      {/* IMAGE */}
      <div className="absolute -top-6 sm:-top-8 md:-top-12 lg:-top-10 left-1/2 -translate-x-1/2">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover shadow-lg"
        />
      </div>

      {/* TITLE */}
      <p className="text-center text-sm min-h-[40px] flex items-center justify-center">
        {dish.name}
      </p>

      {/* PRICE */}
      <div className="flex justify-center gap-2 mt-2 text-xs">
        {oldPrice && (
          <span className="line-through text-red-400 opacity-80">
            {oldPrice}
          </span>
        )}
        <span className="text-green-400 font-bold text-md">{displayPrice}</span>
      </div>

      {/* AVAILABILITY + SIZE */}
      <div className="mt-auto pt-4 flex flex-col items-center gap-3">
        <p className="text-xs text-gray-400">{dish.available}</p>

        <div className="flex gap-2">
          {["S", "M", "L"].map((size) => (
            <button
              key={size}
              onClick={() => onSelectSize(index, size)}
              className={`px-3 py-1 text-xs rounded transition ${
                selectedSize === size
                  ? "bg-orange-500 text-black"
                  : "bg-[#2D2B3C] text-gray-400 hover:text-white"
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        {/* FAVOURITE + ADD TO CART */}
        <div className="flex gap-2 w-full">
          <button
            disabled={!selectedSize}
            onClick={() => onAddToCart(dish, index)}
            className={`flex-1 py-2 text-xs rounded transition ${
              selectedSize
                ? "bg-green-600 text-black hover:bg-green-400"
                : "bg-orange-600 text-black cursor-not-allowed"
            }`}
          >
            Add to cart
          </button>

         <button
  onClick={() => toggleFavourite(dish.name)}
  className="w-10 h-10 flex items-center justify-center rounded-lg bg-transparent hover:bg-[#2D2B3C] transition"
>
  <HeartFilled
    className={`w-5 h-5 transition ${
      isFavourite
        ? "text-red-500 scale-110"
        : "bg-transparent "
    }`}
  />
</button>

        </div>
      </div>
    </div>
  );
};

export default DishCard;
