import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles/styles';

const Header = (props) => {
  const { subTitle, childElement, title, headerStyle } = styles;

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
