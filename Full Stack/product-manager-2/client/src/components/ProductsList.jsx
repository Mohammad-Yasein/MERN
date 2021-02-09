import React from 'react';
import { Link } from '@reach/router';

export default props => {
  const { products } = props.data;

  return (
    <div className="text-center p-5">
      <h3>All Products</h3>
      <hr className="mb-4" />
      {products.map((product, idx) => {
        return (
          <Link to={`/products/${product._id}`} className="d-block mb-3" key={idx}>
            {product.title}
          </Link>
        );
      })}
    </div>
  );
};
