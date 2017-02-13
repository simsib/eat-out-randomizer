import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App.jsx';
import styles from './styles/main.css';
require('../node_modules//materialize-css/dist/css/materialize.css');
require('../node_modules//materialize-css/dist/js/materialize.js');
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);