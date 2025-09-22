// Navbar.jsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'

function Navbar({ cart }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">E commerce</Link>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li className="nav-item">
              <Link 
                to="/"
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/about"
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/contact"
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            {/* Add Cart link */}
            <li className="nav-item">
              <Link 
                to="/cart"
                className={`nav-link ${location.pathname === '/cart' ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Cart ({cartCount})
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Cart Icon */}
        <Link to="/cart" className="cart-icon-mobile" style={{ 
          position: 'relative', 
          marginLeft: '20px',
          fontSize: '24px',
          textDecoration: 'none'
        }}>
          🛒
          {cartCount > 0 && (
            <span style={{
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              backgroundColor: 'red',
              color: 'white',
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              fontSize: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {cartCount}
            </span>
          )}
        </Link>
        
        <button 
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;