import React from 'react';

const Inputfind = () => (

  <div className="grid_unit main-search_search-field-grid">
    <div className="main-search_suggestions-field search-field-container">
      <label className="main-search_pseudo-input main-search_pseudo-input--find pseudo-input" htmlFor="find_desc">
        <span className="pseudo-input_text">Find</span>
        <span className="pseudo-input_field-holder" style={{ position: 'relative', display: 'block' }}>
          <input className="inputOne" tabIndex="-1" disabled autoComplete="off" spellCheck="false" />
          <input
            className="main-search_field pseudo-input_field inputTwo"
            maxLength="64"
            id="find_desc"
            autoComplete="off"
            placeholder="tacos, cheap dinner, Max’s"
          />
          <input
            type="hidden"
            maxLength="64"
            name="find_desc"
            value
          />
        </span>
      </label>
    </div>
  </div>
);

export default Inputfind;
