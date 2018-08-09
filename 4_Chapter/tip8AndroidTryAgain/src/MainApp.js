import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MainApp extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>Chapter 4:  Tip 4 - Android Login Facebook App</Text>
      <Text style={styles.bodyText}>Trying Android again because
        it completely failed last app</Text>
        {/* <Text style={styles.bodyText}>https://medium.com/@suv.brahma/facebook-login-with-react-native-for-ios-f97ff6faf6bc</Text> */}
    </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: 'blue',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 30,
    padding: 10,
  },
  bodyText: {
    margin: 10,
  },
});

export default MainApp;
