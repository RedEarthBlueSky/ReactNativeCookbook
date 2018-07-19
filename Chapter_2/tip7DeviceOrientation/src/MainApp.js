import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MainApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orientation: null,
      loading: true,
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>This is the device orientation app</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
  }
});

export default MainApp;
