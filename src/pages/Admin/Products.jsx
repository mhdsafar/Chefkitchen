import React, { useState } from "react";
import Title from "../../Components/Admin/Title";
import { CloseIcon, SearchIcon } from "../../constants/icons";
import { PlusIcon, Trash2 } from "lucide-react";
import { DISHES } from "../../constants/dishes";

const Products = () => {
  const [products, setProducts] = useState(() =>
    DISHES.map((dish, index) => {
      const price = parseFloat(dish.prices.M);
      const oldPrice = parseFloat(dish.oldPrices.M);
      const discount = oldPrice - price;

      return {
        id: index + 1,
        name: dish.name,
        category: dish.category?.toUpperCase() || "UNCATEGORIZED",
        price,
        discount,
        image: dish.image,
        active: true,
      };
    })
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    category: "",
    price: "",
    discount: "",
  });

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

  const startEdit = (product) => {
    setEditId(product.id);
    setEditForm({
      name: product.name,
      category: product.category,
      price: product.price,
      discount: product.discount,
    });
  };

  const cancelEdit = () => {
    setEditId(null);
  };

  const saveEdit = (id) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              name: editForm.name,
              category: editForm.category,
              price: Number(editForm.price),
              discount: Number(editForm.discount),
            }
          : p
      )
    );
    setEditId(null);
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
              placeholder="Search product..."
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
                <th className="p-4 text-left font-semibold text-gray-700">Price ($)</th>
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
                  <tr key={product.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 rounded object-cover"
                      />
                    </td>

                    <td className="p-4 font-medium text-gray-700">
                      {editId === product.id ? (
                        <input
                          value={editForm.name}
                          onChange={(e) =>
                            setEditForm({ ...editForm, name: e.target.value })
                          }
                          className="border px-2 py-1 rounded w-full text-sm"
                        />
                      ) : (
                        product.name
                      )}
                    </td>

                    <td className="p-4 text-gray-700">
                      {editId === product.id ? (
                        <input
                          value={editForm.category}
                          onChange={(e) =>
                            setEditForm({ ...editForm, category: e.target.value })
                          }
                          className="border px-2 py-1 rounded w-full text-sm"
                        />
                      ) : (
                        product.category
                      )}
                    </td>

                    <td className="p-4 text-gray-700">
                      {editId === product.id ? (
                        <input
                          type="number"
                          value={editForm.price}
                          onChange={(e) =>
                            setEditForm({ ...editForm, price: e.target.value })
                          }
                          className="border px-2 py-1 rounded w-24 text-sm"
                        />
                      ) : (
                        product.price.toFixed(2)
                      )}
                    </td>

                    <td className="p-4 text-green-600 font-medium">
                      {editId === product.id ? (
                        <input
                          type="number"
                          value={editForm.discount}
                          onChange={(e) =>
                            setEditForm({ ...editForm, discount: e.target.value })
                          }
                          className="border px-2 py-1 rounded w-24 text-sm"
                        />
                      ) : (
                        product.discount.toFixed(2)
                      )}
                    </td>

                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        {editId === product.id ? (
                          <>
                            <button
                              onClick={() => saveEdit(product.id)}
                              className="px-3 py-1 text-sm rounded bg-green-500 text-white hover:bg-green-600"
                            >
                              Save
                            </button>

                            <button
                              onClick={cancelEdit}
                              className="px-3 py-1 text-sm rounded bg-gray-200 hover:bg-gray-300"
                            >
                              Cancel
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              onClick={() => startEdit(product)}
                              className="px-3 py-1 text-sm rounded bg-blue-500 text-white hover:bg-blue-600"
                            >
                              Edit
                            </button>

                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={product.active}
                                onChange={() => toggleProduct(product.id)}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-500 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>

                            <button
                              onClick={() => deleteProduct(product.id)}
                              className="p-2 hover:bg-red-50 rounded-lg"
                            >
                              <Trash2 className="w-5 h-5 text-gray-600 hover:text-red-500" />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}

              {products.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-10 text-gray-400">
                    No products found
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

export default Products;
