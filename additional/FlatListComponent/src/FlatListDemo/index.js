import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

class FlatListDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,  // track if content currently loading
      data: [],        // store the response from the randomuser server
      page: 1,         // variable used request to randomuser generator, page of data we want
      seed: 1,         // variable as page, specify what data we want back
      error: null,     // hold error if we get one while making request
      refreshing: false,  // are we currently making a refresh request or not
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    //  remote request to random user generator api to get the data to populate our app
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });
    fetch(url)  // fetch is used to grap a chunk of static data rather than connect to an API
      .then(response => response.json())
      .then(response => {
        this.setState({
          data: page === 1 ? response.results : [...this.state.data, ...response.results],
          error: response.error || null,
          loading: false,
          refreshing: false,
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };


  render() {
    return (
      <View>
        <Text>This is my FlatList Demo</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

export default FlatListDemo;
