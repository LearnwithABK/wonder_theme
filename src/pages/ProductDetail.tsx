import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// Enhanced product data for all sections
const products = [
  // Face Care
  {
    name: 'Eye Cream',
    brand: 'NIFE',
    section: 'face-care',
    images: [
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=600&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=600&q=80',
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=600&q=80',
    ],
    price: '$18.00',
    description: 'Reduces puffiness and dark circles around the eyes.',
    sizes: ['15ml', '30ml', '50ml'],
    features: [
      'Reduces puffiness',
      'Brightens under-eye area',
      'Dermatologist tested',
      'Suitable for all skin types'
    ]
  },
  {
    name: 'Serum',
    brand: 'NIFE',
    section: 'face-care',
    images: [
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=600&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=600&q=80',
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=600&q=80',
    ],
    price: '$25.00',
    description: 'A lightweight serum that hydrates and brightens your skin.',
    sizes: ['30ml', '50ml'],
    features: [
      'Hydrates skin',
      'Brightens complexion',
      'Lightweight formula'
    ]
  },
  {
    name: 'Cleanser',
    brand: 'NIFE',
    section: 'face-care',
    images: [
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=600&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=600&q=80',
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=600&q=80',
    ],
    price: '$15.00',
    description: 'Gentle cleanser that removes impurities without drying.',
    sizes: ['100ml', '200ml'],
    features: [
      'Removes impurities',
      'Gentle formula',
      'No drying'
    ]
  },
  {
    name: 'Toner',
    brand: 'NIFE',
    section: 'face-care',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=600&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=600&q=80',
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=600&q=80',
    ],
    price: '$14.00',
    description: 'Balances skin pH and tightens pores.',
    sizes: ['100ml', '200ml'],
    features: [
      'Balances pH',
      'Tightens pores',
      'Refreshing'
    ]
  },
  {
    name: 'Moisturizer',
    brand: 'NIFE',
    section: 'face-care',
    images: [
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=600&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=600&q=80',
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=600&q=80',
    ],
    price: '$22.00',
    description: 'Lightweight moisturizer for all skin types.',
    sizes: ['50ml', '100ml'],
    features: [
      'Lightweight',
      'For all skin types',
      'Hydrating'
    ]
  },
  {
    name: 'Sunscreen',
    brand: 'NIFE',
    section: 'face-care',
    images: [
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=600&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=600&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=600&q=80',
    ],
    price: '$20.00',
    description: 'Broad spectrum SPF 50 sunscreen.',
    sizes: ['50ml', '100ml'],
    features: [
      'SPF 50',
      'Broad spectrum',
      'Non-greasy'
    ]
  },
  {
    name: 'Night Cream',
    brand: 'NIFE',
    section: 'face-care',
    images: [
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=600&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=600&q=80',
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=600&q=80',
    ],
    price: '$28.00',
    description: 'Nourishing night cream for overnight repair.',
    sizes: ['50ml', '100ml'],
    features: [
      'Nourishing',
      'Overnight repair',
      'Rich texture'
    ]
  },
  {
    name: 'Sheet Mask',
    brand: 'NIFE',
    section: 'face-care',
    images: [
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=600&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=600&q=80',
    ],
    price: '$5.00',
    description: 'Hydrating sheet mask for a quick glow.',
    sizes: ['1pc', '5pc'],
    features: [
      'Hydrating',
      'Quick glow',
      'Easy to use'
    ]
  },
  {
    name: 'Peel',
    brand: 'NIFE',
    section: 'face-care',
    images: [
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=600&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=600&q=80',
    ],
    price: '$16.00',
    description: 'Gentle exfoliating peel for radiant skin.',
    sizes: ['30ml', '50ml'],
    features: [
      'Gentle exfoliation',
      'Radiant skin',
      'Easy to use'
    ]
  },
  {
    name: 'Spot Treatment',
    brand: 'NIFE',
    section: 'face-care',
    images: [
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=600&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=600&q=80',
    ],
    price: '$10.00',
    description: 'Targets blemishes and reduces redness.',
    sizes: ['15ml', '30ml'],
    features: [
      'Targets blemishes',
      'Reduces redness',
      'Fast acting'
    ]
  },
  {
    name: 'Exfoliator',
    brand: 'NIFE',
    section: 'face-care',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=600&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=600&q=80',
    ],
    price: '$17.00',
    description: 'Removes dead skin cells for a smoother complexion.',
    sizes: ['50ml', '100ml'],
    features: [
      'Removes dead skin',
      'Smooth complexion',
      'Gentle formula'
    ]
  },
  {
    name: 'Face Oil',
    brand: 'NIFE',
    section: 'face-care',
    images: [
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=600&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=600&q=80',
    ],
    price: '$19.00',
    description: 'Nourishing oil for a healthy glow.',
    sizes: ['30ml', '50ml'],
    features: [
      'Nourishing',
      'Healthy glow',
      'Lightweight'
    ]
  },
  {
    name: 'Face Cream',
    brand: 'NIFE',
    section: 'face-care',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=600&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=600&q=80',
    ],
    price: '$30.00',
    description: 'Deeply moisturizing cream for daily use.',
    sizes: ['50ml', '100ml'],
    features: [
      'Deep moisture',
      'For daily use',
      'Suitable for all skin types'
    ]
  },
  {
    name: 'Mist',
    brand: 'NIFE',
    section: 'face-care',
    images: [
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=600&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=600&q=80',
    ],
    price: '$12.00',
    description: 'Refreshing facial mist for instant hydration.',
    sizes: ['100ml', '200ml'],
    features: [
      'Instant hydration',
      'Refreshes skin',
      'Light formula'
    ]
  },
  // Bath & Body
  {
    name: 'Bath Bomb',
    brand: 'WONDER',
    section: 'bath-body',
    images: [
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=600&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=600&q=80',
    ],
    price: '$8.00',
    description: 'Fizzing bath bomb for a relaxing soak.',
    colors: [
      { name: 'Pink', code: '#f472b6' },
      { name: 'Blue', code: '#60a5fa' }
    ],
    sizes: ['Small', 'Large'],
    features: [
      'Fizzing action',
      'Aromatherapy scents',
      'Moisturizes skin'
    ]
  },
  {
    name: 'Shower Gel',
    brand: 'WONDER',
    section: 'bath-body',
    images: [
      'https://via.placeholder.com/400x500?text=Shower+Gel+1',
      'https://via.placeholder.com/400x500?text=Shower+Gel+2',
    ],
    price: '$10.00',
    description: 'Cleansing gel for a refreshing shower.',
    colors: [
      { name: 'Blue', code: '#60a5fa' },
      { name: 'Clear', code: '#f3f4f6' }
    ],
    sizes: ['250ml', '500ml'],
    features: [
      'Gentle cleansing',
      'Fresh scent',
      'For all skin types'
    ]
  },
  {
    name: 'Bubble Bath',
    brand: 'WONDER',
    section: 'bath-body',
    images: [
      'https://via.placeholder.com/400x500?text=Bubble+Bath+1',
      'https://via.placeholder.com/400x500?text=Bubble+Bath+2',
    ],
    price: '$12.00',
    description: 'Creates rich bubbles for a fun bath.',
    colors: [
      { name: 'White', code: '#fff' },
      { name: 'Pink', code: '#f472b6' }
    ],
    sizes: ['250ml', '500ml'],
    features: [
      'Rich bubbles',
      'Moisturizing',
      'Fun for kids'
    ]
  },
  {
    name: 'Bath Salts',
    brand: 'WONDER',
    section: 'bath-body',
    images: [
      'https://via.placeholder.com/400x500?text=Bath+Salts+1',
      'https://via.placeholder.com/400x500?text=Bath+Salts+2',
    ],
    price: '$9.00',
    description: 'Mineral-rich salts to soothe muscles.',
    colors: [
      { name: 'White', code: '#fff' },
      { name: 'Pink', code: '#f472b6' }
    ],
    sizes: ['200g', '500g'],
    features: [
      'Soothes muscles',
      'Mineral-rich',
      'Aromatherapy'
    ]
  },
  {
    name: 'Bath Oil',
    brand: 'WONDER',
    section: 'bath-body',
    images: [
      'https://via.placeholder.com/400x500?text=Bath+Oil+1',
      'https://via.placeholder.com/400x500?text=Bath+Oil+2',
    ],
    price: '$11.00',
    description: 'Moisturizing oil for silky skin.',
    colors: [
      { name: 'Yellow', code: '#fde68a' },
      { name: 'Clear', code: '#f3f4f6' }
    ],
    sizes: ['100ml', '200ml'],
    features: [
      'Moisturizes skin',
      'Silky feel',
      'Light fragrance'
    ]
  },
  {
    name: 'Bath Milk',
    brand: 'WONDER',
    section: 'bath-body',
    images: [
      'https://via.placeholder.com/400x500?text=Bath+Milk+1',
      'https://via.placeholder.com/400x500?text=Bath+Milk+2',
    ],
    price: '$13.00',
    description: 'Nourishing milk for a softening bath.',
    colors: [
      { name: 'White', code: '#fff' },
      { name: 'Cream', code: '#f5e9da' }
    ],
    sizes: ['250ml', '500ml'],
    features: [
      'Nourishes skin',
      'Softens bath water',
      'Gentle formula'
    ]
  },
  {
    name: 'Bath Soak',
    brand: 'WONDER',
    section: 'bath-body',
    images: [
      'https://via.placeholder.com/400x500?text=Bath+Soak+1',
      'https://via.placeholder.com/400x500?text=Bath+Soak+2',
    ],
    price: '$10.00',
    description: 'Soothing soak for tired bodies.',
    colors: [
      { name: 'Blue', code: '#60a5fa' },
      { name: 'White', code: '#fff' }
    ],
    sizes: ['200g', '500g'],
    features: [
      'Soothes body',
      'Relaxing',
      'Aromatherapy'
    ]
  },
  {
    name: 'Bath Tea',
    brand: 'WONDER',
    section: 'bath-body',
    images: [
      'https://via.placeholder.com/400x500?text=Bath+Tea+1',
      'https://via.placeholder.com/400x500?text=Bath+Tea+2',
    ],
    price: '$7.00',
    description: 'Herbal bath tea for relaxation.',
    colors: [
      { name: 'Green', code: '#4ade80' },
      { name: 'Brown', code: '#a16207' }
    ],
    sizes: ['100g', '200g'],
    features: [
      'Herbal blend',
      'Relaxing',
      'Natural ingredients'
    ]
  },
  {
    name: 'Bath Fizz',
    brand: 'WONDER',
    section: 'bath-body',
    images: [
      'https://via.placeholder.com/400x500?text=Bath+Fizz+1',
      'https://via.placeholder.com/400x500?text=Bath+Fizz+2',
    ],
    price: '$8.00',
    description: 'Fun fizz for a playful bath.',
    colors: [
      { name: 'Pink', code: '#f472b6' },
      { name: 'Yellow', code: '#fde68a' }
    ],
    sizes: ['Small', 'Large'],
    features: [
      'Fizzing fun',
      'Colorful',
      'Safe for kids'
    ]
  },
  {
    name: 'Bath Sponge',
    brand: 'WONDER',
    section: 'bath-body',
    images: [
      'https://via.placeholder.com/400x500?text=Bath+Sponge+1',
      'https://via.placeholder.com/400x500?text=Bath+Sponge+2',
    ],
    price: '$6.00',
    description: 'Soft sponge for gentle cleansing.',
    colors: [
      { name: 'Yellow', code: '#fde68a' },
      { name: 'White', code: '#fff' }
    ],
    sizes: ['Small', 'Large'],
    features: [
      'Gentle cleansing',
      'Soft texture',
      'Durable'
    ]
  },
  {
    name: 'Bath Brush',
    brand: 'WONDER',
    section: 'bath-body',
    images: [
      'https://via.placeholder.com/400x500?text=Bath+Brush+1',
      'https://via.placeholder.com/400x500?text=Bath+Brush+2',
    ],
    price: '$7.00',
    description: 'Exfoliating brush for smooth skin.',
    colors: [
      { name: 'Brown', code: '#a16207' },
      { name: 'White', code: '#fff' }
    ],
    sizes: ['Small', 'Large'],
    features: [
      'Exfoliates skin',
      'Easy grip',
      'Durable'
    ]
  },
  {
    name: 'Bath Salt Bar',
    brand: 'WONDER',
    section: 'bath-body',
    images: [
      'https://via.placeholder.com/400x500?text=Bath+Salt+Bar+1',
      'https://via.placeholder.com/400x500?text=Bath+Salt+Bar+2',
    ],
    price: '$9.00',
    description: 'Solid bar with mineral salts.',
    colors: [
      { name: 'White', code: '#fff' },
      { name: 'Pink', code: '#f472b6' }
    ],
    sizes: ['100g', '200g'],
    features: [
      'Mineral salts',
      'Solid bar',
      'Easy to use'
    ]
  },
  {
    name: 'Bath Powder',
    brand: 'WONDER',
    section: 'bath-body',
    images: [
      'https://via.placeholder.com/400x500?text=Bath+Powder+1',
      'https://via.placeholder.com/400x500?text=Bath+Powder+2',
    ],
    price: '$8.00',
    description: 'Powder for a silky bath experience.',
    colors: [
      { name: 'White', code: '#fff' },
      { name: 'Pink', code: '#f472b6' }
    ],
    sizes: ['100g', '200g'],
    features: [
      'Silky bath',
      'Easy to dissolve',
      'Gentle on skin'
    ]
  },
  {
    name: 'Bath Sheet',
    brand: 'WONDER',
    section: 'bath-body',
    images: [
      'https://via.placeholder.com/400x500?text=Bath+Sheet+1',
      'https://via.placeholder.com/400x500?text=Bath+Sheet+2',
    ],
    price: '$15.00',
    description: 'Large, soft sheet for after bath.',
    colors: [
      { name: 'White', code: '#fff' },
      { name: 'Beige', code: '#f5e9da' }
    ],
    sizes: ['Standard', 'Large'],
    features: [
      'Soft fabric',
      'Large size',
      'Quick dry'
    ]
  },
  // Body Care
  {
    name: 'Body Lotion',
    brand: 'WONDER',
    section: 'body-care',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=600&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=600&q=80',
    ],
    price: '$14.00',
    description: 'Hydrating lotion for soft, smooth skin.',
    colors: [
      { name: 'White', code: '#fff' },
      { name: 'Beige', code: '#f5e9da' }
    ],
    sizes: ['100ml', '200ml'],
    features: [
      'Deep hydration',
      'Non-greasy',
      'Light fragrance'
    ]
  },
  {
    name: 'Body Scrub',
    brand: 'WONDER',
    section: 'body-care',
    images: [
      'https://via.placeholder.com/400x500?text=Body+Scrub+1',
      'https://via.placeholder.com/400x500?text=Body+Scrub+2',
    ],
    price: '$12.00',
    description: 'Exfoliating scrub to remove dead skin cells.',
    colors: [
      { name: 'Beige', code: '#f5e9da' },
      { name: 'White', code: '#fff' }
    ],
    sizes: ['200g', '400g'],
    features: [
      'Removes dead skin',
      'Smooths skin',
      'Gentle exfoliation'
    ]
  },
  {
    name: 'Body Wash',
    brand: 'WONDER',
    section: 'body-care',
    images: [
      'https://via.placeholder.com/400x500?text=Body+Wash+1',
      'https://via.placeholder.com/400x500?text=Body+Wash+2',
    ],
    price: '$10.00',
    description: 'Gentle wash for daily cleansing.',
    colors: [
      { name: 'Blue', code: '#60a5fa' },
      { name: 'White', code: '#fff' }
    ],
    sizes: ['250ml', '500ml'],
    features: [
      'Daily cleansing',
      'Mild formula',
      'Fresh scent'
    ]
  },
  {
    name: 'Body Oil',
    brand: 'WONDER',
    section: 'body-care',
    images: [
      'https://via.placeholder.com/400x500?text=Body+Oil+1',
      'https://via.placeholder.com/400x500?text=Body+Oil+2',
    ],
    price: '$16.00',
    description: 'Nourishing oil for glowing skin.',
    colors: [
      { name: 'Yellow', code: '#fde68a' },
      { name: 'Clear', code: '#f3f4f6' }
    ],
    sizes: ['100ml', '200ml'],
    features: [
      'Nourishes skin',
      'Adds glow',
      'Lightweight'
    ]
  },
  {
    name: 'Body Butter',
    brand: 'WONDER',
    section: 'body-care',
    images: [
      'https://via.placeholder.com/400x500?text=Body+Butter+1',
      'https://via.placeholder.com/400x500?text=Body+Butter+2',
    ],
    price: '$15.00',
    description: 'Rich butter for deep moisture.',
    colors: [
      { name: 'White', code: '#fff' },
      { name: 'Beige', code: '#f5e9da' }
    ],
    sizes: ['100g', '200g'],
    features: [
      'Deep moisture',
      'Rich texture',
      'For dry skin'
    ]
  },
  {
    name: 'Body Mist',
    brand: 'WONDER',
    section: 'body-care',
    images: [
      'https://via.placeholder.com/400x500?text=Body+Mist+1',
      'https://via.placeholder.com/400x500?text=Body+Mist+2',
    ],
    price: '$9.00',
    description: 'Refreshing mist for a light scent.',
    colors: [
      { name: 'Clear', code: '#f3f4f6' },
      { name: 'Blue', code: '#60a5fa' }
    ],
    sizes: ['100ml', '200ml'],
    features: [
      'Light scent',
      'Refreshes skin',
      'Quick dry'
    ]
  },
  {
    name: 'Body Gel',
    brand: 'WONDER',
    section: 'body-care',
    images: [
      'https://via.placeholder.com/400x500?text=Body+Gel+1',
      'https://via.placeholder.com/400x500?text=Body+Gel+2',
    ],
    price: '$11.00',
    description: 'Cooling gel for after sun care.',
    colors: [
      { name: 'Blue', code: '#60a5fa' },
      { name: 'Clear', code: '#f3f4f6' }
    ],
    sizes: ['100ml', '200ml'],
    features: [
      'Cools skin',
      'Soothes after sun',
      'Non-sticky'
    ]
  },
  {
    name: 'Body Polish',
    brand: 'WONDER',
    section: 'body-care',
    images: [
      'https://via.placeholder.com/400x500?text=Body+Polish+1',
      'https://via.placeholder.com/400x500?text=Body+Polish+2',
    ],
    price: '$13.00',
    description: 'Polishing cream for radiant skin.',
    colors: [
      { name: 'Beige', code: '#f5e9da' },
      { name: 'White', code: '#fff' }
    ],
    sizes: ['100g', '200g'],
    features: [
      'Radiant skin',
      'Gentle polish',
      'Easy to use'
    ]
  },
  {
    name: 'Body Balm',
    brand: 'WONDER',
    section: 'body-care',
    images: [
      'https://via.placeholder.com/400x500?text=Body+Balm+1',
      'https://via.placeholder.com/400x500?text=Body+Balm+2',
    ],
    price: '$12.00',
    description: 'Soothing balm for dry areas.',
    colors: [
      { name: 'White', code: '#fff' },
      { name: 'Beige', code: '#f5e9da' }
    ],
    sizes: ['50g', '100g'],
    features: [
      'Soothes dryness',
      'Rich formula',
      'For elbows & knees'
    ]
  },
  {
    name: 'Body Milk',
    brand: 'WONDER',
    section: 'body-care',
    images: [
      'https://via.placeholder.com/400x500?text=Body+Milk+1',
      'https://via.placeholder.com/400x500?text=Body+Milk+2',
    ],
    price: '$10.00',
    description: 'Lightweight milk for daily hydration.',
    colors: [
      { name: 'White', code: '#fff' },
      { name: 'Cream', code: '#f5e9da' }
    ],
    sizes: ['100ml', '200ml'],
    features: [
      'Daily hydration',
      'Lightweight',
      'Absorbs quickly'
    ]
  },
  {
    name: 'Body Serum',
    brand: 'WONDER',
    section: 'body-care',
    images: [
      'https://via.placeholder.com/400x500?text=Body+Serum+1',
      'https://via.placeholder.com/400x500?text=Body+Serum+2',
    ],
    price: '$18.00',
    description: 'Serum for targeted skin concerns.',
    colors: [
      { name: 'Clear', code: '#f3f4f6' },
      { name: 'White', code: '#fff' }
    ],
    sizes: ['50ml', '100ml'],
    features: [
      'Targets concerns',
      'Light texture',
      'Fast absorbing'
    ]
  },
  {
    name: 'Body Cream',
    brand: 'WONDER',
    section: 'body-care',
    images: [
      'https://via.placeholder.com/400x500?text=Body+Cream+1',
      'https://via.placeholder.com/400x500?text=Body+Cream+2',
    ],
    price: '$15.00',
    description: 'Cream for all-over nourishment.',
    colors: [
      { name: 'White', code: '#fff' },
      { name: 'Beige', code: '#f5e9da' }
    ],
    sizes: ['100g', '200g'],
    features: [
      'Nourishes skin',
      'Rich formula',
      'For all skin types'
    ]
  },
  {
    name: 'Body Soap',
    brand: 'WONDER',
    section: 'body-care',
    images: [
      'https://via.placeholder.com/400x500?text=Body+Soap+1',
      'https://via.placeholder.com/400x500?text=Body+Soap+2',
    ],
    price: '$7.00',
    description: 'Cleansing soap for everyday use.',
    colors: [
      { name: 'White', code: '#fff' },
      { name: 'Beige', code: '#f5e9da' }
    ],
    sizes: ['100g', '200g'],
    features: [
      'Cleanses skin',
      'Mild formula',
      'For all ages'
    ]
  },
  {
    name: 'Body Foam',
    brand: 'WONDER',
    section: 'body-care',
    images: [
      'https://via.placeholder.com/400x500?text=Body+Foam+1',
      'https://via.placeholder.com/400x500?text=Body+Foam+2',
    ],
    price: '$8.00',
    description: 'Foaming cleanser for a fresh feel.',
    colors: [
      { name: 'White', code: '#fff' },
      { name: 'Blue', code: '#60a5fa' }
    ],
    sizes: ['150ml', '300ml'],
    features: [
      'Foaming action',
      'Fresh feel',
      'Easy to rinse'
    ]
  },
  // Essential Oils
  {
    name: 'Lavender Oil',
    brand: 'WONDER',
    section: 'essential-oils',
    images: [
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=600&q=80',
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=600&q=80',
    ],
    price: '$19.00',
    description: 'Calming and relaxing oil, perfect for stress relief and sleep.',
    colors: [
      { name: 'Purple', code: '#a78bfa' },
      { name: 'Clear', code: '#f3f4f6' }
    ],
    sizes: ['10ml', '30ml'],
    features: [
      '100% pure',
      'Aromatherapy',
      'Soothing scent'
    ]
  },
  {
    name: 'Peppermint Oil',
    brand: 'WONDER',
    section: 'essential-oils',
    images: [
      'https://via.placeholder.com/400x500?text=Peppermint+Oil+1',
      'https://via.placeholder.com/400x500?text=Peppermint+Oil+2',
    ],
    price: '$15.00',
    description: 'Invigorating oil for energy and mental clarity.',
    colors: [
      { name: 'Green', code: '#4ade80' },
      { name: 'Clear', code: '#f3f4f6' }
    ],
    sizes: ['10ml', '30ml'],
    features: [
      'Invigorating',
      'Mental clarity',
      'Fresh scent'
    ]
  },
  {
    name: 'Tea Tree Oil',
    brand: 'WONDER',
    section: 'essential-oils',
    images: [
      'https://via.placeholder.com/400x500?text=Tea+Tree+Oil+1',
      'https://via.placeholder.com/400x500?text=Tea+Tree+Oil+2',
    ],
    price: '$17.00',
    description: 'Cleansing oil, great for skin and scalp care.',
    colors: [
      { name: 'Clear', code: '#f3f4f6' },
      { name: 'Green', code: '#4ade80' }
    ],
    sizes: ['10ml', '30ml'],
    features: [
      'Cleansing',
      'For skin & scalp',
      'Fresh scent'
    ]
  },
  {
    name: 'Eucalyptus Oil',
    brand: 'WONDER',
    section: 'essential-oils',
    images: [
      'https://via.placeholder.com/400x500?text=Eucalyptus+Oil+1',
      'https://via.placeholder.com/400x500?text=Eucalyptus+Oil+2',
    ],
    price: '$16.00',
    description: 'Refreshing oil, ideal for congestion and respiratory support.',
    colors: [
      { name: 'Green', code: '#4ade80' },
      { name: 'Clear', code: '#f3f4f6' }
    ],
    sizes: ['10ml', '30ml'],
    features: [
      'Refreshing',
      'For congestion',
      'Respiratory support'
    ]
  },
  {
    name: 'Rosemary Oil',
    brand: 'WONDER',
    section: 'essential-oils',
    images: [
      'https://via.placeholder.com/400x500?text=Rosemary+Oil+1',
      'https://via.placeholder.com/400x500?text=Rosemary+Oil+2',
    ],
    price: '$18.00',
    description: 'Stimulating oil for focus and hair care.',
    colors: [
      { name: 'Green', code: '#4ade80' },
      { name: 'Clear', code: '#f3f4f6' }
    ],
    sizes: ['10ml', '30ml'],
    features: [
      'Stimulating',
      'For focus',
      'Hair care'
    ]
  },
  {
    name: 'Lemon Oil',
    brand: 'WONDER',
    section: 'essential-oils',
    images: [
      'https://via.placeholder.com/400x500?text=Lemon+Oil+1',
      'https://via.placeholder.com/400x500?text=Lemon+Oil+2',
    ],
    price: '$14.00',
    description: 'Uplifting oil for mood and cleaning.',
    colors: [
      { name: 'Yellow', code: '#fde68a' },
      { name: 'Clear', code: '#f3f4f6' }
    ],
    sizes: ['10ml', '30ml'],
    features: [
      'Uplifting',
      'Mood boost',
      'Cleaning'
    ]
  },
  {
    name: 'Orange Oil',
    brand: 'WONDER',
    section: 'essential-oils',
    images: [
      'https://via.placeholder.com/400x500?text=Orange+Oil+1',
      'https://via.placeholder.com/400x500?text=Orange+Oil+2',
    ],
    price: '$13.00',
    description: 'Cheerful oil for positivity and freshening spaces.',
    colors: [
      { name: 'Orange', code: '#fb923c' },
      { name: 'Clear', code: '#f3f4f6' }
    ],
    sizes: ['10ml', '30ml'],
    features: [
      'Cheerful',
      'Positivity',
      'Fresh scent'
    ]
  },
  {
    name: 'Frankincense Oil',
    brand: 'WONDER',
    section: 'essential-oils',
    images: [
      'https://via.placeholder.com/400x500?text=Frankincense+Oil+1',
      'https://via.placeholder.com/400x500?text=Frankincense+Oil+2',
    ],
    price: '$22.00',
    description: 'Sacred oil for meditation and skin rejuvenation.',
    colors: [
      { name: 'Clear', code: '#f3f4f6' },
      { name: 'Yellow', code: '#fde68a' }
    ],
    sizes: ['10ml', '30ml'],
    features: [
      'Sacred oil',
      'Meditation',
      'Skin rejuvenation'
    ]
  },
  {
    name: 'Bergamot Oil',
    brand: 'WONDER',
    section: 'essential-oils',
    images: [
      'https://via.placeholder.com/400x500?text=Bergamot+Oil+1',
      'https://via.placeholder.com/400x500?text=Bergamot+Oil+2',
    ],
    price: '$20.00',
    description: 'Balancing oil for mood and emotional wellness.',
    colors: [
      { name: 'Green', code: '#4ade80' },
      { name: 'Clear', code: '#f3f4f6' }
    ],
    sizes: ['10ml', '30ml'],
    features: [
      'Balancing',
      'Mood support',
      'Emotional wellness'
    ]
  },
  {
    name: 'Cedarwood Oil',
    brand: 'WONDER',
    section: 'essential-oils',
    images: [
      'https://via.placeholder.com/400x500?text=Cedarwood+Oil+1',
      'https://via.placeholder.com/400x500?text=Cedarwood+Oil+2',
    ],
    price: '$15.00',
    description: 'Grounding oil for relaxation and sleep.',
    colors: [
      { name: 'Brown', code: '#a16207' },
      { name: 'Clear', code: '#f3f4f6' }
    ],
    sizes: ['10ml', '30ml'],
    features: [
      'Grounding',
      'Relaxation',
      'Sleep support'
    ]
  },
  {
    name: 'Clary Sage Oil',
    brand: 'WONDER',
    section: 'essential-oils',
    images: [
      'https://via.placeholder.com/400x500?text=Clary+Sage+Oil+1',
      'https://via.placeholder.com/400x500?text=Clary+Sage+Oil+2',
    ],
    price: '$21.00',
    description: 'Soothing oil for balance and calm.',
    colors: [
      { name: 'Purple', code: '#a78bfa' },
      { name: 'Clear', code: '#f3f4f6' }
    ],
    sizes: ['10ml', '30ml'],
    features: [
      'Soothing',
      'Balance',
      'Calm'
    ]
  },
  {
    name: 'Grapefruit Oil',
    brand: 'WONDER',
    section: 'essential-oils',
    images: [
      'https://via.placeholder.com/400x500?text=Grapefruit+Oil+1',
      'https://via.placeholder.com/400x500?text=Grapefruit+Oil+2',
    ],
    price: '$16.00',
    description: 'Energizing oil for freshness and clarity.',
    colors: [
      { name: 'Pink', code: '#f472b6' },
      { name: 'Clear', code: '#f3f4f6' }
    ],
    sizes: ['10ml', '30ml'],
    features: [
      'Energizing',
      'Freshness',
      'Clarity'
    ]
  },
  {
    name: 'Patchouli Oil',
    brand: 'WONDER',
    section: 'essential-oils',
    images: [
      'https://via.placeholder.com/400x500?text=Patchouli+Oil+1',
      'https://via.placeholder.com/400x500?text=Patchouli+Oil+2',
    ],
    price: '$18.00',
    description: 'Earthy oil for grounding and skin care.',
    colors: [
      { name: 'Brown', code: '#a16207' },
      { name: 'Clear', code: '#f3f4f6' }
    ],
    sizes: ['10ml', '30ml'],
    features: [
      'Earthy',
      'Grounding',
      'Skin care'
    ]
  },
  {
    name: 'Ylang Ylang Oil',
    brand: 'WONDER',
    section: 'essential-oils',
    images: [
      'https://via.placeholder.com/400x500?text=Ylang+Ylang+Oil+1',
      'https://via.placeholder.com/400x500?text=Ylang+Ylang+Oil+2',
    ],
    price: '$19.00',
    description: 'Floral oil for relaxation and emotional balance.',
    colors: [
      { name: 'Yellow', code: '#fde68a' },
      { name: 'Clear', code: '#f3f4f6' }
    ],
    sizes: ['10ml', '30ml'],
    features: [
      'Floral',
      'Relaxation',
      'Emotional balance'
    ]
  },
];

