import PropTypes from 'prop-types';

// mini and full size gif
export const SearchResult = PropTypes.shape({
  thumbnail: PropTypes.string.isRequired,
  full: PropTypes.string.isRequired
});
