export const SEARCH_PERFORMED = 'SEARCH_PERFORMED';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_ERROR = 'SEARCH_ERROR';

export const searchError = () => ({ type: SEARCH_ERROR });

export const searchSuccess = resArr => ({
  type: SEARCH_SUCCESS,
  results: resArr
});

export const searchPerformed = searchTerm => ({
  type: SEARCH_PERFORMED,
  searchTerm
});
