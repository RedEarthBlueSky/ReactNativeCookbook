//  component is the top level wrapper for all content
import React from 'react';
import { View } from 'react-native';
import { WrapperStyles } from './styles';

const Wrapper = (props) => {
  const { wrapperContainer } = WrapperStyles;

  return (
    <View style={wrapperContainer}>
      {props.children}
    </View>
  );
};

export { Wrapper };
