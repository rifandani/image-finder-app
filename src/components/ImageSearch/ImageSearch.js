import React from 'react';

import './ImageSearch.css';

const ImageSearch = (props) => (
  <div className="imageSearch">
    <form onSubmit={props.handleMakeRequest} className="imageSearch__form">
      <input
        autoComplete="off"
        name="searchValue"
        type="text"
        placeholder="Cari gambar..."
      />
      <button className="btn-outline-primary">Search</button>
    </form>
  </div>
);

export default ImageSearch;
