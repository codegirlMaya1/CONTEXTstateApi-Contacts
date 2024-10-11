import React from 'react';
import useInventory from './useInventory';
import './ProductList.css';

const ProductList = () => {
  const { products, removeProduct } = useInventory();

  return (
    <div>
      <h2>Product List</h2>
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id} className="product-item">
            {product.name} - ${product.price.toFixed(2)}
            <button onClick={() => removeProduct(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
