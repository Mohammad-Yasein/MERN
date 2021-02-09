import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import ProductInfo from './views/ProductInfo';

const App = () => (
  <Router>
    <Main path="/products" />
    <ProductInfo path="/products/:id" />
  </Router>
);

export default App;
