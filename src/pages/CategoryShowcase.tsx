import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

type Category = typeof categoryShowcase[number];
const defaultBg = '#faece6';

const CategoryShowcase = () => {
  const [hovered, setHovered] = useState<Category | null>(null);
  const bgColor = hovered ? hovered.bgColor : defaultBg;

  return (
    <div
      className="py-24 flex flex-col items-center transition-colors duration-300"
      style={{ background: bgColor }}
    >
      <div className="text-gray-700 text-lg mb-6">Didn't find the product you're looking for? Check out other collections:</div>
      <div className="flex flex-col items-center gap-4 w-full max-w-3xl">
        {categoryShowcase.map(cat => (
          <Link
            key={cat.name}
            to={cat.path}
            className="group flex items-center justify-center text-[2.5rem] md:text-[4rem] font-serif font-semibold text-gray-900 transition-all duration-300 hover:scale-110 hover:text-black rounded-xl overflow-hidden w-full"
            style={{ lineHeight: 1.1, position: 'relative', background: 'transparent' }}
            onMouseEnter={() => setHovered(cat)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Removed colored background span here */}
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
  );
};

export default CategoryShowcase; 