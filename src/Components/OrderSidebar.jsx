import { IoTrashOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const OrderSidebar = ({ orders = [], setOrders, showCart }) => {
  const navigate = useNavigate();

  const subtotal = orders.reduce(
    (total, item) => total + Number(item.price) * item.qty,
    0
  );

  const handleDelete = (index) => {
    setOrders((prev) => prev.filter((_, i) => i !== index));
  };

  const handlePlaceOrder = () => {
    if (orders.length === 0) return;

    const order = {
      orderId: "ORD-" + Date.now(),
      date: new Date().toLocaleString(),
      items: orders.map((item) => ({
        name: item.name,
        qty: item.qty,
        price: Number(item.price),
        size: item.size,
      })),
      subtotal,
    };

    navigate("/receipt", { state: order });
  };

  return (
    <aside
      className={`
        fixed top-0 right-0
        min-h-screen
        w-[380px] lg:width-[500px]
        bg-[#1F1D2B]
        p-6
        text-white
        rounded-l-3xl
        transform
        transition-transform duration-300 ease-in-out
        ${showCart ? "translate-x-0" : "translate-x-full"}
        z-40
        flex flex-col
      `}
    >
      <div className="flex-1 overflow-y-auto pr-1">
        <h2 className="font-semibold mb-4">Orders #34562</h2>

        <div className="flex gap-2 mb-6 text-xs">
          <button className="bg-[#F99147] text-black px-3 py-1 rounded-lg">
            Dine in
          </button>
          <button className="bg-[#2D2B3C] px-3 py-1 rounded-lg">
            Take away
          </button>
          <button className="bg-[#2D2B3C] px-3 py-1 rounded-lg">
            Delivery
          </button>
        </div>

        <div className="grid grid-cols-4 text-xs text-gray-400 mb-3">
          <span className="col-span-2">Item</span>
          <span className="text-center">Qty</span>
          <span className="text-right">Price</span>
        </div>

        <div className="space-y-4 mb-6 border-t border-[#393C49] pt-4 text-sm space-y-2">
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
                        {" "}
                        ({item.size})
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

                  <span className="text-sm">{item.qty}</span>

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
                  <span className="text-sm">
                    AED {(item.qty * Number(item.price)).toFixed(2)}
                  </span>

                  <button
                    onClick={() => handleDelete(index)}
                    className="p-1 rounded-md hover:bg-[#2D2B3C]"
                  >
                    <IoTrashOutline className="text-gray-400 hover:text-red-500" />
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

      <div className="border-t border-[#393C49] pt-4 text-sm space-y-2">
        <div className="flex justify-between text-gray-400">
          <span>Discount</span>
          <span>5%</span>
        </div>

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>{subtotal.toFixed(2)} AED</span>
        </div>
      </div>

      <button
        onClick={handlePlaceOrder}
        className="w-full mt-4 bg-[#F99147] text-black py-3 rounded-lg font-semibold"
      >
        Place Order
      </button>
    </aside>
  );
};

export default OrderSidebar;
