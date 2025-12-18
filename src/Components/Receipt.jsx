import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Receipt = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // Safety check
  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-[#1F1D2B]">
        <p>No order found</p>
      </div>
    );
  }

  const { orderId, date, items, subtotal } = state;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="flex gap-4">
        {/* RECEIPT */}
        <div
          id="receipt"
          className="bg-white w-[320px] p-4 rounded shadow text-sm"
        >
          <h2 className="text-center text-lg font-bold mb-1">
            Chef Kitchen
          </h2>

          <p className="text-center text-xs text-gray-500 mb-2">
            Order Receipt
          </p>

          <div className="border-t border-dashed my-2" />

          <div className="flex justify-between mb-1">
            <span>Order ID</span>
            <span>{orderId}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Date</span>
            <span>{date}</span>
          </div>

          <div className="border-t border-dashed my-2" />

          {items.map((item, index) => (
            <div
              key={index}
              className="flex justify-between mb-1"
            >
              <span>
                {item.name} × {item.qty}
              </span>
              <span>
                AED {(item.qty * item.price).toFixed(2)}
              </span>
            </div>
          ))}

          <div className="border-t border-dashed my-2" />

          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>AED {subtotal.toFixed(2)}</span>
          </div>

          <p className="text-center text-xs mt-3">
            Thank you for your order!
          </p>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col gap-2 print:hidden">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 bg-[#F99147] text-black rounded"
          >
            Print
          </button>

          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-gray-300 text-black rounded"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
