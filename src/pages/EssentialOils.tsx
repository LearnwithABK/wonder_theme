import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const products = [
  { name: 'Lavender Oil', img: 'https://via.placeholder.com/160x220?text=Lavender+Oil' },
  { name: 'Tea Tree Oil', img: 'https://via.placeholder.com/160x220?text=Tea+Tree+Oil' },
  { name: 'Peppermint Oil', img: 'https://via.placeholder.com/160x220?text=Peppermint+Oil' },
  { name: 'Eucalyptus Oil', img: 'https://via.placeholder.com/160x220?text=Eucalyptus+Oil' },
  { name: 'Rosemary Oil', img: 'https://via.placeholder.com/160x220?text=Rosemary+Oil' },
  { name: 'Lemon Oil', img: 'https://via.placeholder.com/160x220?text=Lemon+Oil' },
];

const EssentialOils = () => (
  <div className="min-h-screen bg-white">
    <div className="flex items-center bg-[#f3ece6] h-[350px] px-16">
      <div className="w-1/2">
        <h1 className="text-5xl font-serif font-bold mb-6">Essential Oils</h1>
        <p className="text-lg text-gray-700 max-w-xl">
          Discover the power of nature with our pure essential oils. Perfect for aromatherapy, massage, and holistic wellness.
        </p>
      </div>
      <div className="w-1/2 flex justify-end">
        <img
          src="https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=facearea&w=400&q=80"
          alt="Essential Oils Hero"
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

export default EssentialOils; 