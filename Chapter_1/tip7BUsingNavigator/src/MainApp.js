import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import Detail from './Detail';

const MainApp = createStackNavigator(
  {
    Home, //  Home: Home destructure,
    Detail, //  Detail: Detail destructure,
  },
  {
    initialRouteName: 'Home'
  }
);

export default MainApp;