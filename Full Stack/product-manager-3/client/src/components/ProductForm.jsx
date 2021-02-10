import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default props => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);

  const { id, action } = props;

  action == 'update' &&
    useEffect(() => {
      axios
        .get(`http://localhost:8000/api/products/${id}`)
        .then(response => {
          const product = response.data.product;
          setTitle(product.title);
          setDescription(product.description);
          setPrice(product.price);
        })
        .catch(error => console.log('SOMETHING WENT WRONG!', error));
    }, []);

  const onSubmitHandler = e => {
    e.preventDefault();
    if (action == 'create') {
      axios
        .post('http://localhost:8000/api/products/new', {
          title,
          description,
          price,
        })
        .then(response => {
          console.log(response);
          setTitle('');
          setDescription('');
          setPrice(0);
        })
        .catch(error => console.log('SOMETHING WENT WRONG!', error));
    } else if (action == 'update') {
      axios
        .put(`http://localhost:8000/api/products/${id}/edit`, {
          title,
          description,
          price,
        })
        .then(response => console.log(response))
        .catch(error => console.log('SOMETHING WENT WRONG!', error));
    }
  };

  return (
    <form className="mb-5" onSubmit={onSubmitHandler}>
      <h3 className="mb-4">Add New Product:</h3>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          onChange={e => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          className="form-control"
          id="description"
          onChange={e => setDescription(e.target.value)}
          value={description}
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          className="form-control"
          id="price"
          onChange={e => setPrice(e.target.value)}
          value={price}
        />
      </div>
      <input type="submit" className="btn btn-outline-info px-5 py-2" />
    </form>
  );
};
