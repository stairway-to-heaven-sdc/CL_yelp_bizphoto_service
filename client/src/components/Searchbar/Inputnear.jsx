import React from 'react';

const Inputnear = () => (
  <div className="grid_unit main-search_search-field-grid">
    <div className="main-search_suggestions-field search-field-container">
      <label className="main-search_pseudo-input main-search_pseudo-input--near pseudo-input main-search_pseudo-input--action">
        <span className="pseudo-input_text">Near</span>
        <span className="main-search_field-holder pseudo-input_field-holder">
          <input
            className="main-search_field pseudo-input_field inputTwo"
            maxLength="80"
            id="input_near"
            // tabIndex="2"
            autoComplete="off"
            value="Houston, TX"
            placeholder="address, neighborhood, city, state or zip"
          />
          <input
            type="hidden"
            maxLength="80"
            name="find_loc"
            value="Houston, TX"
          />
          <input
            type="hidden"
            name="tx"
            value="1"
          />
        </span>
      </label>
    </div>
  </div>
);

export default Inputnear;
