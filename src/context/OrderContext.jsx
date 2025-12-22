import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const addToOrder = (dish, size) => {
    const price = Number(dish.prices[size].replace(/[^\d.]/g, ""));

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
          price,
        },
      ];
    });
  };

  return (
    <OrderContext.Provider value={{ orders, setOrders, addToOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder must be used inside OrderProvider");
  }
  return context;
};
