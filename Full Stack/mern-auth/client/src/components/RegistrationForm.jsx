import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default props => {
  const { changeAuth, displayForm } = props;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [countries, setCountries] = useState([]);
  const [errors, setErrors] = useState([]);

  const onSubmitHandler = e => {
    e.preventDefault();

    axios
      .post(
        'http://localhost:8000/api/register',
        { firstName, lastName, email, password, country },
        { withCredentials: true }
      )
      .then(response => {
        console.log(response.data);
        setErrors([]);
        changeAuth(true);
      })
      .catch(error => {
        const errorResponse = error.response.data.errors;
        const errorList = [];

        for (const key of Object.keys(errorResponse)) {
          errorList.push(errorResponse[key].message);
        }
        setErrors(errorList);
        changeAuth(false);
      });
  };

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/countries')
      .then(response => {
        console.log(response.data);
        setCountries(response.data);
      })
      .catch(error => error.response.data);
  }, []);

  return (
    <>
      {errors.length > 0 && (
        <div className="mb-4">
          {errors.map((error, idx) => (
            <div className="alert alert-danger" role="alert" key={idx}>
              {error}
            </div>
          ))}
        </div>
      )}
      <form onSubmit={e => onSubmitHandler(e)}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            onChange={e => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            onChange={e => setLastName(e.target.value)}
          />
        </div>
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
          <label htmlFor="country">Country:</label>
          <select className="form-control" id="country" onChange={e => setCountry(e.target.value)}>
            <option value="">select your country ...</option>
            {countries.length > 0 &&
              countries.map((country, idx) => (
                <option key={idx} value={country.name}>
                  {country.name}
                </option>
              ))}
          </select>
        </div>
        <div className="form-group">
          <span className="text-muted">Already registered? </span>
          <button type="button" className="btn btn-link p-0" onClick={() => displayForm('login')}>
            login now
          </button>
        </div>
        <button type="submit" className="btn btn-outline-info px-5 py-2">
          Submit
        </button>
      </form>
    </>
  );
};
