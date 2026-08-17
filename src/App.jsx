import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar.jsx";
import SearchBar from "./components/SearchBar.jsx";
import FilterSort from "./components/FilterSort.jsx";
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";

import productData from "./data/products.js";
import "./styles/App.css";

function App() {
  const [products, setProducts] =
    useState([]);

  const [cart, setCart] =
    useState([]);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState("all");

  const [sortOrder, setSortOrder] =
    useState("default");

  const [showCart, setShowCart] =
    useState(false);

  // Load the product data when the application starts.
  useEffect(() => {
    setProducts(productData);
  }, []);

  // Add a product to the shopping cart.
  const handleAddToCart = (product) => {
    setCart((previousCart) => {
      const existingProduct =
        previousCart.find(
          (item) =>
            item.id === product.id
        );

      if (existingProduct) {
        return previousCart.map(
          (item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity:
                    item.quantity + 1,
                }
              : item
        );
      }

      return [
        ...previousCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  // Completely remove an item from the cart.
  const handleRemoveFromCart = (
    productId
  ) => {
    setCart((previousCart) =>
      previousCart.filter(
        (item) =>
          item.id !== productId
      )
    );
  };

  // Reduce product quantity by one.
  const handleDecreaseQuantity = (
    productId
  ) => {
    setCart((previousCart) =>
      previousCart
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) =>
            item.quantity > 0
        )
    );
  };

  // Reset search, category and sorting.
  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSortOrder("default");
  };

  // Search products by name.
  let filteredProducts =
    products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        )
    );

  // Filter products by category.
  if (
    selectedCategory !== "all"
  ) {
    filteredProducts =
      filteredProducts.filter(
        (product) =>
          product.category ===
          selectedCategory
      );
  }

  // Make a copy before sorting.
  filteredProducts = [
    ...filteredProducts,
  ];

  // Sort products.
  if (
    sortOrder ===
    "price-low-high"
  ) {
    filteredProducts.sort(
      (a, b) =>
        a.price - b.price
    );
  } else if (
    sortOrder ===
    "price-high-low"
  ) {
    filteredProducts.sort(
      (a, b) =>
        b.price - a.price
    );
  } else if (
    sortOrder === "name-a-z"
  ) {
    filteredProducts.sort(
      (a, b) =>
        a.name.localeCompare(
          b.name
        )
    );
  } else if (
    sortOrder === "name-z-a"
  ) {
    filteredProducts.sort(
      (a, b) =>
        b.name.localeCompare(
          a.name
        )
    );
  }

  // Calculate total quantity in the cart.
  const cartCount = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  return (
    <>
      <Navbar
        cartCount={cartCount}
        onCartClick={() =>
          setShowCart(true)
        }
      />

      <main className="main-container">
        <section className="hero">
          <p className="hero-label">
            REACT PRODUCT STORE
          </p>

          <h1>
            Discover Products
            You'll Love
          </h1>

          <p className="hero-description">
            Search, filter and sort
            products from different
            categories and add your
            favourites to the cart.
          </p>
        </section>

        <section className="controls">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={
              setSearchTerm
            }
          />

          <FilterSort
            selectedCategory={
              selectedCategory
            }
            setSelectedCategory={
              setSelectedCategory
            }
            sortOrder={
              sortOrder
            }
            setSortOrder={
              setSortOrder
            }
            onReset={
              handleResetFilters
            }
          />
        </section>

        <div className="product-heading">
          <div>
            <h2>Our Products</h2>

            <p>
              Showing{" "}
              {
                filteredProducts.length
              }{" "}
              product
              {filteredProducts.length !==
              1
                ? "s"
                : ""}
            </p>
          </div>
        </div>

        <ProductList
          products={
            filteredProducts
          }
          onAddToCart={
            handleAddToCart
          }
        />
      </main>

      {showCart && (
        <Cart
          cart={cart}
          onRemoveFromCart={
            handleRemoveFromCart
          }
          onDecreaseQuantity={
            handleDecreaseQuantity
          }
          onClose={() =>
            setShowCart(false)
          }
        />
      )}

      <footer className="footer">
        <p>
          © 2026 Product Store |
          Product Listing Using
          React JS
        </p>
      </footer>
    </>
  );
}

export default App;