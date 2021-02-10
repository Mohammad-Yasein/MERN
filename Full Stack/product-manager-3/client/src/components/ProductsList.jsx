import React from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

export default props => {
  const { data, removeProduct } = props;

  const onClickHandler = productId => {
    axios
      .delete(`http://localhost:8000/api/products/${productId}/delete`)
      .then(() => removeProduct(productId))
      .catch(error => console.log('SOMETHING WENT WRONG!', error));
  };

  return (
    <div className="text-center p-5">
      <h3>All Products</h3>
      <hr className="mb-4" />
      {data.products.map((product, idx) => {
        return (
          <div className="mb-3" key={idx}>
            <Link to={`/products/${product._id}`} className="mr-4 px-5 py-2">
              {product.title}
            </Link>
            <button className="btn btn-outline-danger px-5 py-2" onClick={() => onClickHandler(product._id)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
