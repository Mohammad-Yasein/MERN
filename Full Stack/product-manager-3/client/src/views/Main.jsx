import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductsList from '../components/ProductsList';

export default () => {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const removeProduct = productId => setProducts(products.filter(product => product._id != productId));

  useEffect(() => {
    setTimeout(() => {
      axios
        .get('http://localhost:8000/api/products')
        .then(response => {
          setProducts(response.data);
          setIsLoaded(true);
        })
        .catch(error => console.log('SOMETHING WENT WRONG!', error));
    }, 1000);
  }, [products]);

  return (
    <>
      <ProductForm action="create" />
      {isLoaded ? (
        <ProductsList data={products} removeProduct={removeProduct} />
      ) : (
        <div className="text-center pt-5">
          <div className="spinner-border text-info" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
};
