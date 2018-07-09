import React, { Component } from 'react';
import { View, Text } from 'react-native'

class Home extends Component {
  static navigationOptions = {
    title: 'Details Page Title',
  };

  render() {
    return (
      <View>
        <Text>This is the Detai screen</Text>
      </View>
    );
  }
}

export default Home;
