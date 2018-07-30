import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ContactList from './ContactList';

class MainApp extends Component {
  render() {
    const { toolbar, main, content } = styles;
    return (
      <View style={main}>
        <Text style={toolbar}>Ch 3: Tip6 - List View Remove Items</Text>
      <ContactList style={content} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#2c3e50',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    paddingBottom: 20,
    paddingTop: 20,
    textAlign: 'center',
  },
  main: {
    flex: 1,
  },
  content: {
    padding: 10,
    flex: 1,
  },
});

export default MainApp;
