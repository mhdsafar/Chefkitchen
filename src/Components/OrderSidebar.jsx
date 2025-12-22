import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Trash } from "../constants/icons";
import { useOrder } from "../context/OrderContext.jsx";

const OrderSidebar = ({ showCart }) => {
  const { orders, setOrders } = useOrder();
  const navigate = useNavigate();

  const [orderType, setOrderType] = useState("Dine In");

  const subtotal = orders.reduce(
    (total, item) => total + Number(item.price) * item.qty,
    0
  );

  const handleDelete = (index) => {
    setOrders((prev) => prev.filter((_, i) => i !== index));
  };

  const handlePlaceOrder = () => {
    if (orders.length === 0) return;

    navigate("/receipt", {
      state: {
        orderId: "ORD-" + Date.now(),
        date: new Date().toLocaleString(),
        items: orders.map((item) => ({
          name: item.name,
          qty: item.qty,
          price: Number(item.price),
          size: item.size,
        })),
        subtotal,
        orderType,
      },
    });
  };

  return (
    <aside
      className={`
        fixed top-0 right-0
        h-screen
        w-[380px] lg:w-[500px]
        bg-[#1F1D2B]
        text-white
        rounded-l-3xl
        transform transition-transform duration-300
        ${showCart ? "translate-x-0" : "translate-x-full"}
        z-40
        flex flex-col
      `}
    >
      {/* CONTENT */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <h2 className="font-semibold text-lg">Orders</h2>

        {/* DINE IN / TAKE AWAY */}
        <div className="flex gap-2">
          <button
            onClick={() => setOrderType("Dine In")}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition
              ${
                orderType === "Dine In"
                  ? "bg-[#F99147] text-black"
                  : "bg-[#2D2B3C] text-gray-300"
              }
            `}
          >
            Dine In
          </button>

          <button
            onClick={() => setOrderType("Take Away")}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition
              ${
                orderType === "Take Away"
                  ? "bg-[#F99147] text-black"
                  : "bg-[#2D2B3C] text-gray-300"
              }
            `}
          >
            Take Away
          </button>
        </div>

        {/* HEADER */}
        <div className="grid grid-cols-4 text-xs text-gray-400 pt-4">
          <span className="col-span-2">Item</span>
          <span className="text-center">Qty</span>
          <span className="text-right">Price</span>
        </div>

        {/* ITEMS */}
        <div className="space-y-4 border-t border-[#393C49] pt-4 text-sm">
          {orders.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="grid grid-cols-4 items-center">
                <div className="col-span-2 flex gap-3 items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />

                  <div>
                    <p className="text-sm">
                      {item.name}
                      <span className="text-xs text-gray-400">
                        {" "}({item.size})
                      </span>
                    </p>
                    <p className="text-xs text-gray-400">
                      AED {item.price}
                    </p>
                  </div>
                </div>

                <div className="flex justify-center items-center gap-2">
                  <button
                    onClick={() =>
                      setOrders((prev) =>
                        prev.map((o, i) =>
                          i === index && o.qty > 1
                            ? { ...o, qty: o.qty - 1 }
                            : o
                        )
                      )
                    }
                    className="w-6 h-6 bg-[#2D2B3C] rounded-md"
                  >
                    −
                  </button>

                  <span>{item.qty}</span>

                  <button
                    onClick={() =>
                      setOrders((prev) =>
                        prev.map((o, i) =>
                          i === index ? { ...o, qty: o.qty + 1 } : o
                        )
                      )
                    }
                    className="w-6 h-6 bg-[#2D2B3C] rounded-md"
                  >
                    +
                  </button>
                </div>

                <div className="flex justify-end items-center gap-2">
                  <span>
                    AED {(item.qty * Number(item.price)).toFixed(2)}
                  </span>

                  <button
                    onClick={() => handleDelete(index)}
                    className="p-1 rounded-md hover:bg-[#2D2B3C]"
                  >
                    <Trash className="w-4 h-4 text-gray-400 hover:text-red-500" />
                  </button>
                </div>
              </div>

              <input
                placeholder="Order Note..."
                className="w-full bg-[#2D2B3C] px-3 py-2 rounded-lg text-xs outline-none"
              />
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div className="p-6 border-t border-[#393C49] bg-[#1F1D2B]">
        <div className="flex justify-between font-medium mb-4">
          <span>Subtotal</span>
          <span>{subtotal.toFixed(2)} AED</span>
        </div>

        <button
          onClick={handlePlaceOrder}
          className="w-full bg-[#F99147] text-black py-3 rounded-lg font-semibold"
        >
          Place Order
        </button>
      </div>
    </aside>
  );
};

export default OrderSidebar;
