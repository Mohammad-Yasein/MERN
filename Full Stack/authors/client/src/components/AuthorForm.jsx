import React, { useState, useEffect } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';

export default props => {
  const { id, action } = props;

  const [pageTitle, setPageTitle] = useState('');
  const [name, setName] = useState('');
  const [errors, setErrors] = useState([]);

  const onSubmitHandler = e => {
    e.preventDefault();

    if (action == 'create') {
      axios
        .post('http://localhost:8000/api/authors', { name })
        .then(response => {
          console.log(response.data);
          navigate('/');
        })
        .catch(error => {
          const errorResponse = error.response.data.errors;
          const errorList = [];
          console.log(errorResponse);

          for (const key of Object.keys(errorResponse)) {
            errorList.push(errorResponse[key].message);
          }
          setErrors(errorList);
        });
    } else if (action == 'update') {
      axios
        .put(`http://localhost:8000/api/authors/${id}`, { name })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          const errorResponse = error.response.data.errors;
          const errorList = [];
          console.log(errorResponse);

          for (const key of Object.keys(errorResponse)) {
            errorList.push(errorResponse[key].message);
          }
          setErrors(errorList);
        });
    }
  };

  useEffect(() => {
    const title = action == 'create' ? 'Add New Author' : 'Update Author';
    setPageTitle(() => {
      document.title = title;
      return title;
    });
  }, []);

  action == 'update' &&
    useEffect(() => {
      axios
        .get(`http://localhost:8000/api/authors/${id}`)
        .then(response => {
          console.log(response.data);
          setName(response.data.name);
        })
        .catch(error => {
          console.log(error.response.data);
          setErrors(["We're sorry, but we could not find the author you are looking for."]);
        });
    }, []);

  if (action == 'update' && errors.length > 0) {
    document.title = 'Page Not Found';

    return (
      <h3>
        {errors[0]} <Link to="/new">Would you like to add this author to our database?</Link>
      </h3>
    );
  }

  return (
    <>
      <div className="d-flex justify-content-between mb-4">
        <h3>{pageTitle}</h3>
        <Link to="/">Home</Link>
      </div>
      {errors.length > 0 && (
        <div className="mb-4">
          {errors.map((error, idx) => (
            <div className="alert alert-danger" role="alert" key={idx}>
              {error}
            </div>
          ))}
        </div>
      )}
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="name">Author Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </div>
        <button
          type="button"
          className="btn btn-outline-warning mr-4 px-5 py-2"
          onClick={() => navigate('/')}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-outline-info px-5 py-2">
          Submit
        </button>
      </form>
    </>
  );
};
