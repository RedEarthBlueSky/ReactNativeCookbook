import React, { Component } from 'react';
import {
  ActivityIndicator,
  LayoutAnimation,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

const { any, bool, func, string } = PropTypes;

class Button extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>This is the button component!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  }
});

export default Button;
