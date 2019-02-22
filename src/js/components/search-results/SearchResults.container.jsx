// redux libraries
import { connect } from 'react-redux';

// child component (dumb)
import SearchResults from './SearchResults.jsx';

function mapStateToProps(state) {
  return {
    results: state.search.results
  };
}

export default connect(mapStateToProps)(SearchResults);
