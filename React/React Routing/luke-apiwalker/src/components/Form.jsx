import React, { useState } from 'react';
import { navigate } from '@reach/router';

const initialInput = { resource: '', id: '' };

const Form = () => {
  const [input, setInput] = useState(initialInput);

  const changeHandler = e => setInput({ ...input, [e.target.name]: e.target.value });
  const submitHandler = e => {
    e.preventDefault();
    navigate(`/${input.resource}/${input.id}`);
  };

  return (
    <form onSubmit={e => submitHandler(e)} className="d-flex mb-5">
      <h5 className="m-0 mr-3">Search for:</h5>
      <select name="resource" onChange={e => changeHandler(e)} className="mr-5 px-4">
        <option value="">Select Resource ...</option>
        <option value="people">People</option>
        <option value="planets">Planets</option>
      </select>
      <h5 className="m-0 mr-3">ID:</h5>
      <input type="number" name="id" onChange={e => changeHandler(e)} className="mr-5" />
      <input type="submit" value="Search" className="btn btn-info px-4 py-1" />
    </form>
  );
};

export default Form;
