// third party libraries
import React from 'react';
import PropTypes from 'prop-types';

export default function SearchForm({ onSearchSubmitted }) {
  let searchField = null;

  const submitSearchValue = e => {
    e.preventDefault();
    onSearchSubmitted(searchField.value);
  };

  return (
    <form onSubmit={submitSearchValue}>
      <input
        type="text"
        placeholder="Find me giphys.."
        ref={elem => (searchField = elem)}
      />
      <input type="submit" value="Search" />
    </form>
  );
}

SearchForm.propTypes = {
  onSearchSubmitted: PropTypes.func.isRequired
};
