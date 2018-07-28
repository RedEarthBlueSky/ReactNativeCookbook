import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Button from './Button';

class MainApp extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>Ch 3: Tip 5 - Button Loading </Text>
        <Button />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0859db',
    marginTop: 20,
  },
});

export default MainApp;
