import OrderSidebar from "../Components/OrderSidebar";

const Orders = () => {
  return (
    <div className="flex-1 p-6 text-white">
      <h1 className="text-2xl font-semibold mb-4">Orders</h1>

      <p className="text-gray-400 mb-6">
        View and manage your current orders here.
      </p>

      {/* You can expand this later */}
      <div className="bg-[#1F1D2B] rounded-xl p-6 text-center text-gray-400">
        Orders content coming soon 🧾
      </div>
    </div>
  );
};

export default Orders;
