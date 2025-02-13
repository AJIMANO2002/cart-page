import React from 'react';

function CartModal({ cart, removeFromCart, closeModal }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg w-11/12 md:w-1/2 p-4 overflow-y-auto max-h-[80vh]">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        
        {cart.length > 0 ? (
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="border-b py-4 flex justify-between">
                <div className="flex items-center">
                  <img className="w-16 h-16 object-cover rounded" src={item.image} alt={item.title} />
                  <div className="ml-4">
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-gray-600">${item.price} x {item.quantity}</p>
                  </div>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}

        <button 
          onClick={closeModal}
          className="mt-4 bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default CartModal;
