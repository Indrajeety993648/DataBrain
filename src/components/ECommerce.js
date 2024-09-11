import React, { useState, useEffect } from 'react';
import products from './data'; // Import hardcoded product data
import Shimmer from './Shimmer'; // Import the Shimmer component

const ECommerce = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({ category: '', priceRange: '' });
  const [sortOption, setSortOption] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate a loading state
    setLoading(true);
    setTimeout(() => {
      setFilteredProducts(products);
      setLoading(false);
    }, 1000); // Simulate network delay
  }, []);

  const applyFilters = () => {
    let result = [...products]; // Copy products to avoid mutating state directly

    // Category Filter
    if (filters.category) {
      result = result.filter(product => {
        return product.product_category && product.product_category.toLowerCase() === filters.category.toLowerCase();
      });
    }

    // Price Range Filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      result = result.filter(product => {
        const price = parseFloat(product.product_price.replace('$', ''));
        return price >= min && (max ? price <= max : true);
      });
    }

    // Update the filtered products
    setFilteredProducts(result);
  };

  const applySorting = () => {
    let sorted = [...filteredProducts];

    if (sortOption === 'price-asc') {
      sorted.sort((a, b) => parseFloat(a.product_price.replace('$', '')) - parseFloat(b.product_price.replace('$', '')));
    } else if (sortOption === 'price-desc') {
      sorted.sort((a, b) => parseFloat(b.product_price.replace('$', '')) - parseFloat(a.product_price.replace('$', '')));
    }

    setFilteredProducts(sorted);
  };

  // Apply filters when filters or products change
  useEffect(() => {
    applyFilters();
  }, [filters]);

  // Apply sorting when sorting option changes
  useEffect(() => {
    applySorting();
  }, [sortOption]);

  if (error) {
    return <div className="text-center mt-8 text-red-500">{error}</div>;
  }

  return (
    <div className="flex flex-col items-center p-4">
      {/* Filter Dropdown */}
      <div className="w-full flex justify-end mb-4">
        <div className="relative">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-xl shadow focus:outline-none"
            onClick={() => setShowFilters(!showFilters)}
          >
            Filter
          </button>
          {showFilters && (
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-xl py-4 px-4 z-10">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
                <select
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={filters.category}
                  onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                >
                  <option value="">All</option>
                  <option value="Electronics">Electronics</option>
                  {/* Add more categories if needed */}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Price Range</label>
                <select
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={filters.priceRange}
                  onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                >
                  <option value="">All</option>
                  <option value="0-50">$0 - $50</option>
                  <option value="50-100">$50 - $100</option>
                  <option value="100-150">$100 - $150</option>
                  <option value="150-">$150+</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Sort By</label>
                <select
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="">None</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
              <button 
                className="w-full bg-green-500 text-white px-4 py-2 rounded-md shadow focus:outline-none"
                onClick={() => {
                  applyFilters();
                  applySorting();
                  setShowFilters(false);
                }}
              >
                Apply Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Product Display */}
      <div className="w-full">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array(8).fill('').map((_, index) => (
              <Shimmer key={index} /> // Render shimmer effect 8 times for the grid
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <div key={product.asin} className="bg-white shadow-md rounded-lg p-4">
                <img src={product.product_photo} alt={product.product_title} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-semibold">{product.product_title}</h3>
                <p className="text-gray-600">{product.product_category}</p>
                <p className="text-green-600 font-bold mt-2">{product.product_price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ECommerce;
