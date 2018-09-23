/* eslint react/jsx-filename-extension: "off" */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import '../src/styles/test.css';

ReactDOM.render((
<BrowserRouter>
      <App />
    </BrowserRouter>
), document.getElementById('app'));

