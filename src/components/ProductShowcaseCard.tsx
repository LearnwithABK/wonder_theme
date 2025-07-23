import React from 'react';

interface ProductShowcaseCardProps {
  image: string;
  title: string;
  subtitle: string;
  onShop?: () => void;
}

const ProductShowcaseCard: React.FC<ProductShowcaseCardProps> = ({ image, title, subtitle, onShop }) => (
  <div className="flex-1 flex flex-col items-center justify-end relative h-full bg-[#fbe9d6] overflow-hidden rounded-2xl">
    <img src={image} alt={title} className="object-cover w-full h-full absolute top-0 left-0 z-0" />
    <div className="relative z-10 p-8 text-center bg-gradient-to-t from-black/60 via-black/10 to-transparent w-full">
      <div className="text-2xl font-serif font-bold text-white mb-2">{title}</div>
      <div className="text-white mb-6">{subtitle}</div>
      <button
        className="px-6 py-2 mb-6 rounded-full bg-white text-black font-semibold transition-all duration-300 hover:bg-black hover:text-white shadow"
        onClick={onShop}
      >
        SHOP NOW
      </button>
    </div>
  </div>
);

export default ProductShowcaseCard; 