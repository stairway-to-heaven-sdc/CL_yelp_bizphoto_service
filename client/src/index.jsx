import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import AppProvider from './context/index';

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('app'),
);
