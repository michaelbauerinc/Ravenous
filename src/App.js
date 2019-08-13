import React, { Component } from 'react';
import './App.css';
import BusinessList from './Components/BusinessList/businessList.js';
import SearchBar from './Components/SearchBar/searchbar.js';
import Yelp from './util/Yelp';



class App extends React.Component {

  constructor(props) {
  super(props);

  this.state = {
    businesses: [],
  };

  this.searchYelp = this.searchYelp.bind(this);
  }


  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then((businesses) => {
      console.log(location)
      this.setState({ businesses: businesses});
    });
  }


  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
            <SearchBar searchYelp={this.searchYelp}/>
            <BusinessList businesses={this.state.businesses}/>
      </div>
    )
  }
}

export default App;
