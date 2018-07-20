//  component is the top level wrapper for all content
import React from 'react';
import { View } from 'react-native';
import styles from './styles/styles';

const Wrapper = (props) => {
  const { wrapper } = styles;

  return (
    <View style={wrapper}>
      {props.children}
    </View>
  );
};

export { Wrapper };
