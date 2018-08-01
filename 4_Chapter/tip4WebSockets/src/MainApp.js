import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';

const { width } = Dimensions.get('window');

class MainApp extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>Ch4 Tip4 - Web Sockets Real Time comms! </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'blue',
    padding: 10,
    marginTop: 30,
  }
});

export default MainApp;
