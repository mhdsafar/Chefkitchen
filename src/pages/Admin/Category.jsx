import React, { useState } from "react";
import Title from "../../Components/Admin/Title";
import { CloseIcon, SearchIcon } from "../../constants/icons";
import { PlusIcon, Trash2 } from "lucide-react";
import { DISHES } from "../../constants/dishes";

const Category = () => {
  // Create categories dynamically from DISHES
  const [categories, setCategories] = useState(() => {
    const uniqueCategories = {};

    DISHES.forEach((dish, index) => {
      if (dish.name && !uniqueCategories[dish.name]) {
        uniqueCategories[dish.name] = {
          id: index + 1,
          name: dish.name.toUpperCase(),
          image: dish.image,
          active: true,
        };
      }
    });

    return Object.values(uniqueCategories);
  });

  const [searchTerm, setSearchTerm] = useState("");

  // Toggle category active status
  const toggleCategory = (id) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === id ? { ...cat, active: !cat.active } : cat
      )
    );
  };

  // Delete category
  const deleteCategory = (id) => {
    setCategories((prev) => prev.filter((cat) => cat.id !== id));
  };

  return (
    <div className="px-7">
      <Title text1="Category" text2="List" />

      <div className="bg-white w-full min-h-[630px] rounded-xl overflow-x-hidden px-5">
        {/* Search & Add */}
        <div className="flex justify-between">
          <div className="flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-lg max-w-xl w-full mt-4">
            <SearchIcon className="w-4 h-4 text-gray-400" />
            <input
              placeholder="Search category..."
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

          <div className="flex items-center border border-gray-300 rounded-lg w-32 px-3 py-2 gap-2 mt-4 cursor-pointer hover:bg-gray-100 text-gray-700 font-semibold">
            <PlusIcon className="w-4 h-4" />
            <button>Add New</button>
          </div>
        </div>

        {/* Table */}
        <div className="mt-6 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="text-left p-4 font-semibold text-gray-700">
                  Category
                </th>
                <th className="text-left p-4 font-semibold text-gray-700">
                  Name
                </th>
                <th className="text-left p-4 font-semibold text-gray-700">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {categories
                .filter((cat) =>
                  cat.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((category) => (
                  <tr
                    key={category.id}
                    className="border-b hover:bg-gray-50 transition-colors"
                  >
                    <td className="p-4">
                      <div className="w-12 h-12 bg-gray-200 rounded overflow-hidden">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>

                    <td className="p-4">
                      <span className="text-gray-700 font-medium">
                        {category.name}
                      </span>
                    </td>

                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        {/* Toggle */}
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={category.active}
                            onChange={() => toggleCategory(category.id)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                        </label>

                        {/* Delete */}
                        <button
                          onClick={() => deleteCategory(category.id)}
                          className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-5 h-5 text-gray-600 hover:text-red-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

              {categories.length === 0 && (
                <tr>
                  <td
                    colSpan="3"
                    className="text-center py-10 text-gray-400"
                  >
                    No categories found
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

export default Category;
