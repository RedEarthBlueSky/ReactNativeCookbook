import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
} from 'react-native';

const instructions = Platform.select({
  ios: 'iOS Specific Build',
  android:
    'Android Specific Build',
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
    ...Platform.select({
      ios: {
        backgroundColor: 'blue',
        marginTop: 25,
      },
      android: {
        backgroundColor: 'green',
        marginTop: 0,
      },
    }),
  }
});

export default MainApp;
