import React from 'react';
import Submit from '../Button/Submit';
import Inputfield from './Inputfield';

const classFind = 'main-search_pseudo-input main-search_pseudo-input--find pseudo-input';
const classNear = 'main-search_pseudo-input pseudo-input';

const Searchbar = () => (
  <div className="main-search-wrap grid_unit grid_unit--fill align-middle">
    <form className="main-search l-form u-space-b20">
      <div className="grid">
        <div className="grid_unit grid_unit--fill">
          <div className="grid grid--equal">
            <Inputfield name="find_desc" phr="tacos, cheap dinner, Max’s" text="Find" className={classFind} />
            <Inputfield name="find_loc" phr="Houston, TX" text="Near" className={classNear} />
          </div>
        </div>
        <div className="grid_unit main-search_action">
          <Submit />
        </div>
      </div>
    </form>
  </div>

);

export default Searchbar;
