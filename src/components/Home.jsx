// Home.jsx
import { useState } from 'react';
import Electronics from './categories/Electronics';
import Aircrafts from './categories/Aircrafts';
import Groceries from './categories/Groceries';
import useProducts from './useProducts.js';
import './Home.css';

function Home({ cart, setCart }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { products, loading } = useProducts();

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  // Find each category from the fetched data
  const electronics = products.find(cat => cat.name === "electronics")?.products || [];
  const groceries = products.find(cat => cat.name === "groceries")?.products || [];
  const aircrafts = products.find(cat => cat.name === "planes")?.products || [];

  return (
    <div className="home-container">
      <h1 className="page-title">Product Categories</h1>
      
      <div className="category-buttons">
        <button 
          className={`category-btn ${selectedCategory === 'electronics' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('electronics')}
        >
          <span className="btn-icon">💻</span>
          ELECTRONICS
        </button>
        
        <button 
          className={`category-btn ${selectedCategory === 'groceries' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('groceries')}
        >
          <span className="btn-icon">🛒</span>
          GROCERIES
        </button>
        
        <button 
          className={`category-btn ${selectedCategory === 'aircrafts' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('aircrafts')}
        >
          <span className="btn-icon">✈️</span>
          AIRCRAFTS
        </button>
        
        <button 
          className={`category-btn ${selectedCategory === null ? 'active' : ''}`}
          onClick={() => setSelectedCategory(null)}
        >
          <span className="btn-icon">🌟</span>
          ALL PRODUCTS
        </button>
      </div>

      <div className="category-content">
        {selectedCategory === 'electronics' && <Electronics products={electronics} setCart={setCart} />}
        {selectedCategory === 'groceries' && <Groceries products={groceries} setCart={setCart} />}
        {selectedCategory === 'aircrafts' && <Aircrafts products={aircrafts} setCart={setCart} />}
        {selectedCategory === null && (
          <>
            <Electronics products={electronics} setCart={setCart} />
            <Groceries products={groceries} setCart={setCart} />
            <Aircrafts products={aircrafts} setCart={setCart} />
          </>
        )}
      </div>
    </div>
  );
}

export default Home;