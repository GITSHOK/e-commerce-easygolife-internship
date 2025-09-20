// components/ProductCard.jsx
import React, { useState } from 'react';

const ProductCard = ({ product, setCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => quantity > 1 && setQuantity(prev => prev - 1);
  
  const handleAddToCart = () => {
    setCart(prevCart => [...prevCart, {
      ...product,
      quantity: quantity
    }]);
    setQuantity(1);
    alert(`Added ${quantity} ${product.name}(s) to cart!`);
  };

  // Generate star rating display
  const renderRating = () => {
    const stars = [];
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} style={{color: '#FFD700', fontSize: '16px'}}>★</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" style={{color: '#FFD700', fontSize: '16px'}}>★</span>);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} style={{color: '#DDD', fontSize: '16px'}}>★</span>);
    }
    
    return stars;
  };

  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
      padding: '16px',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0,0,0,0.08)',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      backgroundColor: 'white',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      overflow: 'hidden',
      position: 'relative'
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.12)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.08)';
    }}>
      {/* Product image */}
      <div style={{
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '15px',
        overflow: 'hidden',
        borderRadius: '8px',
        backgroundColor: '#f8f9fa'
      }}>
        <img 
          src={product.image} 
          alt={product.name}
          style={{ 
            maxWidth: '100%', 
            maxHeight: '100%',
            objectFit: 'contain'
          }} 
        />
      </div>
      
      {/* Product name */}
      <h3 style={{ 
        margin: '10px 0',
        fontSize: '18px',
        fontWeight: '600',
        color: '#2d3748',
        lineHeight: '1.4',
        minHeight: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {product.name}
      </h3>
      
      {/* Product price */}
      <p style={{ 
        fontSize: '20px', 
        fontWeight: '700', 
        color: '#2c6ecf',
        margin: '10px 0'
      }}>
        ${product.price.toFixed(2)}
      </p>
      
      {/* Rating */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        margin: '10px 0',
        height: '24px'
      }}>
        {renderRating()}
        <span style={{ marginLeft: '8px', color: '#718096', fontSize: '14px' }}>
          ({product.rating})
        </span>
      </div>
      
      {/* Quantity selector */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        margin: '15px 0',
        border: '1px solid #e2e8f0',
        borderRadius: '6px',
        padding: '6px',
        backgroundColor: '#f7fafc'
      }}>
        <button 
          onClick={handleDecrement}
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '6px',
            border: '1px solid #cbd5e0',
            backgroundColor: 'white',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          -
        </button>
        <span style={{ 
          padding: '0 15px', 
          fontWeight: 'bold',
          minWidth: '40px',
          fontSize: '16px'
        }}>
          {quantity}
        </span>
        <button 
          onClick={handleIncrement}
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '6px',
            border: '1px solid #cbd5e0',
            backgroundColor: 'white',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          +
        </button>
      </div>
      
      {/* Add to cart button */}
      <button 
        onClick={handleAddToCart}
        style={{
          width: '100%',
          padding: '12px',
          backgroundColor: '#2c6ecf',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: '600',
          fontSize: '16px',
          transition: 'background-color 0.2s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = '#1e5ab3';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = '#2c6ecf';
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;