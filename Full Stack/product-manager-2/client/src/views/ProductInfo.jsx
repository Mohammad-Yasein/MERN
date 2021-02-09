import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default props => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${props.id}`)
      .then(response => setProduct(response.data.product))
      .catch(error => console.log('SOMETHING WENT WRONG!', error));
  }, []);

  return (
    <div className="text-center">
      <h3>{product.title}</h3>
      <hr className="mb-4" />
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};
