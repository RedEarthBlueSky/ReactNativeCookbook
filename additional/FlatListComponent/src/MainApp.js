import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FlatListDemo from './FlatListDemo';


class MainApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          App to demo FlatList Component
        </Text>
        <FlatListDemo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default MainApp;
