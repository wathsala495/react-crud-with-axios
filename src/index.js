import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import AppRouter from './AppRouter';
import './index.css'

ReactDOM.render(
  <Router>
    <AppRouter />

  </Router>,
  document.getElementById('root')
);
