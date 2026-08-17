import React from "react";
import ProductCard from "./ProductCard.jsx";

function ProductList({ products, onAddToCart }) {
  if (products.length === 0) {
    return (
      <div className="no-products">
        <h2>No products found</h2>
        <p>Try changing the search term or category.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;