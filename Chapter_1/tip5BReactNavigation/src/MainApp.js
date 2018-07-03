import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const homeIcon = require('./images/home.png');
const favIcon = require('./images/star.png');
const blogIcon = require('./images/notebook.png');
const profileIcon = require('./images/user.png');

class MainApp extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>This is the Home Screen</Text>
        <Image source={homeIcon} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default createStackNavigator({
  
});
