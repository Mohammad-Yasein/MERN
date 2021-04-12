import React, { useState } from 'react';

import RegistrationForm from './components/RegistrationForm';
import SignInForm from './components/SignInForm';
import BooksList from './components/BooksList';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [form, setForm] = useState('register');

  const displayForm = form => setForm(form);
  const changeAuth = bool => setIsAuth(bool);

  return (
    <>
      {isAuth ? (
        <BooksList changeAuth={changeAuth} />
      ) : form == 'register' ? (
        <RegistrationForm changeAuth={changeAuth} displayForm={displayForm} />
      ) : (
        <SignInForm changeAuth={changeAuth} displayForm={displayForm} />
      )}
    </>
  );
};

export default App;
