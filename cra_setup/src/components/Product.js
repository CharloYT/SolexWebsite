import React from "react";
import "./Product.css";

const Product = () => {
  const products = [
    { id: 1, name: "Bicycle", description: "Description of Product 1", price: "₦35,000" },
    { id: 2, name: "Motorcycle", description: "Description of Product 2", price: "₦1,600,000" },
    { id: 3, name: "Scotter", description: "Description of Product 3", price: "₦50,000" },
  ];

  return (
    <div className="product-container">
      <h1>Our Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="price">{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;