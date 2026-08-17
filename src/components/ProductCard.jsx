import React from "react";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="product-content">
        <span className="product-category">
          {product.category}
        </span>

        <h2 className="product-name">
          {product.name}
        </h2>

        <p className="product-description">
          {product.description}
        </p>

        <p className="product-price">
          ₹{product.price.toLocaleString("en-IN")}
        </p>

        <button
          className="add-cart-btn"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;