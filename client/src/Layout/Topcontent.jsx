import React from 'react';
import Button from '../Button/Button';
import Searchbar from '../Searchbar/Searchbar';
import './Topcontent.css';

const Topcontent = () => (
  <div className="content-container">
    <div className="middle-wrapper">
      <Button />
      <Searchbar />
    </div>
  </div>

);

export default Topcontent;
