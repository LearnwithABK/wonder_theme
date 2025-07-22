import React from 'react';

const products = [
  {
    name: 'Firming face serum Orange',
    img: 'https://mokosh.pl/environment/cache/images/0_0_productGfx_6e7e7e7e7e7e7e7e7e7e7e7e7e7e7e7e.jpg',
  },
  {
    name: 'Moisturizing hand',
    img: 'https://mokosh.pl/environment/cache/images/0_0_productGfx_7e7e7e7e7e7e7e7e7e7e7e7e7e7e7e7e.jpg',
  },
  {
    name: 'BKIND Face Cream',
    img: 'https://cdn.shopify.com/s/files/1/0074/6125/9956/products/face-cream-bkind.jpg?v=1669393072',
  },
  {
    name: 'Nourishing body oil',
    img: 'https://mokosh.pl/environment/cache/images/0_0_productGfx_8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e.jpg',
  },
];

const FaceCare = () => (
  <div className="min-h-screen w-full bg-[#f5ede3]">
    {/* Hero Section */}
    <section className="flex flex-col md:flex-row items-center justify-between w-full h-[340px] md:h-[340px] bg-[#f5ede3] px-8 md:px-24">
      <div className="flex-1 flex flex-col justify-center h-full">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-black mb-6">Face Care</h1>
        <p className="text-lg text-black max-w-xl">
          Take care of your complexion to make it healthy and radiant. In the range of facial care products you will find creams, scrubs, masks, toners, gels and much more.
        </p>
      </div>
      <div className="flex-1 flex justify-end items-center h-full">
        <img
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=600&h=600&facepad=2&q=80"
          alt="Face Care Hero"
          className="object-cover rounded-none h-[340px] w-[340px] md:w-[480px] md:h-[340px]"
        />
      </div>
    </section>
    {/* Filter Bar */}
    <div className="flex items-center justify-between px-8 md:px-24 py-6 border-b border-gray-200 bg-white/0">
      <div className="text-gray-700 text-base">34 products</div>
      <div className="flex items-center gap-6">
        <span className="text-gray-700 text-base">Filter</span>
        <span className="text-gray-700 text-base">Sort by: <span className="font-semibold">Featured</span></span>
      </div>
    </div>
    {/* Product Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 px-8 md:px-24 py-16 bg-[#f5ede3]">
      {products.map((product, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <img src={product.img} alt={product.name} className="h-56 w-40 object-contain mb-4" />
          <div className="text-lg font-serif font-semibold text-gray-900 text-center">{product.name}</div>
        </div>
      ))}
    </div>
  </div>
);

export default FaceCare; 