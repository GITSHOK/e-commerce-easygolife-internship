// components/Cart.jsx
import React from 'react';

function Cart({ cart, setCart }) {
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart(prevCart => 
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cart.length === 0) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Your Cart</h2>
        <p>Your cart is empty</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Cart ({cart.reduce((total, item) => total + item.quantity, 0)} items)</h2>
      
      {cart.map(item => (
        <div key={item.id} style={{
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '15px',
          margin: '10px 0',
          display: 'flex',
          alignItems: 'center',
          gap: '15px'
        }}>
          <img 
            src={item.image} 
            alt={item.name}
            style={{ 
              width: '60px', 
              height: '60px', 
              objectFit: 'contain'
            }} 
          />
          
          <div style={{ flex: 1 }}>
            <h4 style={{ margin: 0 }}>{item.name}</h4>
            <p style={{ margin: '5px 0' }}>${item.price.toFixed(2)} each</p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
          </div>

          <p style={{ fontWeight: 'bold' }}>
            ${(item.price * item.quantity).toFixed(2)}
          </p>

          <button 
            onClick={() => removeFromCart(item.id)}
            style={{
              padding: '5px 10px',
              backgroundColor: '#ff4444',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Remove
          </button>
        </div>
      ))}

      <div style={{ 
        marginTop: '20px', 
        padding: '15px', 
        backgroundColor: '#f5f5f5',
        borderRadius: '8px'
      }}>
        <h3>Total: ${total.toFixed(2)}</h3>
        <button style={{
          padding: '10px 20px',
          backgroundColor: '#2c6ecf',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px'
        }}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;