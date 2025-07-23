import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryShowcase from './CategoryShowcase';

// Define the Product type
interface Product {
  name: string;
  img: string;
  price: string;
  description: string;
  colors?: { name: string; code: string }[]; // Added colors property
}

const products: Product[] = [
  {
    name: 'Body Lotion',
    img: 'https://via.placeholder.com/160x220?text=Body+Lotion',
    price: '$14.00',
    description: 'Hydrating lotion for soft, smooth skin.',
    colors: [{ name: 'Light', code: '#f3ece6' }], // Added colors
  },
  {
    name: 'Body Scrub',
    img: 'https://via.placeholder.com/160x220?text=Body+Scrub',
    price: '$12.00',
    description: 'Exfoliating scrub to remove dead skin cells.',
    colors: [{ name: 'Dark', code: '#333333' }], // Added colors
  },
  {
    name: 'Body Wash',
    img: 'https://via.placeholder.com/160x220?text=Body+Wash',
    price: '$10.00',
    description: 'Gentle wash for daily cleansing.',
    colors: [{ name: 'Blue', code: '#4299e1' }], // Added colors
  },
  {
    name: 'Body Oil',
    img: 'https://via.placeholder.com/160x220?text=Body+Oil',
    price: '$16.00',
    description: 'Nourishing oil for glowing skin.',
    colors: [{ name: 'Green', code: '#48bb78' }], // Added colors
  },
  {
    name: 'Body Butter',
    img: 'https://via.placeholder.com/160x220?text=Body+Butter',
    price: '$15.00',
    description: 'Rich butter for deep moisture.',
    colors: [{ name: 'Purple', code: '#9561e2' }], // Added colors
  },
  {
    name: 'Body Mist',
    img: 'https://via.placeholder.com/160x220?text=Body+Mist',
    price: '$9.00',
    description: 'Refreshing mist for a light scent.',
    colors: [{ name: 'Orange', code: '#f6ad55' }], // Added colors
  },
  {
    name: 'Body Gel',
    img: 'https://via.placeholder.com/160x220?text=Body+Gel',
    price: '$11.00',
    description: 'Cooling gel for after sun care.',
    colors: [{ name: 'Red', code: '#e53e3e' }], // Added colors
  },
  {
    name: 'Body Polish',
    img: 'https://via.placeholder.com/160x220?text=Body+Polish',
    price: '$13.00',
    description: 'Polishing cream for radiant skin.',
    colors: [{ name: 'Yellow', code: '#f6e05e' }], // Added colors
  },
  {
    name: 'Body Balm',
    img: 'https://via.placeholder.com/160x220?text=Body+Balm',
    price: '$12.00',
    description: 'Soothing balm for dry areas.',
    colors: [{ name: 'Pink', code: '#ed64a6' }], // Added colors
  },
  {
    name: 'Body Milk',
    img: 'https://via.placeholder.com/160x220?text=Body+Milk',
    price: '$10.00',
    description: 'Lightweight milk for daily hydration.',
    colors: [{ name: 'Gray', code: '#718096' }], // Added colors
  },
  {
    name: 'Body Serum',
    img: 'https://via.placeholder.com/160x220?text=Body+Serum',
    price: '$18.00',
    description: 'Serum for targeted skin concerns.',
    colors: [{ name: 'Brown', code: '#744210' }], // Added colors
  },
  {
    name: 'Body Cream',
    img: 'https://via.placeholder.com/160x220?text=Body+Cream',
    price: '$15.00',
    description: 'Cream for all-over nourishment.',
    colors: [{ name: 'Black', code: '#1a202c' }], // Added colors
  },
  {
    name: 'Body Soap',
    img: 'https://via.placeholder.com/160x220?text=Body+Soap',
    price: '$7.00',
    description: 'Cleansing soap for everyday use.',
    colors: [{ name: 'White', code: '#ffffff' }], // Added colors
  },
  {
    name: 'Body Foam',
    img: 'https://via.placeholder.com/160x220?text=Body+Foam',
    price: '$8.00',
    description: 'Foaming cleanser for a fresh feel.',
    colors: [{ name: 'Aqua', code: '#4fd1c5' }], // Added colors
  },
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

const BodyCare = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="flex items-center bg-[#f3ece6] h-[350px] px-16">
        <div className="w-1/2">
          <h1 className="text-5xl font-serif font-bold mb-6">Body Care</h1>
          <p className="text-lg text-gray-700 max-w-xl">
            Pamper your body with nourishing lotions, scrubs, and oils. Discover our range of body care products for smooth, healthy skin.
          </p>
        </div>
        <div className="w-1/2 flex justify-end">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&q=80"
            alt="Body Care Hero"
            className="h-[300px] w-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Product Grid Modern Layout */}
      <div className="py-12 px-0 w-full bg-white">
        <div className="mx-auto w-full max-w-[1600px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((p, i) => (
            <div key={i} className="flex flex-col items-stretch bg-[#f7f7f7] rounded-lg overflow-hidden" style={{ minHeight: 520 }}>
              <div className="w-full h-[420px] flex items-center justify-center bg-[#f7f7f7]">
                <img src={p.img} alt={p.name} className="object-contain w-full h-full" style={{ maxHeight: 400, maxWidth: '100%' }} />
              </div>
              {/* Product Info at the bottom inside the card */}
              <div className="flex flex-col items-center justify-end mt-auto py-6">
                <div className="text-xs text-gray-400 tracking-widest mb-1">WONDER</div>
                <Link to={`/product/${encodeURIComponent(p.name)}`} className="font-medium text-lg text-gray-900 hover:underline block mb-1 text-center">
                  {p.name}
                </Link>
                <div className="text-gray-700 font-semibold text-base text-center">{p.price}</div>
              </div>
            </div>
          ))}
        </div>
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
                style={{ background: '#f3ece6' }}
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
      {/* Product Detail Modal */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl font-bold"
              onClick={closeModal}
              aria-label="Close"
            >
              &times;
            </button>
            <img src={selectedProduct.img} alt={selectedProduct.name} className="h-[220px] w-[160px] object-contain mb-4 mx-auto" />
            <h2 className="text-2xl font-bold mb-2">{selectedProduct.name}</h2>
            <div className="text-green-700 font-semibold mb-2">{selectedProduct.price}</div>
            <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
            <button
              className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BodyCare; 