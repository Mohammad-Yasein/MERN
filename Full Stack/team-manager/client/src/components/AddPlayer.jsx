import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

export default () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [status, setStatus] = useState('undecided');
  const [errors, setErrors] = useState([]);

  const handleValidation = e => {
    const input = e.target.value;
    const nameError = 'PLAYER NAME MUST BE AT LEAST 2 CHARACTERS LONG!';
    if (input.length < 2) {
      !errors.includes(nameError) && errors.push(nameError);
    } else {
      setErrors(errors.filter(error => error != nameError));
    }
  };

  const onSubmitHandler = e => {
    e.preventDefault();

    axios
      .post('http://localhost:8000/api/players', { name, position, status })
      .then(response => {
        console.log(response.data);
        navigate('/players/list');
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
  };

  useEffect(() => {
    document.title = 'Add Player';
  }, []);

  return (
    <form onSubmit={onSubmitHandler}>
      {errors.length > 0 && (
        <div className="mb-4">
          {errors.map((error, idx) => (
            <div className="alert alert-danger" role="alert" key={idx}>
              {error}
            </div>
          ))}
        </div>
      )}
      <div className="form-group">
        <label htmlFor="name">Player Name:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          onChange={e => {
            setName(e.target.value);
            handleValidation(e);
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="position">Preferred Position:</label>
        <input
          type="text"
          className="form-control"
          id="position"
          onChange={e => setPosition(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-outline-success px-5 py-2">
        ADD
      </button>
    </form>
  );
};