const sectionMap = {
  'face-care': { label: 'Face Care', path: '/face-care' },
  'bath-body': { label: 'Bath & Body', path: '/bath-body' },
  'body-care': { label: 'Body Care', path: '/body-care' },
  'essential-oils': { label: 'Essential Oils', path: '/essential-oils' },
};

const ProductDetail = () => {
  const { name } = useParams<{ name: string }>();
  const product = products.find(p => p.name.replace(/\s+/g, '').toLowerCase() === (name || '').replace(/\s+/g, '').toLowerCase());
  const [selectedImg, setSelectedImg] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Link to="/" className="text-blue-600 underline">Back to Home</Link>
      </div>
    );
  }

  // Get suggested products (other than the current one, from the same section)
  const suggested = products.filter(p => p.name !== product.name && p.section === product.section).slice(0, 3);
  const sectionInfo = sectionMap[product.section as keyof typeof sectionMap] || { label: 'Home', path: '/' };

  return (
    <div className="min-h-screen w-full flex flex-col items-stretch justify-between p-0 m-0 bg-white">
      {/* Header Navigation Bar */}
      <header className="w-full flex items-center justify-between px-8 py-3 bg-[#f5f5f5] border-b border-gray-200 z-20 fixed top-0 left-0 right-0" style={{height: '64px'}}>
        {/* Left: Hamburger and nav links */}
        <div className="flex items-center gap-8">
          <button className="text-2xl focus:outline-none mr-2" aria-label="Open menu">
            <span className="block w-7 h-0.5 bg-black mb-1"></span>
            <span className="block w-7 h-0.5 bg-black mb-1"></span>
            <span className="block w-7 h-0.5 bg-black"></span>
          </button>
          <Link to="/shop" className="uppercase tracking-widest text-base font-medium text-black hover:text-gray-700">Shop</Link>
          <Link to="/lookbook" className="uppercase tracking-widest text-base font-medium text-black hover:text-gray-700">Lookbook</Link>
          <Link to="/sale" className="uppercase tracking-widest text-base font-medium text-black hover:text-gray-700">Sale</Link>
        </div>
        {/* Center: Brand name */}
        <div className="flex-1 flex justify-center">
          <span className="text-3xl font-serif font-light tracking-widest text-black">COUTURE</span>
        </div>
        {/* Right: Currency, search, account, cart */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1 text-base text-black cursor-pointer">
            USD <span className="text-xs">▼</span>
          </div>
          <button className="text-xl" aria-label="Search">
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          </button>
          <button className="text-xl" aria-label="Account">
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-7 8-7s8 3 8 7"/></svg>
          </button>
          <button className="text-xl" aria-label="Cart">
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          </button>
        </div>
      </header>
      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center w-full pt-[64px] pb-0 m-0">
        <div className="w-full flex flex-col md:flex-row flex-1 p-0 m-0 min-h-[calc(100vh-64px)]">
          {/* Left: Product Image Gallery, flush left, full width */}
          <div className="flex-1 relative flex flex-col md:flex-row items-stretch justify-center bg-[#f7f7f7] p-0 m-0 border-b md:border-b-0 md:border-r border-gray-200" style={{ minWidth: 0 }}>
            {/* Vertical Thumbnail Slider - overlay, top left, normal z-index */}
            <div className="md:absolute md:top-8 md:left-8 flex md:flex-col flex-row gap-2 z-10 max-h-[60%] md:overflow-y-auto overflow-x-auto items-center scrollbar-thin scrollbar-thumb-gray-300 py-4 md:py-0 px-4 md:px-0">
              {product.images.map((img, idx) => (
                <button
                  key={img}
                  className={`w-16 md:w-14 h-16 md:h-14 rounded border-2 bg-white flex items-center justify-center transition-all duration-200 ${selectedImg === idx ? 'border-gray-900' : 'border-gray-200'}`}
                  onClick={() => setSelectedImg(idx)}
                  style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
                >
                  <img src={img} alt={product.name + ' thumbnail'} className="object-cover h-full w-full rounded" />
                </button>
              ))}
            </div>
            {/* Main Image - full width and height, cover the frame */}
            <div className="flex items-center justify-center w-full h-[320px] md:h-full bg-white rounded shadow-lg mt-2 md:mt-0" style={{ maxWidth: '100%', maxHeight: '100%' }}>
              <img
                src={product.images[selectedImg]}
                alt={product.name}
                className="object-cover w-full h-full"
                style={{ maxWidth: '100%', maxHeight: '100%', display: 'block', borderRadius: '12px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}
              />
            </div>
          </div>
          {/* Right: Product Info Panel, flush right */}
          <div className="flex-[1.1] flex flex-col justify-center px-4 py-8 md:px-16 md:py-16 bg-white shadow-none z-10" style={{ maxWidth: '600px', minWidth: '0', minHeight: '320px' }}>
            <div className="text-gray-400 uppercase tracking-widest text-sm mb-2">{product.brand}</div>
            <h2 className="text-2xl md:text-4xl font-bold mb-2 tracking-wide">{product.name}</h2>
            <div className="text-xl md:text-2xl font-semibold mb-6">{product.price}</div>
            {/* Size Buttons */}
            <div className="mb-6">
              <div className="text-base mb-2 font-medium">Size: {product.sizes[selectedSize]}</div>
              <div className="flex gap-2">
                {product.sizes.map((size, idx) => (
                  <button
                    key={size}
                    className={`px-4 py-2 md:px-5 md:py-2 rounded border text-base font-medium transition-all duration-200 ${selectedSize === idx ? 'border-gray-900 bg-gray-100' : 'border-gray-300 bg-white'}`}
                    onClick={() => setSelectedSize(idx)}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <div className="mt-2 text-sm text-gray-500 underline cursor-pointer">Size guide</div>
            </div>
            {/* Add to Cart Button */}
            <button className="mt-4 w-full py-4 md:py-5 bg-gray-900 text-white text-base md:text-lg font-semibold rounded flex items-center justify-center gap-3 hover:bg-gray-700 transition uppercase tracking-wider mb-8">
              <span className="material-icons">shopping_bag</span>
              Add to Cart
            </button>
            {/* Features */}
            <ul className="mb-6 text-gray-700 list-disc list-inside space-y-1 text-sm md:text-base">
              {product.features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
            {/* Description */}
            <div className="border-t pt-6 mt-6">
              <h3 className="text-base md:text-lg font-bold mb-2 tracking-widest">Description</h3>
              <p className="text-gray-600 text-sm md:text-base">{product.description}</p>
            </div>
            <Link to={sectionInfo.path} className="mt-10 inline-block px-4 py-2 md:px-6 md:py-3 bg-gray-900 text-white rounded hover:bg-gray-700 transition text-base font-medium tracking-wider">Back to {sectionInfo.label}</Link>
          </div>
        </div>
      </main>
      {/* Info Section */}
      <div className="w-full bg-white border-t mt-0 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {/* Payment */}
          <div className="flex flex-col items-center">
            <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="mb-2"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M2 10h20"/></svg>
            <div className="font-semibold tracking-widest text-sm mb-1">PAYMENT</div>
            <div className="text-gray-600 text-base">Credit card, Klarna or PayPal</div>
          </div>
          {/* Shipping & Delivery */}
          <div className="flex flex-col items-center">
            <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="mb-2"><rect x="1" y="7" width="15" height="13" rx="2"/><path d="M16 11h3l3 3v3a2 2 0 0 1-2 2h-1"/><circle cx="5.5" cy="20.5" r="1.5"/><circle cx="18.5" cy="20.5" r="1.5"/></svg>
            <div className="font-semibold tracking-widest text-sm mb-1">SHIPPING & DELIVERY</div>
            <div className="text-gray-600 text-base">24h Green delivery</div>
          </div>
          {/* Free Return */}
          <div className="flex flex-col items-center">
            <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="mb-2"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a4 4 0 0 1 8 0v2"/><path d="M12 12v4"/><path d="M10 16h4"/></svg>
            <div className="font-semibold tracking-widest text-sm mb-1">FREE RETURN</div>
            <div className="text-gray-600 text-base">We have free return & exchange</div>
          </div>
          {/* Wonder Card */}
          <div className="flex flex-col items-center">
            <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="mb-2"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M16 11h.01"/><path d="M8 11h.01"/><path d="M12 15v.01"/></svg>
            <div className="font-semibold tracking-widest text-sm mb-1">WONDER CARD</div>
            <div className="text-gray-600 text-base">Special discount club card</div>
          </div>
        </div>
      </div>
      {/* Website Info Banner Section */}
      <div className="w-full h-[400px] md:h-[500px] relative flex items-center justify-center overflow-hidden" style={{ background: '#eaeaea' }}>
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=1200&q=80" alt="Natural Beauty" className="absolute inset-0 w-full h-full object-cover opacity-70" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <div className="text-white text-lg md:text-2xl font-semibold mb-2 drop-shadow-lg">Our Philosophy</div>
          <div className="text-white text-3xl md:text-5xl font-bold text-center drop-shadow-lg max-w-3xl leading-tight">
            WE BELIEVE IN NATURAL BEAUTY, WELLNESS, AND SELF-CARE.<br />
            OUR PRODUCTS ARE MADE WITH PURE INGREDIENTS TO NOURISH YOUR BODY AND SOUL.
          </div>
        </div>
      </div>
      {/* Suggested Products Section */}
      <div className="w-full max-w-6xl mx-auto mt-16">
        <h3 className="text-2xl font-bold mb-6">You may also like</h3>
        <div className="flex gap-8 overflow-x-auto pb-2">
          {suggested.slice(0, 7).map(s => (
            <Link
              key={s.name}
              to={`/product/${encodeURIComponent(s.name)}`}
              className="min-w-[260px] max-w-[260px] h-[340px] bg-white border rounded-lg shadow hover:shadow-lg transition flex flex-col items-center p-6 justify-between"
            >
              <img src={s.images[0]} alt={s.name} className="h-48 w-40 object-contain mb-4 rounded" />
              <div className="font-medium text-xl text-center mb-1">{s.name}</div>
              <div className="text-gray-700 font-semibold text-lg">{s.price}</div>
            </Link>
          ))}
        </div>
      </div>
      {/* Collection Carousel Section */}
      <div className="w-full bg-[#faf9f7] py-16 flex flex-col items-center">
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Carousel (static for now, can be made interactive with state) */}
          <div className="flex gap-8 overflow-x-auto scrollbar-hide px-4">
            <div className="min-w-[340px] h-[420px] bg-white rounded-lg overflow-hidden flex items-center justify-center relative">
              <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=600&q=80" alt="Look 1" className="object-cover w-full h-full" />
              <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full w-10 h-10 flex items-center justify-center text-2xl shadow">&#60;</button>
            </div>
            <div className="min-w-[340px] h-[420px] bg-white rounded-lg overflow-hidden flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=600&q=80" alt="Look 2" className="object-cover w-full h-full" />
            </div>
            <div className="min-w-[340px] h-[420px] bg-white rounded-lg overflow-hidden flex items-center justify-center">
              <video src="https://www.w3schools.com/html/mov_bbb.mp4" controls muted className="object-cover w-full h-full" />
              <button className="absolute right-4 bottom-4 bg-white bg-opacity-80 rounded-full w-8 h-8 flex items-center justify-center text-xl shadow">🔇</button>
            </div>
            <div className="min-w-[340px] h-[420px] bg-white rounded-lg overflow-hidden flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=600&q=80" alt="Look 3" className="object-cover w-full h-full" />
            </div>
            <div className="min-w-[340px] h-[420px] bg-white rounded-lg overflow-hidden flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=600&q=80" alt="Look 4" className="object-cover w-full h-full" />
            </div>
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-3 mt-6">
            <span className="w-3 h-3 rounded-full bg-gray-900 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-gray-300 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-gray-300 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-gray-300 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-gray-300 inline-block"></span>
          </div>
        </div>
        <div className="mt-8 text-center">
          <button className="text-lg font-semibold tracking-widest border-b-2 border-gray-900 pb-1 hover:text-gray-700 transition">CHECK COLLECTION</button>
        </div>
      </div>
      {/* Product Recommendations Section */}
      <div className="w-full bg-white py-16 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-light tracking-widest mb-12 text-center">PRODUCT RECOMMENDATIONS</h2>
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
          <div className="bg-[#f7f7f7] rounded-lg overflow-hidden flex flex-col items-center justify-end">
            <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=600&q=80" alt="Recommended 1" className="object-cover w-full h-[400px]" />
          </div>
          <div className="bg-[#f7f7f7] rounded-lg overflow-hidden flex flex-col items-center justify-end">
            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=600&q=80" alt="Recommended 2" className="object-cover w-full h-[400px]" />
          </div>
          <div className="bg-[#f7f7f7] rounded-lg overflow-hidden flex flex-col items-center justify-end">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=600&q=80" alt="Recommended 3" className="object-cover w-full h-[400px]" />
          </div>
          <div className="bg-[#f7f7f7] rounded-lg overflow-hidden flex flex-col items-center justify-end">
            <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=600&q=80" alt="Recommended 4" className="object-cover w-full h-[400px]" />
          </div>
        </div>
      </div>
      {/* Newsletter Signup Section */}
      <div className="w-full bg-[#f6f3ee] py-16 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-light tracking-widest mb-4 text-center">GET WELLNESS IN YOUR INBOX</h2>
        <div className="text-lg text-gray-700 mb-6 text-center">Sign up to receive exclusive offers, self-care tips, and the latest on our natural beauty & wellness products.</div>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input type="email" placeholder="Your email address" className="px-6 py-3 rounded border border-gray-300 w-80 text-lg focus:outline-none" />
          <button type="submit" className="px-8 py-3 bg-green-700 text-white text-lg rounded tracking-widest hover:bg-green-800 transition">SUBSCRIBE</button>
        </form>
      </div>
    </div>
  );
};

export default ProductDetail; 
