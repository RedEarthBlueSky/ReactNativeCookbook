import React from 'react';
import { View } from 'react-native';

import { WrapperStyles } from './styles';

const Section = (props) => {
  const { sectionContainer } = WrapperStyles;

  return (
    <View style={sectionContainer}>
      {props.children}
    </View>
  );
};

export { Section };
