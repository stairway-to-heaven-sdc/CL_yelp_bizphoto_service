import React from 'react';
import ReactDOM from 'react-dom';
import Biz from './components/Biz';
import AppProvider from './context/index';

ReactDOM.render(
  <AppProvider>
    <Biz />
  </AppProvider>,
  document.getElementById('Biz'),
);
