import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={props.onPress}
    >
      <Text style={textStyle}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aaf',
    marginLeft: 2,
    marginRight: 2,
    padding: 4,
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '600',
    paddingTop: 6,
    paddingBottom: 6,
  }
});

export { Button };
