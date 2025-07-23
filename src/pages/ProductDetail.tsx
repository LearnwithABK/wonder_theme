import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const placeholderProduct = {
  brand: 'HERBIVORE',
  name: 'Coconut Milk Bath Soak',
  price: '$80.00',
  images: [
    'https://cdn.shopify.com/s/files/1/0056/6144/9081/products/Herbivore-Coconut-Milk-Bath-Soak-8oz-Front_1200x.jpg',
    'https://cdn.shopify.com/s/files/1/0056/6144/9081/products/Herbivore-Coconut-Milk-Bath-Soak-8oz-Lifestyle_1200x.jpg',
  ],
  features: [
    '100% Vegan and Organic',
    'Leaves the skin moisturized and silky soft',
    'Is suitable for all skin',
  ],
  description: 'A luxurious, vegan coconut milk bath soak for soft, hydrated skin.',
  howToUse: 'Add desired amount to warm running bath water. Soak and relax.',
  ingredients: 'Cocos Nucifera (Coconut) Fruit Powder, Sodium Bicarbonate, Vanilla Planifolia Fruit Oil.',
  delivery: 'Free shipping on orders over $50. 30-day return policy.',
};

const paymentIcons = [
  'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_%282018%29.svg',
  'https://upload.wikimedia.org/wikipedia/commons/5/5e/PayPal_2014_logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/2/2a/Discover_Card_logo.svg',
];

const sections = [
  { label: 'Description', key: 'description' },
  { label: 'How to use', key: 'howToUse' },
  { label: 'Ingredients', key: 'ingredients' },
  { label: 'Delivery and return policy', key: 'delivery' },
];

