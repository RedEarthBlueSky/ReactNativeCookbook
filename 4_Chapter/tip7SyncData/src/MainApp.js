import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  NetInfo,
  StyleSheet,
} from 'react-native'

class MainApp extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>Chapter 4 Tip 7 - Sync Data</Text>
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
    marginTop: 20,
    padding: 10,
  },
});

export default MainApp;
