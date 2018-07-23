import React from 'react';
import { View, Text } from 'react-native';
import { HeaderStyles } from './styles';

const Header = (props) => {
  const { subTitle, childElement, title, headerStyle } = HeaderStyles;

  return (
    <View style={headerStyle}>
      <Text style={title}>{props.titleText}</Text>
      <Text style={subTitle}>{props.subTitleText}</Text>
      <Text style={childElement}>
        {props.children}
      </Text>
    </View>
  );
};

export { Header };
