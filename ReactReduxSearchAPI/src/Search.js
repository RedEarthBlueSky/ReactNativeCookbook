import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Axios from 'axios';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      setBooks: [],
      setQuery: '',
    };
  }


  render() {
    return (
      <View>
        <Text>This is the Seach feature</Text>
      </View>
    );
  }
}

export default Search;
