import React, { Component } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from 'react-native-button';

class MainApp extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isDisabled: false,
    };
  }
  handlePress() {
    this.setState({
      isDisabled: true,
    });
    console.log('Now Button Disabled!');
  }

  render() {
    const { isDisabled } = this.state;

    return (
      <View>
        <Text style={styles.title}>
          Chapter 6: Why iOS & not React Native.
        </Text>
        <Button
          disabled={isDisabled}
          style={styles.button}
          styleDisabled={{ color: 'red' }}
          onPress={() => this.handlePress()}
        >
          Press Me!
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: 'blue',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30,
    padding: 10,
  },
  button: {
    marginTop: 20,
    padding: 10,
    height: 45,
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: 'aqua',
  }
});

export default MainApp;
