import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { data } from 'helpers/utils';
const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        'https://65cc9d71dd519126b83f161f.mockapi.io/api/v1/products'
      );

      // Memotong array hasil response menjadi 14 data
      const limitedData = response.data.slice(0, 14);

      // Menetapkan data yang telah dipotong ke state
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };
  // belum dipakai karna masih menggunakan data di utuls bukan data dari API
  const getProductById = async (id) => {
    try {
      const response = await axios.get(
        `https://65cc9d71dd519126b83f161f.mockapi.io/api/v1/products/${id}`
      );

      // Memotong array hasil response menjadi 14 data
      setProduct(response.data);
      // Your code
    } catch (err) {
      // Your code
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        product,
        getProductById,
        setProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
