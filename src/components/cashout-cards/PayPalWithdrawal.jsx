'use client';
import { useRef, useEffect } from 'react';
import { Card } from "@/components/ui/card";

const paypalOptions = [
  { amount: 5 }, { amount: 10 }, { amount: 20 }, { amount: 30 },
  { amount: 50 }, { amount: 75 }, { amount: 100 }, { amount: 200 }
];

export default function PayPalWithdrawal({ onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card ref={modalRef} className="w-full max-w-md bg-slate-800 text-white relative">
        <button 
          onClick={onClose}
          className="absolute top-2 right-6 text-gray-400 hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          <div className="flex items-center space-x-2 mb-4">
            <img src="/paypal.png" alt="PayPal" className="w-8 h-8" />
            <h2 className="text-xl font-bold">PayPal</h2>
          </div>
          {/* <p className="text-yellow-400 mb-4">PayPal is not available in India</p> */}
          <p className="text-sm mb-6">
            Please note that PayPal withdrawals have a flat fee of 5%. After withdrawing claim your PayPal Cashout on your profile.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {paypalOptions.map((option, index) => (
              <button
                key={index}
                className={`${index < 4 ? 'bg-blue-700' : 'bg-blue-500'} hover:bg-blue-600 text-white py-4 px-4 rounded-lg flex flex-col items-center justify-center`}
              >
                <span className="text-2xl font-bold">${option.amount}</span>
                <span>PayPal</span>
              </button>
            ))}
          </div>
          <div className="border-t border-gray-600 pt-4 mb-4">
            <div className="flex justify-between mb-2">
              <span>Fee</span>
              <span>$0</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Price</span>
              <span>$0</span>
            </div>
          </div>
          <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-bold">
            Withdraw
          </button>
        </div>
      </Card>
    </div>
  );
}