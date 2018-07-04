import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Songs from './songs';

class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Welcome Home',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Button
          title='go to Details'
          onPress={() =>
            navigate('Detail', { name: 'Detail Name'})
          }
        />
        <Text>This is the home page Home.js</Text>
      </View>
    );
  }
}

export default HomeScreen;
