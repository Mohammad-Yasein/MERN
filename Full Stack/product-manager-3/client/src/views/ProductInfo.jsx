import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

export default props => {
  const [product, setProduct] = useState({});

  const onClickHandler = productId => {
    axios
      .delete(`http://localhost:8000/api/products/${productId}/delete`)
      .then(navigate('/products'))
      .catch(error => console.log('SOMETHING WENT WRONG!', error));
  };

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
      <p>Description: {product.description}</p>
      <p>Price: ${product.price}</p>
      <Link to={`/products/${product._id}/edit`} className="btn btn-outline-success mr-4 px-5 py-2">
        Update
      </Link>
      <button className="btn btn-outline-danger px-5 py-2" onClick={() => onClickHandler(product._id)}>
        Delete
      </button>
    </div>
  );
};
