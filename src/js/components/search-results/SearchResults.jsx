// third party libraries
import React from 'react';
import PropTypes from 'prop-types';

// custom types
import * as CustomTypes from '../../lib/custom-types.js';

// custom components
import SearchResult from '../search-result/SearchResult.jsx';

export default function SearchResults({ results }) {
  return (
    <div>
      {results.map(res => (
        <SearchResult result={res} />
      ))}
    </div>
  );
}

SearchResults.propTypes = {
  results: PropTypes.arrayOf(CustomTypes.SearchResult)
};
