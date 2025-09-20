// categories/Electronics.jsx
import React from 'react';
import ProductCard from '../ProductCard.jsx';

function Electronics({ products, setCart }) { // Add setCart prop
  return (
    <div>
      <h1>Electronics</h1>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
        gap: '20px', 
        padding: '20px' 
      }}>
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            setCart={setCart} // Pass setCart down
          />
        ))}
      </div>
    </div>
  );
}

export default Electronics;