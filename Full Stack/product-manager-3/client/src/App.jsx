import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import ProductInfo from './views/ProductInfo';
import UpdateProduct from './views/UpdateProduct';

const App = () => (
  <Router>
    <Main path="/products" />
    <ProductInfo path="/products/:id" />
    <UpdateProduct path="/products/:id/edit" />
  </Router>
);

export default App;
