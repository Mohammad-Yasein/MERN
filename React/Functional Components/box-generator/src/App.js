import React, { useState } from 'react';
import AddBoxForm from './components/AddBoxForm';
import ShowBoxes from './components/ShowBoxes';

const App = () => {
  const [state, setState] = useState([]);

  const getBox = box => {
    setState([...state, box]);
  };

  return (
    <>
      <AddBoxForm onAddBox={getBox} />
      <ShowBoxes boxes={state} />
    </>
  );
};

export default App;