const ProductDetail = () => {
  const { slug } = useParams();
  const [selectedImg, setSelectedImg] = useState(0);
  const [qty, setQty] = useState(1);
  const [openSection, setOpenSection] = useState<string | null>(null);
  // In real app, lookup product by slug
  const product = placeholderProduct;

  return (
    <div className="bg-white min-h-screen pt-8 pb-16 px-0 md:px-12">
      {/* Main Navbar would be rendered above this component */}
      {/* Breadcrumbs - moved lower, just outside the navbar */}
      <div className="h-4" /> {/* Spacer to visually separate from navbar */}
      <nav className="text-sm text-gray-500 mb-8 flex items-center gap-2 px-8 md:px-0">
        <Link to="/shop" className="hover:underline">Shop</Link>
        <span>/</span>
        <Link to="/bath-body" className="hover:underline">Bath &amp; Body</Link>
        <span>/</span>
        <span className="text-black font-medium">{product.name}</span>
      </nav>
      <div className="flex flex-row gap-12 max-w-6xl mx-auto min-h-[80vh]">
        {/* Left: Images */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-start min-h-[80vh]">
          {/* Thumbnails vertically on the left */}
          <div className="flex flex-col gap-4 justify-start items-center">
            {product.images.map((img, i) => (
              <button
                key={img}
                className={`border-2 rounded-lg overflow-hidden w-20 h-20 flex items-center justify-center ${selectedImg === i ? 'border-yellow-400' : 'border-transparent'}`}
                onClick={() => setSelectedImg(i)}
                style={{ background: '#fff' }}
              >
                <img src={img} alt={product.name + ' thumb'} className="object-contain w-full h-full" />
              </button>
            ))}
          </div>
          {/* Main image takes 80% of page height and 40% width */}
          <div className="ml-8 flex-1 flex items-center justify-center min-h-[80vh]">
            <img
              src={product.images[selectedImg]}
              alt={product.name}
              className="object-contain rounded-xl shadow-lg"
              style={{ height: '80vh', maxHeight: '80vh', width: '80%', maxWidth: '80%', background: '#fff' }}
            />
          </div>
        </div>
        {/* Right: Info */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="text-xs font-semibold tracking-widest text-gray-400 mb-1">{product.brand}</div>
          <div className="text-3xl md:text-4xl font-serif font-bold mb-2">{product.name}</div>
          <div className="text-2xl font-semibold mb-2">{product.price}</div>
          <div className="text-xs text-gray-400 mb-2">Tax included.</div>
          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center border border-gray-200 rounded-full overflow-hidden">
              <button className="px-3 py-1 text-2xl font-bold text-gray-500 hover:bg-gray-100" onClick={() => setQty(q => Math.max(1, q - 1))}>-</button>
              <span className="px-4 py-1 text-lg font-medium">{qty}</span>
              <button className="px-3 py-1 text-2xl font-bold text-gray-500 hover:bg-gray-100" onClick={() => setQty(q => q + 1)}>+</button>
            </div>
            <button className="flex-1 py-3 rounded-full bg-black text-white font-semibold text-lg tracking-widest shadow hover:bg-zinc-800 transition-all">ADD TO CART</button>
          </div>
          {/* Promo bar */}
          <div className="bg-yellow-50 text-yellow-800 rounded-lg px-4 py-3 mb-4 flex items-center gap-3 text-base">
            <span role="img" aria-label="ticket">🎟️</span> Use code <span className="font-bold">"Beauty"</span> for 10% OFF!
          </div>
          {/* Payment icons */}
          <div className="flex items-center gap-3 mb-4">
            {paymentIcons.map((src, i) => (
              <img key={i} src={src} alt="Payment" className="h-7 w-auto bg-white rounded px-1" />
            ))}
          </div>
          {/* Features */}
          <ul className="mb-4 text-base text-gray-800 list-disc pl-5">
            {product.features.map(f => <li key={f}>{f}</li>)}
          </ul>
          {/* Collapsible sections */}
          <div className="divide-y divide-gray-200 border-t border-b">
            {sections.map(sec => (
              <div key={sec.key}>
                <button
                  className="w-full flex items-center justify-between py-5 text-lg font-serif font-semibold text-left focus:outline-none"
                  onClick={() => setOpenSection(openSection === sec.key ? null : sec.key)}
                >
                  <span className="flex items-center gap-3">
                    {sec.label === 'Description' && <span className="text-xl">💬</span>}
                    {sec.label === 'How to use' && <span className="text-xl">❓</span>}
                    {sec.label === 'Ingredients' && <span className="text-xl">🌿</span>}
                    {sec.label === 'Delivery and return policy' && <span className="text-xl">📦</span>}
                    {sec.label}
                  </span>
                  <span className="text-2xl font-light">{openSection === sec.key ? '-' : '+'}</span>
                </button>
                {openSection === sec.key && (
                  <div className="pb-6 px-2 text-gray-700 text-base animate-fade-in">
                    {product[sec.key as keyof typeof product]}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Before/After Section */}
      <section className="w-full flex flex-col md:flex-row min-h-[480px] mt-20">
        {/* Split Image */}
        <div className="flex-1 relative min-h-[400px] bg-[#f3e7d6] flex items-center justify-center">
          <div className="absolute inset-0 flex">
            <div className="w-1/2 h-full overflow-hidden">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=900&q=80" alt="Before" className="object-cover w-full h-full" />
            </div>
            <div className="w-1/2 h-full overflow-hidden">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=900&q=80" alt="After" className="object-cover w-full h-full" style={{ filter: 'brightness(1.1) saturate(1.2)' }} />
            </div>
            {/* Vertical Divider */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white shadow-lg z-10" style={{ transform: 'translateX(-50%)' }} />
            {/* Slider Button (static for now) */}
            <button className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
              <span className="text-2xl">&#8596;</span>
            </button>
            {/* Before/After Labels */}
            <span className="absolute left-4 bottom-4 bg-white/80 text-gray-700 text-sm px-3 py-1 rounded-full">Before</span>
            <span className="absolute right-4 bottom-4 bg-white/80 text-gray-700 text-sm px-3 py-1 rounded-full">After</span>
          </div>
        </div>
        {/* Right Content */}
        <div className="flex-1 flex flex-col items-center justify-center bg-[#f7f1e7] px-8 py-12 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-zinc-900">We know you are unique.</h2>
          <p className="text-lg md:text-xl text-zinc-700 max-w-xl">
            Take care of your complexion to make it healthy and radiant. In the range of facial care products you will find creams, scrubs, masks, toners, gels and much more.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail; 
