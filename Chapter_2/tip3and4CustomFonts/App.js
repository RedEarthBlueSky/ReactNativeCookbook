/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={[styles.welcome, { fontFamily: 'Roboto-Black' }]}
        >React Native Roboto-Black!</Text>
        <Text
          style={[styles.welcome, { fontFamily: 'Roboto-BlackItalic' }]}
        >React Native Roboto-BlackItalic!</Text>
        <Text
          style={[styles.welcome, { fontFamily: 'Roboto-Bold' }]}
        >React Native Roboto-Bold!</Text>
        <Text
          style={[styles.welcome, { fontFamily: 'Roboto' }]}
        >React Native Roboto!</Text>
        <Text
          style={[styles.welcome, { fontFamily: 'Roboto-LightItalic' }]}
        >React Native Roboto-LightItalic!</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
