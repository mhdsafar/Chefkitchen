import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const [placedOrders, setPlacedOrders] = useState(() => {
    const stored = localStorage.getItem("placedOrders");
    return stored ? JSON.parse(stored) : [];
  });

  const savePlacedOrders = (updater) => {
    setPlacedOrders((prev) => {
      const updated =
        typeof updater === "function" ? updater(prev) : updater;
      localStorage.setItem("placedOrders", JSON.stringify(updated));
      return updated;
    });
  };

  const addToOrder = (dish, size) => {
    setOrders((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.name === dish.name && item.size === size
      );

      if (existingIndex !== -1) {
        return prev.map((item, index) =>
          index === existingIndex
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [
        ...prev,
        {
          name: dish.name,
          image: dish.image,
          size,
          qty: 1,
          price: Number(dish.prices[size].replace(/[^\d.]/g, "")),
        },
      ];
    });
  };

  const toggleFavourite = (dishName) => {
    setFavourites((prev) =>
      prev.includes(dishName)
        ? prev.filter((name) => name !== dishName)
        : [...prev, dishName]
    );
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        setOrders,
        addToOrder,
        favourites,
        toggleFavourite,
        placedOrders,
        setPlacedOrders: savePlacedOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
