import React, { useState } from 'react';
import axios from 'axios';

export default props => {
  const { changeAuth, displayForm } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onSubmitHandler = e => {
    e.preventDefault();

    axios
      .post('http://localhost:8000/api/login', { email, password }, { withCredentials: true })
      .then(response => {
        console.log(response.data);
        setError('');
        changeAuth(true);
      })
      .catch(error => {
        console.log(error.response.data);
        setError('INVALID EMAIL OR PASSWORD!');
        changeAuth(false);
      });
  };

  return (
    <>
      {error && (
        <div className="alert alert-danger mb-4" role="alert">
          {error}
        </div>
      )}
      <form onSubmit={e => onSubmitHandler(e)}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="text" className="form-control" id="email" onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <span className="text-muted">Not registered yet? </span>
          <button type="button" className="btn btn-link p-0" onClick={() => displayForm('register')}>
            register now
          </button>
        </div>
        <button type="submit" className="btn btn-outline-info px-5 py-2">
          Submit
        </button>
      </form>
    </>
  );
};
