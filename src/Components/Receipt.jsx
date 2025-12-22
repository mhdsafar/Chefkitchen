import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Receipt = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#1F1D2B] text-white">
        No order found
      </div>
    );
  }

  const { orderId, date, items, subtotal, orderType } = state;

  return (
    <div className="relative min-h-screen">
      {/* MENU BACKGROUND (VISIBLE) */}
      <div className="absolute inset-0 bg-[#1F1D2B]" />

      {/* SOFT OVERLAY (NOT SOLID) */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/40 backdrop-blur-[2px]" />

      {/* RECEIPT MODAL */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="flex gap-6 items-start">
          {/* RECEIPT */}
          <div
            id="receipt"
            className="
              w-[320px]
              rounded-2xl
              border border-white/10
              bg-white/90
              backdrop-blur-xl
              shadow-2xl
              text-sm
              overflow-hidden
            "
          >
            {/* HEADER */}
            <div className="bg-[#F99147] text-black text-center py-4">
              <h2 className="text-lg font-bold">Chef Kitchen</h2>
              <p className="text-xs opacity-80">Order Receipt</p>
            </div>

            {/* BODY */}
            <div className="p-4 space-y-3 text-gray-800">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Order ID</span>
                <span>{orderId}</span>
              </div>

              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Date</span>
                <span>{date}</span>
              </div>

              <div className="flex justify-between text-xs font-medium">
                <span className="text-gray-500">Order Type</span>
                <span className="text-[#F99147]">{orderType}</span>
              </div>

              <div className="border-t border-dashed border-gray-300 my-2" />

              {/* ITEMS */}
              <div className="space-y-2">
                {items.map((item, index) => (
                  <div key={index} className="flex justify-between text-xs">
                    <span>
                      {item.name} × {item.qty}
                    </span>
                    <span>
                      AED {(item.qty * item.price).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-dashed border-gray-300 my-2" />

              {/* TOTAL */}
              <div className="flex justify-between font-bold text-sm">
                <span>Total</span>
                <span className="text-[#F99147]">
                  AED {subtotal.toFixed(2)}
                </span>
              </div>

              <p className="text-center text-xs text-gray-500 pt-2">
                Thank you for your order!
              </p>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col gap-3 print:hidden">
            <button
              onClick={() => window.print()}
              className="px-5 py-2 rounded-xl bg-[#F99147] text-black font-semibold shadow-lg hover:scale-105 transition"
            >
              Print
            </button>

            <button
              onClick={() => navigate("/menu")}
              className="px-5 py-2 rounded-xl bg-white/20 text-white backdrop-blur hover:bg-white/30 transition"
            >
              Back to Menu
            </button>
          </div>
        </div>
      </div>

      {/* PRINT ONLY RECEIPT */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #receipt, #receipt * {
            visibility: visible;
          }
          #receipt {
            position: absolute;
            top: 0;
            left: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Receipt;
