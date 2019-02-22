// third party libraries
import React from 'react';
import PropTypes from 'prop-types';

// custom types
import * as CustomTypes from '../../lib/custom-types.js';

export default function SearchResult({ result }) {
  const { thumbnail } = result;

  return <img src={thumbnail} alt="gif-image" />;
}

SearchResult.propTypes = {
  result: CustomTypes.SearchResult.isRequired
};
