import React from 'react';
import { ShoppingCart } from "lucide-react";

function Nav({ cart, openCart }) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="flex flex-wrap items-center justify-around p-4 bg-white shadow-md">
      <div className="text-2xl font-bold cursor-pointer">
        Navbar
      </div>

      <div className="flex space-x-6 font-semibold">
        <div className="cursor-pointer">Home</div>
        <div className="cursor-pointer">About</div>
        <div className="cursor-pointer">Shop</div>
      </div>

      <button 
        className="relative border-1 text-block px-4 py-2 rounded hover:bg-gray-400 transition"
        onClick={openCart}
      >
        <ShoppingCart className="w-6 h-6 inline" /> Cart
        <span className="absolute top-0 right-0 -mt-1 -mr-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
          {totalItems}
        </span>
      </button>
    </div>
  );
}

export default Nav;
