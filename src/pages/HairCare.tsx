import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const products = [
  { name: 'Shampoo', img: 'https://via.placeholder.com/160x220?text=Shampoo' },
  { name: 'Conditioner', img: 'https://via.placeholder.com/160x220?text=Conditioner' },
  { name: 'Hair Oil', img: 'https://via.placeholder.com/160x220?text=Hair+Oil' },
  { name: 'Hair Mask', img: 'https://via.placeholder.com/160x220?text=Hair+Mask' },
  { name: 'Serum', img: 'https://via.placeholder.com/160x220?text=Serum' },
  { name: 'Leave-in Cream', img: 'https://via.placeholder.com/160x220?text=Leave-in+Cream' },
];

const HairCare = () => (
  <div className="min-h-screen bg-white">
    <div className="flex items-center bg-[#f3ece6] h-[350px] px-16">
      <div className="w-1/2">
        <h1 className="text-5xl font-serif font-bold mb-6">Hair Care</h1>
        <p className="text-lg text-gray-700 max-w-xl">
          Discover our range of nourishing shampoos, conditioners, and treatments for healthy, shiny hair.
        </p>
      </div>
      <div className="w-1/2 flex justify-end">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&q=80"
          alt="Hair Care Hero"
          className="h-[300px] w-[400px] object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
    <div className="flex items-center justify-between px-16 py-4 border-b">
      <span className="text-gray-600">{products.length} products</span>
      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2 text-gray-700"><span>\u2699</span> Filter</button>
        <span className="text-gray-500">Sort by: <span className="font-medium text-gray-800">Featured</span></span>
      </div>
    </div>
    <div className="flex px-16 py-8 gap-8">
      <main className="flex-1 grid grid-cols-4 gap-8">
        {products.map((p, i) => (
          <ProductCard key={i} name={p.name} img={p.img} />
        ))}
      </main>
    </div>
  </div>
);

export default HairCare; 