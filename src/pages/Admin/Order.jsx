import  { useState } from "react";
import Title from "../../Components/Admin/Title";
import { CloseIcon, SearchIcon } from "../../constants/icons";
import { PlusIcon, Trash2 } from "lucide-react";

const Order = () => {
  const [orders, setOrders] = useState([
     {
    id: 1,
    name: "Rahul",
    mobile: "9876543210",
    total: "₹450",
    status: "Completed",
    payment: "Cash",
  },
  {
    id: 2,
    name: "Anjali",
    mobile: "9123456780",
    total: "₹320",
    status: "Pending",
    payment: "UPI",
  },
  {
    id: 3,
    name: "Ameen",
    mobile: "9012345678",
    total: "₹780",
    status: "Completed",
    payment: "Card",
  },
  ]); // empty → "No Orders Found"
  const [searchTerm, setSearchTerm] = useState("");

   const toggleCategory = (id) => {
    setCategories(categories.map(cat => 
      cat.id === id ? { ...cat, active: !cat.active } : cat
    ));
  };

  const deleteCategory = (id) => {
    setCategories(categories.filter(cat => cat.id !== id));
  };

  const columns = [
    { label: "Name", key: "name" },
    {
      label: "Status",
      render: (row, index) => (
        <button onClick={() => toggleStatus(index)}>
          {row.active ? "Active" : "Inactive"}
        </button>
      ),
    },
  ];


  return (
    <div className="px-7">
      <Title text1="Order" text2="List" />

      <div className="bg-white w-full min-h-[630px] rounded-xl px-5">
        {/* Search + Filters */}
        <div className="flex justify-between items-center">
          {/* Search */}
          <div className="flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-lg max-w-xl w-full mt-4">
            <SearchIcon className="w-4 h-4 text-gray-400" />
            <input
              placeholder="Search By Seat Number"
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

          {/* Date buttons */}
         <div className="flex items-center border border-gray-300 rounded-lg w-32 px-3 py-2 gap-2 mt-4 cursor-pointer hover:bg-gray-100 text-gray-700 font-semibold">
                       <PlusIcon className="w-4 h-4 "/>
                       <button>Add New</button>
                     </div>
        </div>

        {/* Table */}
        <div className="mt-6 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="p-4 text-left font-semibold text-gray-700">Name</th>
                <th className="p-4 text-left font-semibold text-gray-700">Mobile No</th>
                <th className="p-4 text-left font-semibold text-gray-700">Total</th>
                <th className="p-4 text-left font-semibold text-gray-700">Status</th>
                <th className="p-4 text-left font-semibold text-gray-700">Payment</th>
                <th className="p-4 text-left font-semibold text-gray-700">Action</th>
              </tr>
            </thead>

            <tbody>
              {orders.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="text-center py-20 text-gray-500"
                  >
                    No Orders Found
                  </td>
                </tr>
              ) : (
                orders.map((order) => (
                  <tr key={order.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">{order.name}</td>
                    <td className="p-4">{order.mobile}</td>
                    <td className="p-4">{order.total}</td>
                    <td className="p-4">{order.status}</td>
                    <td className="p-4">{order.payment}</td>
                    <td className="p-4">
                       <div className="flex items-center gap-3">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={orders.active}
                            onChange={() => toggleCategory(orders.id)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                        </label>
                        <button
                          onClick={() => deleteCategory(orders.id)}
                          className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-5 h-5 text-gray-600 hover:text-red-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Order;
