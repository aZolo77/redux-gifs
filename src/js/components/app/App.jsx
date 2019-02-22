// third party libraries
import React, { Component } from 'react';

// components
import SearchForm from '../search-form/SearchForm.jsx';
import SearchResults from '../search-results/SearchResults.container.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchForm onSearchSubmitted={term => console.log(term)} />
        <SearchResults />
      </div>
    );
  }
}
