import React from 'react';
import { Link } from 'react-router-dom';
import CategoryShowcase from './CategoryShowcase';

const products = [
  { name: 'Bath Bomb', img: 'https://via.placeholder.com/160x220?text=Bath+Bomb' },
  { name: 'Shower Gel', img: 'https://via.placeholder.com/160x220?text=Shower+Gel' },
  { name: 'Bubble Bath', img: 'https://via.placeholder.com/160x220?text=Bubble+Bath' },
  { name: 'Bath Salts', img: 'https://via.placeholder.com/160x220?text=Bath+Salts' },
  { name: 'Bath Oil', img: 'https://via.placeholder.com/160x220?text=Bath+Oil' },
  { name: 'Bath Milk', img: 'https://via.placeholder.com/160x220?text=Bath+Milk' },
  { name: 'Bath Soak', img: 'https://via.placeholder.com/160x220?text=Bath+Soak' },
  { name: 'Bath Tea', img: 'https://via.placeholder.com/160x220?text=Bath+Tea' },
  { name: 'Bath Fizz', img: 'https://via.placeholder.com/160x220?text=Bath+Fizz' },
  { name: 'Bath Sponge', img: 'https://via.placeholder.com/160x220?text=Bath+Sponge' },
  { name: 'Bath Brush', img: 'https://via.placeholder.com/160x220?text=Bath+Brush' },
  { name: 'Bath Salt Bar', img: 'https://via.placeholder.com/160x220?text=Bath+Salt+Bar' },
  { name: 'Bath Powder', img: 'https://via.placeholder.com/160x220?text=Bath+Powder' },
  { name: 'Bath Sheet', img: 'https://via.placeholder.com/160x220?text=Bath+Sheet' }, 
];

const BathBody = () => (
  <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <div className="flex items-center bg-[#f3ece6] h-[350px] px-16">
      <div className="w-1/2">
        <h1 className="text-5xl font-serif font-bold mb-6">Bath & Body</h1>
        <p className="text-lg text-gray-700 max-w-xl">
          Relax and rejuvenate with our bath and body essentials. Enjoy luxurious soaks, scrubs, and more for a spa-like experience at home.
        </p>
      </div>
      <div className="w-1/2 flex justify-end">
        <img
          src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=400&q=80"
          alt="Bath & Body Hero"
          className="h-[300px] w-[400px] object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>

    {/* Filter Bar */}
    <div className="flex items-center justify-between px-16 py-4 border-b">
      <span className="text-gray-600">16 products</span>
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

export default BathBody; 