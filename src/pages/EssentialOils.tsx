import React from 'react';
import { Link } from 'react-router-dom';
import CategoryShowcase from './CategoryShowcase';

const products = [
  { name: 'Lavender Oil', img: 'https://via.placeholder.com/160x220?text=Lavender+Oil' },
  { name: 'Peppermint Oil', img: 'https://via.placeholder.com/160x220?text=Peppermint+Oil' },
  { name: 'Tea Tree Oil', img: 'https://via.placeholder.com/160x220?text=Tea+Tree+Oil' },
  { name: 'Eucalyptus Oil', img: 'https://via.placeholder.com/160x220?text=Eucalyptus+Oil' },
  { name: 'Rosemary Oil', img: 'https://via.placeholder.com/160x220?text=Rosemary+Oil' },
  { name: 'Lemon Oil', img: 'https://via.placeholder.com/160x220?text=Lemon+Oil' },
  { name: 'Orange Oil', img: 'https://via.placeholder.com/160x220?text=Orange+Oil' },
  { name: 'Frankincense Oil', img: 'https://via.placeholder.com/160x220?text=Frankincense+Oil' },
  { name: 'Bergamot Oil', img: 'https://via.placeholder.com/160x220?text=Bergamot+Oil' },
  { name: 'Cedarwood Oil', img: 'https://via.placeholder.com/160x220?text=Cedarwood+Oil' },
  { name: 'Clary Sage Oil', img: 'https://via.placeholder.com/160x220?text=Clary+Sage+Oil' },
  { name: 'Grapefruit Oil', img: 'https://via.placeholder.com/160x220?text=Grapefruit+Oil' },
  { name: 'Patchouli Oil', img: 'https://via.placeholder.com/160x220?text=Patchouli+Oil' },
  { name: 'Ylang Ylang Oil', img: 'https://via.placeholder.com/160x220?text=Ylang+Ylang+Oil' },
];

const categoryShowcase = [
  {
    name: 'Bath & Body',
    path: '/bath-body',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=200&q=80',
  },
  {
    name: 'Body Care',
    path: '/body-care',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=200&q=80',
  },
  {
    name: 'Face Care',
    path: '/face-care',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=200&q=80',
  },
  {
    name: 'Essential Oils',
    path: '/essential-oils',
    img: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=facearea&w=200&q=80',
  },
];

const EssentialOils = () => (
  <div className="min-h-screen bg-white">
    {/* Hero Section */}
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

    {/* Filter Bar */}
    <div className="flex items-center justify-between px-16 py-4 border-b">
      <span className="text-gray-600">10 products</span>
      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2 text-gray-700"><span>\u2699</span> Filter</button>
        <span className="text-gray-500">Sort by: <span className="font-medium text-gray-800">Featured</span></span>
      </div>
    </div>

    {/* Main Content */}
    <div className="flex px-16 py-8 gap-8">
      {/* Sidebar/Filter */}
      <aside className="w-64 bg-[#f8f6f3] rounded-lg p-6 h-fit shadow">
        <h2 className="font-semibold mb-4">Filters</h2>
        <div className="text-gray-600">(Sidebar placeholder)</div>
      </aside>
      {/* Product Grid */}
      <main className="flex-1 grid grid-cols-4 gap-8">
        {products.map((p, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <img src={p.img} alt={p.name} className="h-[220px] w-[160px] object-contain mb-4" />
            <div className="font-medium text-lg">{p.name}</div>
            <span className="mt-2 text-xs bg-green-100 text-green-700 rounded-full px-2 py-0.5">New</span>
          </div>
        ))}
      </main>
    </div>
    <CategoryShowcase />
  </div>
);

export default EssentialOils; 