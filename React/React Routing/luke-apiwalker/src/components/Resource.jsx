import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Resource = props => {
  const [resource, setResource] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/${props.resource}/${props.id}`)
      .then(response => {
        setResource(response.data);
        setError('');
      })
      .catch(error => {
        setResource({});
        setError(error);
      });
  }, [props.resource, props.id]);

  return (
    <>
      {resource && !error ? (
        Object.entries(resource).map(([key, value]) => {
          return key === 'name' ? (
            <h1 key={key} className="mb-4">
              {value}
            </h1>
          ) : (
            <p key={key}>
              <span className="font-weight-bold">{key}: </span>
              {value}
            </p>
          );
        })
      ) : (
        <h2 className="text-danger">These aren't the droids you're looking for</h2>
      )}
    </>
  );
};

export default Resource;
