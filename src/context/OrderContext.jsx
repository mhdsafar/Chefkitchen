import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [favourites, setFavourites] = useState([]);

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
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
