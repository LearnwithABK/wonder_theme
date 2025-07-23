import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Define the Product type
interface Product {
  name: string;
  img: string;
  price: string;
  description: string;
}

const products: Product[] = [
  {
    name: 'Serum',
    img: 'https://via.placeholder.com/160x220?text=Serum',
    price: '$25.00',
    description: 'A lightweight serum that hydrates and brightens your skin.'
  },
  {
    name: 'Eye Cream',
    img: 'https://via.placeholder.com/160x220?text=Eye+Cream',
    price: '$18.00',
    description: 'Reduces puffiness and dark circles around the eyes.'
  },
  {
    name: 'Face Cream',
    img: 'https://via.placeholder.com/160x220?text=Face+Cream',
    price: '$30.00',
    description: 'Deeply moisturizing cream for daily use.'
  },
  {
    name: 'Mist',
    img: 'https://via.placeholder.com/160x220?text=Mist',
    price: '$12.00',
    description: 'Refreshing facial mist for instant hydration.'
  },
  {
    name: 'Cleanser',
    img: 'https://via.placeholder.com/160x220?text=Cleanser',
    price: '$15.00',
    description: 'Gentle cleanser that removes impurities without drying.'
  },
  {
    name: 'Toner',
    img: 'https://via.placeholder.com/160x220?text=Toner',
    price: '$14.00',
    description: 'Balances skin pH and tightens pores.'
  },
  {
    name: 'Moisturizer',
    img: 'https://via.placeholder.com/160x220?text=Moisturizer',
    price: '$22.00',
    description: 'Lightweight moisturizer for all skin types.'
  },
  {
    name: 'Sunscreen',
    img: 'https://via.placeholder.com/160x220?text=Sunscreen',
    price: '$20.00',
    description: 'Broad spectrum SPF 50 sunscreen.'
  },
  {
    name: 'Night Cream',
    img: 'https://via.placeholder.com/160x220?text=Night+Cream',
    price: '$28.00',
    description: 'Nourishing night cream for overnight repair.'
  },
  {
    name: 'Sheet Mask',
    img: 'https://via.placeholder.com/160x220?text=Sheet+Mask',
    price: '$5.00',
    description: 'Hydrating sheet mask for a quick glow.'
  },
  {
    name: 'Peel',
    img: 'https://via.placeholder.com/160x220?text=Peel',
    price: '$16.00',
    description: 'Gentle exfoliating peel for radiant skin.'
  },
  {
    name: 'Spot Treatment',
    img: 'https://via.placeholder.com/160x220?text=Spot+Treatment',
    price: '$10.00',
    description: 'Targets blemishes and reduces redness.'
  },
  {
    name: 'Exfoliator',
    img: 'https://via.placeholder.com/160x220?text=Exfoliator',
    price: '$17.00',
    description: 'Removes dead skin cells for a smoother complexion.'
  },
  {
    name: 'Face Oil',
    img: 'https://via.placeholder.com/160x220?text=Face+Oil',
    price: '$19.00',
    description: 'Nourishing oil for a healthy glow.'
  },
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

const FaceCare = () => {
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

      {/* Main Content */}
      {/* Product Grid Modern Layout */}
      <div className="py-12 px-0 w-full bg-white">
        <div className="mx-auto w-full max-w-[1600px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((p, i) => (
            <div key={i} className="flex flex-col items-center bg-[#f7f7f7] rounded-lg overflow-hidden" style={{ minHeight: 520 }}>
              <div className="w-full h-[420px] flex items-center justify-center bg-[#f7f7f7]">
                <img src={p.img} alt={p.name} className="object-contain w-full h-full" style={{ maxHeight: 400, maxWidth: '100%' }} />
              </div>
              {/* Product Info at the bottom inside the card */}
              <div className="flex flex-col items-center justify-end mt-auto py-6">
                <div className="text-xs text-gray-400 tracking-widest mb-1">WONDER</div>
                <Link to={`/product/${encodeURIComponent(p.name)}`} className="font-medium text-lg text-gray-900 hover:underline block mb-1 text-center">
                  {p.name}
                </Link>
                <div className="text-gray-700 font-semibold text-base text-center">$99.00</div>
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

export default FaceCare; 