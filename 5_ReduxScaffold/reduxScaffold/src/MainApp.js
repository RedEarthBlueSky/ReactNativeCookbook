import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
} from 'react-native';

const instructions = Platform.select({
  ios: 'iOS Specific',
  android:
    'Android Specific',
});

class MainApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Redux Scaffold {instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    marginTop: 30,
    ...Platform.select({
      ios: {
        backgroundColor: 'blue',
      },
      android: {
        backgroundColor: 'green',
      },
    }),
  }
});

export default MainApp;
