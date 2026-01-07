import React from 'react'

const ReusableTable = ({ columns, data, emptyText = "No Data Found" }) => {
  return (
     <div className=" rounded-xl shadow overflow-hidden border bg-gray-300 ">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((col, index) => (
              <th
                key={index}
                className="px-4 py-3 text-left text-sm font-medium text-gray-600"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="py-16 text-center text-gray-500"
              >
                {emptyText}
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b last:border-none hover:bg-gray-50"
              >
                {columns.map((col, colIndex) => (
                  <td key={colIndex} className="px-4 py-4">
                    {col.render
                      ? col.render(row, rowIndex)
                      : row[col.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};


export default ReusableTable
