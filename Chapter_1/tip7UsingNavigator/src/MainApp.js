import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Detail from './DetailScreen';
import Home from './HomeScreen';

const MainApp =  createStackNavigator({
  Home: Home ,
  Detail: Detail,
});

const styles = StyleSheet.create({

});

export default MainApp;
