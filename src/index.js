import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';
import styles from './styles/main.css';
// import materializecss from '../node_modules/materialize-css/dist/css/materialize.css';
// import materializejs from '../node_modules/materialize-css/dist/js/materialize.js';
require('../node_modules//materialize-css/dist/css/materialize.css');
require('../node_modules//materialize-css/dist/js/materialize.js');
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);