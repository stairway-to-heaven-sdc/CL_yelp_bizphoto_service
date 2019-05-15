import React from 'react';
import Topbar from './Layout/Topbar';
import Topshelf from './Layout/Topshelf';
import './app.css';

const App = () => (
  <div className="biz-detail">
    <Topbar />
    <div className="main-content-wrap--full">
      <Topshelf />
    </div>
  </div>
);

export default App;
