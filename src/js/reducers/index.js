// redux libraries
import { combineReducers } from 'redux';

// custom reducer
import searchReducer from './search.js';

// combining reducers with different actions (returns function)
export default combineReducers({
  search: searchReducer
});
