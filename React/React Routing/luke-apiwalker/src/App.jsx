import React from 'react';
import { Router } from '@reach/router';
import Form from './components/Form';
import Resource from './components/Resource';

const App = () => (
  <>
    <Form />
    <Router>
      <Resource path="/:resource/:id" />
    </Router>
  </>
);

export default App;
