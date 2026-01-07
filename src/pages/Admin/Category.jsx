import React from "react";
import Title from "../../Components/Admin/Title";
import { CloseIcon, SearchIcon } from "../../constants/icons";
import { useState } from "react";
import { PlusIcon, Trash2 } from "lucide-react";
import ReusableTable from "./ReusableTable";

const Category = () => {

  
   const [categories, setCategories] = useState([
    { id: 1, name: 'BEAUTY PRODUCTS', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=100&h=100&fit=crop', active: true },
    { id: 2, name: 'FASHION', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=100&h=100&fit=crop', active: true },
    { id: 3, name: 'APPARELS', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=100&h=100&fit=crop', active: true },
    { id: 4, name: 'COSMETICS', image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=100&h=100&fit=crop', active: true },
    { id: 5, name: 'FOOD & BEVERAGES', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=100&h=100&fit=crop', active: true },
  ]);

  // Toggle category active status
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


  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="px-7">
      <Title text1="Category" text2="List" />
      <div className="bg-white w-full min-h-[630px] rounded-xl overflow-x-hidden px-5">
        <div className="flex justify-between">
          <div className="flex items-center gap-2 bg-[rgb(255,255,255)] border border-gray-300 px-3 py-2 rounded-lg max-w-xl w-full mt-4  ">
          <SearchIcon className="w-4 h-4 text-gray-400" />
          <input
            placeholder="Search for food, coffee, etc..."
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
              <PlusIcon className="w-4 h-4 "/>
              <button>Add New</button>
            </div>
        </div>

        {/* table */}
       <div className="mt-6">
        {/* <ReusableTable columns={columns} data={categories}  /> */}
         <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="text-left p-4 font-semibold text-gray-700">Category</th>
                <th className="text-left p-4 font-semibold text-gray-700">Name</th>
                <th className="text-left p-4 font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {categories
                .filter(cat => cat.name.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((category) => (
                  <tr key={category.id} className="border-b hover:bg-gray-50 transition-colors">
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
                      <span className="text-gray-700 font-medium">{category.name}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={category.active}
                            onChange={() => toggleCategory(category.id)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                        </label>
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
            </tbody>
          </table>
        </div>
       </div>
      </div>
  
     
  


    </div>
  );
};

export default Category;
