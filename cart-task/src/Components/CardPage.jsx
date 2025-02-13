import React, { useState, useEffect } from 'react';

function CardPage({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, []);

  return (
    <section className="py-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img className="w-full h-64 object-cover" src={product.image} alt={product.title} />
              <div className="p-4">
                <h5 className="font-bold text-lg mb-2 truncate">{product.title}</h5>
                <p className="text-gray-700">${product.price}</p>
              </div>
              <div className="p-4 border-t">
                <button 
                  onClick={() => addToCart(product)}
                  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardPage;
