import React, { useState } from "react";
import Title from "../../Components/Admin/Title";
import { CloseIcon, SearchIcon } from "../../constants/icons";
import { PlusIcon, Trash2 } from "lucide-react";

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "abhaya",
      category: "FASHION",
      price: 200,
      discount: 50,
      image:
        "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=100&h=100&fit=crop",
      active: true,
    },
    {
      id: 2,
      name: "abhaya 2",
      category: "FASHION",
      price: 150,
      discount: 20,
      image:
        "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=100&h=100&fit=crop",
      active: true,
    },
    {
      id: 3,
      name: "abhaya 1",
      category: "FASHION",
      price: 80,
      discount: 10,
      image:
        "https://images.unsplash.com/photo-1495121605193-b116b5b09a1b?w=100&h=100&fit=crop",
      active: true,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const toggleProduct = (id) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, active: !p.active } : p
      )
    );
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="px-7">
      <Title text1="Product" text2="List" />

      <div className="bg-white w-full min-h-[630px] rounded-xl px-5">
        {/* Search + Add */}
        <div className="flex justify-between">
          <div className="flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-lg max-w-xl w-full mt-4">
            <SearchIcon className="w-4 h-4 text-gray-400" />
            <input
              placeholder="Search here..."
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

        {/* Table */}
        <div className="mt-6 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="p-4 text-left font-semibold text-gray-700">Image</th>
                <th className="p-4 text-left font-semibold text-gray-700">Name</th>
                <th className="p-4 text-left font-semibold text-gray-700">Category</th>
                <th className="p-4 text-left font-semibold text-gray-700">Price</th>
                <th className="p-4 text-left font-semibold text-gray-700">Discount</th>
                <th className="p-4 text-left font-semibold text-gray-700">Action</th>
              </tr>
            </thead>

            <tbody>
              {products
                .filter((p) =>
                  p.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((product) => (
                  <tr
                    key={product.id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 rounded object-cover"
                      />
                    </td>

                    <td className="p-4 font-medium text-gray-700">
                      {product.name}
                    </td>

                    <td className="p-4 text-gray-700">
                      {product.category}
                    </td>

                    <td className="p-4 text-gray-700">
                      {product.price}
                    </td>

                    <td className="p-4 text-gray-700">
                      {product.discount}
                    </td>

                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        {/* Toggle */}
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={product.active}
                            onChange={() => toggleProduct(product.id)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                        </label>

                        {/* Delete */}
                        <button
                          onClick={() => deleteProduct(product.id)}
                          className="p-2 hover:bg-red-50 rounded-lg"
                        >
                          <Trash2 className="w-5 h-5 text-gray-600 hover:text-red-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;
