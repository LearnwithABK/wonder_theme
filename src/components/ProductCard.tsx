import React from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  name: string;
  img: string;
  brand?: string;
  price?: string;
  showAddToCart?: boolean;
  onAddToCart?: () => void;
  slug?: string;
}

function slugify(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  img,
  brand,
  price,
  showAddToCart,
  onAddToCart,
  slug,
}) => {
  const productSlug = slug || slugify(name);
  return (
    <Link to={`/product/${productSlug}`} style={{ textDecoration: 'none' }}>
      <div
        className="flex flex-col items-center justify-center bg-transparent p-6 transition-transform duration-200 hover:scale-105 cursor-pointer"
        style={{
          width: 240,
          minHeight: 320,
          background: 'none',
          boxShadow: 'none',
          border: 'none',
          outline: 'none',
          borderRadius: 24,
        }}
      >
        <img
          src={img}
          alt={name}
          className="mb-6"
          style={{
            height: 220,
            width: 180,
            objectFit: 'contain',
            display: 'block',
            margin: '0 auto',
            background: 'none',
            boxShadow: 'none',
            border: 'none',
            borderRadius: 16,
          }}
        />
        {brand && (
          <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">{brand}</div>
        )}
        <div className="font-semibold text-xl text-center mb-1">{name}</div>
        {price && <div className="text-base text-gray-800 mb-2">{price}</div>}
        {showAddToCart && (
          <button
            className="border border-gray-300 rounded-full px-8 py-2 text-gray-800 font-medium bg-white hover:bg-gray-100 transition"
            onClick={onAddToCart}
          >
            ADD TO CART
          </button>
        )}
      </div>
    </Link>
  );
};

export default ProductCard; 