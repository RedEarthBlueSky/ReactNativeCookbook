import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import HTMLView from 'react-native-htmlview';
import data from './data.json';

class MainApp extends Component {
  onLinkPress(url) {
    Alert.alert('Link press', `URL: ${url}`);
  }

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Welcome to the tip 9 HTML Rendering App</Text>
        <ScrollView style={styles.content}>
          <HTMLView
            value={data.content}
            stylesheet={styles}
            onLinkPress={this.onLinkPress}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  title: {
    backgroundColor: '#c0322b',
    color: '#fff',
    padding: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  p: {
    color: '#333',
    fontSize: 16,
  },
  h3: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  a: {
    color: '#c0392b',
    fontWeight: 'normal',
  },
});

export default MainApp;
