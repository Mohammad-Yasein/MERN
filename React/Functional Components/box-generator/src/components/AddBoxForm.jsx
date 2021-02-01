import React, { useReducer } from 'react';

const initialState = {
  color: '',
  width: 0,
  height: 0,
};

const reducer = (state, action) => {
  return {
    ...state,
    [action.type]: action.payload,
  };
};

const AddBoxForm = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = e => {
    e.preventDefault();
    props.onAddBox(state);
    e.target[0].value = '';
    e.target[1].value = 0;
    e.target[2].value = 0;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    dispatch({ type: name, payload: value });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-5">
      <div className="form-group">
        <label htmlFor="color">Color</label>
        <input
          type="text"
          name="color"
          id="color"
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="width">Width</label>
        <input
          type="number"
          name="width"
          id="width"
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="height">Height</label>
        <input
          type="number"
          name="height"
          id="height"
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <input type="submit" value="Add Box!" className="btn btn-outline-info px-4 py-2" />
    </form>
  );
};

export default AddBoxForm;
