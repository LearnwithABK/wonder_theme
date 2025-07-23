import React from 'react';
import { Link } from 'react-router-dom';
import CategoryShowcase from './CategoryShowcase';
import ProductCard from '../components/ProductCard';

interface ProductCardProps {
  name: string;
  img: string;
  isNew?: boolean;
}

const products = [
  { name: 'Bath Bomb', img: 'https://via.placeholder.com/160x220?text=Bath+Bomb' },
  { name: 'Bubble Bath', img: 'https://via.placeholder.com/160x220?text=Bubble+Bath' },
  { name: 'Bath Oil', img: 'https://via.placeholder.com/160x220?text=Bath+Oil' },
  { name: 'Bath Salt', img: 'https://via.placeholder.com/160x220?text=Bath+Salt' },
  { name: 'Shower Gel', img: 'https://via.placeholder.com/160x220?text=Shower+Gel' },
  { name: 'Soap', img: 'https://via.placeholder.com/160x220?text=Soap' },
];

const bestSellers = [
  {
    brand: 'MOKOSH',
    name: 'Firming face serum Orange',
    img: 'https://mokosh.pl/environment/cache/images/0_0_productGfx_6e7e7e7e7e7e7e7e7e7e7e7e7e7e7e7e.jpg',
    price: '$68.00',
  },
  {
    brand: 'MOKOSH',
    name: 'Moisturizing hand',
    img: 'https://mokosh.pl/environment/cache/images/0_0_productGfx_7e7e7e7e7e7e7e7e7e7e7e7e7e7e7e7e.jpg',
    price: '$68.00',
  },
  {
    brand: 'MOKOSH',
    name: 'Nourishing body oil',
    img: 'https://mokosh.pl/environment/cache/images/0_0_productGfx_8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e.jpg',
    price: '$68.00',
  },
  // ...more products
];

const BathBody = () => (
  <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <div className="flex items-center bg-[#f3ece6] h-[350px] px-16">
      <div className="w-1/2">
        <h1 className="text-5xl font-serif font-bold mb-6">Bath & Body</h1>
        <p className="text-lg text-gray-700 max-w-xl">
          Transform your bath routine with our relaxing bath bombs, oils, and salts for a spa-like experience.
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
      <span className="text-gray-600">{products.length} products</span>
      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2 text-gray-700"><span>\u2699</span> Filter</button>
        <span className="text-gray-500">Sort by: <span className="font-medium text-gray-800">Featured</span></span>
      </div>
    </div>

    {/* Main Content */}
    <div className="flex px-16 py-8 gap-8">
      {/* Product Grid */}
      <main className="flex-1 grid grid-cols-4 gap-8">
        {products.map((p, i) => (
          <ProductCard key={i} name={p.name} img={p.img} />
        ))}
      </main>
    </div>
    <CategoryShowcase />
  </div>
);

export default BathBody; 