import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Face Care', path: '/face-care' },
  { name: 'Body Care', path: '/body-care' },
  { name: 'Bath & Body', path: '/bath-body' },
  { name: 'Hair Care', path: '/hair-care' },
  { name: 'Hand Care', path: '/hand-care' },
  { name: 'Essential Oils', path: '/essential-oils' },
];

const Shop = () => (
  <div className="shop-page">
    <h1>Shop Categories</h1>
    <ul>
      {categories.map((cat) => (
        <li key={cat.path}>
          <Link to={cat.path}>{cat.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Shop;
