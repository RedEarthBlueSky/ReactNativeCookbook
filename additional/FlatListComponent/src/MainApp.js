import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

class MainApp extends Component {
  render() {
    return (
      <View>
        <Text style={styles.textStyle}>
          App to demo FlatList Component
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default MainApp;
