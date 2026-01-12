// import { useState } from "react";
// import Title from "../../Components/Admin/Title";
// import { CloseIcon, SearchIcon } from "../../constants/icons";
// import { PlusIcon, Trash2 } from "lucide-react";

// const ORDERS = [
//   {
//     name: "Rahul",
//     mobile: "9876543210",
//     total: 450,
//     status: "Completed",
//     payment: "Cash",
//   },
//   {
//     name: "Anjali",
//     mobile: "9123456780",
//     total: 320,
//     status: "Pending",
//     payment: "UPI",
//   },
//   {
//     name: "Ameen",
//     mobile: "9012345678",
//     total: 780,
//     status: "Completed",
//     payment: "Card",
//   },
// ];

// const Order = () => {
//   // 👇 SAME IDEA AS PRODUCTS (map once)
//   const [orders, setOrders] = useState(() =>
//     ORDERS.map((order, index) => ({
//       id: index + 1,
//       name: order.name,
//       mobile: order.mobile,
//       total: `$ ${order.total}`,
//       status: order.status,
//       payment: order.payment,
//       active: true,
//     }))
//   );

//   const [searchTerm, setSearchTerm] = useState("");

//   // Toggle order
//   const toggleOrder = (id) => {
//     setOrders((prev) =>
//       prev.map((o) =>
//         o.id === id ? { ...o, active: !o.active } : o
//       )
//     );
//   };

//   // Delete order
//   const deleteOrder = (id) => {
//     setOrders((prev) => prev.filter((o) => o.id !== id));
//   };

//   return (
//     <div className="px-7">
//       <Title text1="Order" text2="List" />

//       <div className="bg-white w-full min-h-[630px] rounded-xl px-5">
//         {/* Search + Add */}
//         <div className="flex justify-between items-center">
//           <div className="flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-lg max-w-xl w-full mt-4">
//             <SearchIcon className="w-4 h-4 text-gray-400" />
//             <input
//               placeholder="Search order..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="bg-transparent outline-none text-sm w-full"
//             />
//             {searchTerm && (
//               <button onClick={() => setSearchTerm("")}>
//                 <CloseIcon className="w-4 h-4 text-gray-400" />
//               </button>
//             )}
//           </div>

//           <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 gap-2 mt-4 cursor-pointer hover:bg-gray-100">
//             <PlusIcon className="w-4 h-4" />
//             <button>Add New</button>
//           </div>
//         </div>

//         {/* Table */}
//         <div className="mt-6 overflow-x-auto">
//           <table className="w-full">
//             <thead className="bg-gray-50 border-b">
//               <tr>
//                 <th className="p-4 text-left font-semibold text-gray-700">Name</th>
//                 <th className="p-4 text-left font-semibold text-gray-700">Mobile</th>
//                 <th className="p-4 text-left font-semibold text-gray-700">Total</th>
//                 <th className="p-4 text-left font-semibold text-gray-700">Status</th>
//                 <th className="p-4 text-left font-semibold text-gray-700">Payment</th>
//                 <th className="p-4 text-left font-semibold text-gray-700">Action</th>
//               </tr>
//             </thead>

//             <tbody>
//               {orders
//                 .filter((o) =>
//                   o.name.toLowerCase().includes(searchTerm.toLowerCase())
//                 )
//                 .map((order) => (
//                   <tr key={order.id} className="border-b hover:bg-gray-50">
//                     <td className="p-4">{order.name}</td>
//                     <td className="p-4">{order.mobile}</td>
//                     <td className="p-4">{order.total}</td>
//                     <td className="p-4">{order.status}</td>
//                     <td className="p-4">{order.payment}</td>

//                     <td className="p-4">
//                       <div className="flex items-center gap-3">
//                         {/* Toggle */}
//                         <label className="relative inline-flex items-center cursor-pointer">
//                           <input
//                             type="checkbox"
//                             checked={order.active}
//                             onChange={() => toggleOrder(order.id)}
//                             className="sr-only peer"
//                           />
//                           <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-500 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-full" />
//                         </label>

//                         {/* Delete */}
//                         <button
//                           onClick={() => deleteOrder(order.id)}
//                           className="p-2 hover:bg-red-50 rounded-lg"
//                         >
//                           <Trash2 className="w-5 h-5 text-gray-600 hover:text-red-500" />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}

//               {orders.length === 0 && (
//                 <tr>
//                   <td colSpan="6" className="text-center py-10 text-gray-400">
//                     No orders found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Order;
import { useState } from "react";
import Title from "../../Components/Admin/Title";
import { CloseIcon, SearchIcon } from "../../constants/icons";
import { PlusIcon, Trash2 } from "lucide-react";
import { useOrder } from "../../context/OrderContext";

const Order = () => {
  const { placedOrders, setPlacedOrders } = useOrder();
  const [searchTerm, setSearchTerm] = useState("");

  const toggleOrder = (id) => {
    setPlacedOrders((prev) =>
      prev.map((o) =>
        o.id === id ? { ...o, active: !o.active } : o
      )
    );
  };

  const deleteOrder = (id) => {
    setPlacedOrders((prev) => prev.filter((o) => o.id !== id));
  };

  return (
    <div className="px-7">
      <Title text1="Order" text2="List" />

      <div className="bg-white w-full min-h-[630px] rounded-xl px-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-lg max-w-xl w-full mt-4">
            <SearchIcon className="w-4 h-4 text-gray-400" />
            <input
              placeholder="Search order..."
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

          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 gap-2 mt-4 cursor-pointer hover:bg-gray-100">
            <PlusIcon className="w-4 h-4" />
            <button>Add New</button>
          </div>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-4 text-left font-semibold text-gray-700">Name</th>
                <th className="p-4 text-left font-semibold text-gray-700">Mobile</th>
                <th className="p-4 text-left font-semibold text-gray-700">Total</th>
                <th className="p-4 text-left font-semibold text-gray-700">Status</th>
                <th className="p-4 text-left font-semibold text-gray-700">Payment</th>
                <th className="p-4 text-left font-semibold text-gray-700">Action</th>
              </tr>
            </thead>

            <tbody>
              {placedOrders
                .filter((o) =>
                  o.customer.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                )
                .map((order) => (
                  <tr key={order.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">{order.customer.name}</td>
                    <td className="p-4">{order.customer.mobile}</td>
                    <td className="p-4">$ {order.subtotal}</td>
                    <td className="p-4">{order.status}</td>
                    <td className="p-4">{order.payment}</td>

                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={order.active ?? true}
                            onChange={() => toggleOrder(order.id)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-500 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-full" />
                        </label>

                        <button
                          onClick={() => deleteOrder(order.id)}
                          className="p-2 hover:bg-red-50 rounded-lg"
                        >
                          <Trash2 className="w-5 h-5 text-gray-600 hover:text-red-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

              {placedOrders.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-10 text-gray-400">
                    No orders found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Order;
