import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { name: 'Serum', img: 'https://via.placeholder.com/160x220?text=Serum' },
  { name: 'Eye Cream', img: 'https://via.placeholder.com/160x220?text=Eye+Cream' },
  { name: 'Face Cream', img: 'https://via.placeholder.com/160x220?text=Face+Cream' },
  { name: 'Mist', img: 'https://via.placeholder.com/160x220?text=Mist' },
  { name: 'Cleanser', img: 'https://via.placeholder.com/160x220?text=Cleanser' },
  { name: 'Toner', img: 'https://via.placeholder.com/160x220?text=Toner' },
  { name: 'Moisturizer', img: 'https://via.placeholder.com/160x220?text=Moisturizer' },
  { name: 'Sunscreen', img: 'https://via.placeholder.com/160x220?text=Sunscreen' },
  { name: 'Night Cream', img: 'https://via.placeholder.com/160x220?text=Night+Cream' },
  { name: 'Sheet Mask', img: 'https://via.placeholder.com/160x220?text=Sheet+Mask' },
  { name: 'Peel', img: 'https://via.placeholder.com/160x220?text=Peel' },
  { name: 'Spot Treatment', img: 'https://via.placeholder.com/160x220?text=Spot+Treatment' },
  { name: 'Exfoliator', img: 'https://via.placeholder.com/160x220?text=Exfoliator' },
  { name: 'Face Oil', img: 'https://via.placeholder.com/160x220?text=Face+Oil' },
];

const categoryShowcase = [
  {
    name: 'Bath & Body',
    path: '/bath-body',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=200&q=80',
    bgColor: '#fdf6e3',
  },
  {
    name: 'Body Care',
    path: '/body-care',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=200&q=80',
    bgColor: '#e3f6fd',
  },
  {
    name: 'Face Care',
    path: '/face-care',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=200&q=80',
    bgColor: '#f6e3fd',
  },
  {
    name: 'Essential Oils',
    path: '/essential-oils',
    img: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=facearea&w=200&q=80',
    bgColor: '#e3fde3',
  },
];

const FaceCare = () => (
  <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <div className="flex items-center bg-[#f3ece6] h-[350px] px-16">
      <div className="w-1/2">
        <h1 className="text-5xl font-serif font-bold mb-6">Face Care</h1>
        <p className="text-lg text-gray-700 max-w-xl">
          Take care of your complexion to make it healthy and radiant. In the range of facial care products you will find creams, scrubs, masks, toners, gels and much more.
        </p>
      </div>
      <div className="w-1/2 flex justify-end">
        <img
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&q=80"
          alt="Face Care Hero"
          className="h-[300px] w-[400px] object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>

    {/* Filter Bar */}
    <div className="flex items-center justify-between px-16 py-4 border-b">
      <span className="text-gray-600">34 products</span>
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
    <div className="bg-[#faece6] py-24 flex flex-col items-center">
      <div className="text-gray-700 text-lg mb-6">Didn't find the product you're looking for? Check out other collections:</div>
      <div className="flex flex-col items-center gap-4 w-full max-w-3xl">
        {categoryShowcase.map(cat => (
          <Link
            key={cat.name}
            to={cat.path}
            className="group flex items-center justify-center text-[2.5rem] md:text-[4rem] font-serif font-semibold text-gray-900 transition-all duration-300 hover:scale-110 hover:text-black rounded-xl overflow-hidden w-full"
            style={{ lineHeight: 1.1, position: 'relative' }}
          >
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-0"
              style={{ background: cat.bgColor }}
            />
            <span className="relative flex items-center z-10 w-full justify-center py-4">
              <span className="mr-4 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="rounded-full w-[80px] h-[80px] md:w-[120px] md:h-[120px] object-cover shadow-lg border-4 border-white"
                />
              </span>
              <span className="relative z-10">{cat.name}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default FaceCare; 