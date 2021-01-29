import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PersonCard from './PersonCard';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <PersonCard firstName="Jane" lastName="Doe" age="45" hairColor="Black" />
    <PersonCard firstName="John" lastName="Smith" age="88" hairColor="Brown" />
    <PersonCard firstName="Millard" lastName="Fillmore" age="50" hairColor="Brown" />
    <PersonCard firstName="Maria" lastName="Smith" age="62" hairColor="Brown" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
