import { useState, useEffect } from 'react';

const useInventory = () => {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : [
      { id: 1, name: 'Product 1', price: 10.99 },
      { id: 2, name: 'Product 2', price: 20.99 },
      { id: 3, name: 'Product 3', price: 30.99 },
      { id: 4, name: 'Product 4', price: 40.99 },
      { id: 5, name: 'Product 5', price: 50.99 },
    ];
  });

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    const newProducts = [...products, { ...product, id: products.length + 1 }];
    setProducts(newProducts);
  };

  const removeProduct = (id) => {
    const newProducts = products.filter(product => product.id !== id);
    setProducts(newProducts);
  };

  return { products, addProduct, removeProduct };
};

export default useInventory;