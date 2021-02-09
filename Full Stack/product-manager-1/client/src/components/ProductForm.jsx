import React, { useState } from 'react';
import axios from 'axios';

export default () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);

  const onSubmitHandler = e => {
    e.preventDefault();
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
      .catch(error => console.log(error));
  };

  return (
    <form onSubmit={onSubmitHandler}>
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
