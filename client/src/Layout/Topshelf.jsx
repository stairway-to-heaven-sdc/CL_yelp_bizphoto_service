import React from 'react';
import Biztop from './Biztop';
import Bizsub from './Bizsub';
import './Topshelf.css';

const Topshelf = () => (
  <div className="topshelf">
    <div className="content-container">
      <Biztop />
      <Bizsub />
    </div>
  </div>
);

export default Topshelf;
