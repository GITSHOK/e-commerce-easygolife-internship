// hooks/useProducts.js
import { useState, useEffect } from 'react';
const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api.json')  // One directory up
      .then(response => response.json())
      .then(data => {
        setProducts(data.categories);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return { products, loading };
};

export default useProducts;