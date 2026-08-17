import React from "react";

function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">🛍️ Product Store</h1>

        <button className="cart-btn" onClick={onCartClick}>
          🛒 Cart
          <span className="cart-count">{cartCount}</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;