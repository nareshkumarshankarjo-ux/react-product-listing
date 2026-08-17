import React from "react";

function FilterSort({
  selectedCategory,
  setSelectedCategory,
  sortOrder,
  setSortOrder,
  onReset,
}) {
  return (
    <div className="filter-sort-container">
      <select
        value={selectedCategory}
        onChange={(event) =>
          setSelectedCategory(event.target.value)
        }
      >
        <option value="all">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
        <option value="Home">Home</option>
        <option value="Books">Books</option>
      </select>

      <select
        value={sortOrder}
        onChange={(event) =>
          setSortOrder(event.target.value)
        }
      >
        <option value="default">Sort Products</option>
        <option value="price-low-high">
          Price: Low to High
        </option>
        <option value="price-high-low">
          Price: High to Low
        </option>
        <option value="name-a-z">
          Name: A - Z
        </option>
        <option value="name-z-a">
          Name: Z - A
        </option>
      </select>

      <button
        className="reset-btn"
        onClick={onReset}
      >
        Reset Filters
      </button>
    </div>
  );
}

export default FilterSort;