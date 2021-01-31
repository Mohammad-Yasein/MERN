import React, { useState } from 'react';

const UserForm = () => {
  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastName, setLastName] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleChange = e => {
    switch (e.target.name) {
      case 'firstName':
        {
          const firstName = e.target.value;
          setFirstName(firstName);
          if (firstName.length == 0 || firstName.length >= 2) {
            setFirstNameError('');
          } else {
            setFirstNameError('FIRST NAME MUST BE AT LEAST 2 CHARACTERS!');
          }
        }
        break;
      case 'lastName':
        {
          const lastName = e.target.value;
          setLastName(lastName);
          if (lastName.length == 0 || lastName.length >= 2) {
            setLastNameError('');
          } else {
            setLastNameError('LAST NAME MUST BE AT LEAST 2 CHARACTERS!');
          }
        }
        break;
      case 'email':
        {
          const email = e.target.value;
          setEmail(email);
          if (email.length == 0 || email.length >= 5) {
            setEmailError('');
          } else {
            setEmailError('EMAIL MUST BE AT LEAST 5 CHARACTERS!');
          }
        }
        break;
      case 'password':
        {
          const password = e.target.value;
          setPassword(password);
          if (password.length == 0 || password.length >= 8) {
            setPasswordError('');
          } else {
            setPasswordError('PASSWORD MUST BE AT LEAST 8 CHARACTERS!');
          }
        }
        break;
      case 'confirmPassword':
        {
          const confirmPassword = e.target.value;
          setConfirmPassword(confirmPassword);
          if (confirmPassword.length == 0 || confirmPassword == password) {
            setConfirmPasswordError('');
          } else {
            setConfirmPasswordError('PASSWORD & PASSWORD CONFIRMATION MUST MATCH!');
          }
        }
        break;
      default:
        console.log('Invalid Input!');
    }
  };

  return (
    <>
      <h3 className="text-center">Form</h3>
      <form action="" className="mb-5">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={handleChange}
            className="form-control"
          />
          {firstNameError ? <p className="text-danger">{firstNameError}</p> : ''}
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={handleChange}
            className="form-control"
          />
          {lastNameError ? <p className="text-danger">{lastNameError}</p> : ''}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            className="form-control"
          />
          {emailError ? <p className="text-danger">{emailError}</p> : ''}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            className="form-control"
          />
          {passwordError ? <p className="text-danger">{passwordError}</p> : ''}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            onChange={handleChange}
            className="form-control"
          />
          {confirmPasswordError ? <p className="text-danger">{confirmPasswordError}</p> : ''}
        </div>
      </form>
    </>
  );
};

export default UserForm;
