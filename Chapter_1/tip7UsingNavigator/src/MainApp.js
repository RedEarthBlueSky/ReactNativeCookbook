import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Detail from './DetailScreen';
import Home from './HomeScreen';
import Contact from './ContactUs';

const MainApp = createStackNavigator({
  Home,    // Home: Home destructured,
  Detail,    // Detail: Detail destructured,
  Contact,      // Contact: Contact destructured
});

const styles = StyleSheet.create({

});

export default MainApp;
