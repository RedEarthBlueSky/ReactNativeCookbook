import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class MainApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Chapter5 Redux: Tip1 Bookmarks!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    backgroundColor: 'blue',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
    marginTop: 30,
  },
});

export default MainApp;
