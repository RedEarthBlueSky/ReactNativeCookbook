import React, { Component } from 'react';
import { StyleSheet, View, Image, Text,
          ScrollView, TouchableHighLight } from 'react-native';

class DetailScreen extends Component {
  static navigationOptions = {
    title: 'Details Page',
  };
  
  render() {
    return (
      <View>
        <Text>this is the detail page Detail.js</Text>
      </View>
    );
  }
}

export default DetailScreen;
