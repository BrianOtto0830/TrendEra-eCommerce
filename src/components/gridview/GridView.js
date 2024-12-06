import React, { useState } from 'react';
import Product from '../products/Product';
import './gridview.css';

const GridView = ({ products }) => {
  const productsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = products.slice(startIndex, endIndex);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="gridview-container">
      <div className="products-container">
        {displayedProducts.map((item) => (
          <Product
            key={item.id}
            image={`https://qhsdnskiusrydliavrxp.supabase.co/storage/v1/object/public/images/${item.images[0]}`}
            name={item.name}
            id={item.id}
            price={item.price}
          />
        ))}
      </div>
      <div className="pagination-container">
        <button
          className="pagination-button"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="pagination-info">
          Page <strong>{currentPage}</strong> of {totalPages}
        </span>
        <button
          className="pagination-button"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
  
};

export default GridView;
