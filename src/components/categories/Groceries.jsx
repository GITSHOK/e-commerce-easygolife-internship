// categories/Groceries.jsx
import React from 'react';
import ProductCard from '../ProductCard.jsx';
import '../Home.css';

function Groceries({ products, setCart }) { // Add setCart prop
  return (
    <div>
      <h1 className='header'>Groceries</h1>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
        gap: '20px', 
        padding: '20px' 
      }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} setCart={setCart} />
        ))}
      </div>
    </div>
  );
}

export default Groceries;