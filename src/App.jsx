// App.jsx
import './App.css'
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/categories/Cart'; // Add this import
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Navbar cart={cart} />
      <Routes>
        <Route path='/' element={<Home cart={cart} setCart={setCart} />} />
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} /> {/* Add this route */}
      </Routes>
    </Router>
  )
}

export default App