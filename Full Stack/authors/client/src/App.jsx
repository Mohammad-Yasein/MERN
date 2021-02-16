import React from 'react';
import { Router } from '@reach/router';

import AuthorsList from './components/AuthorsList';
import AuthorForm from './components/AuthorForm';

const App = () => (
  <Router>
    <AuthorsList path="/" />
    <AuthorForm path="/new" action="create" />
    <AuthorForm path="/edit/:id" action="update" />
  </Router>
);

export default App;
