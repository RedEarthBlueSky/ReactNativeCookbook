import React, { Component } from 'react';
import { View, Animated, Image, Easing, Dimensions, StyleSheet, Text } from 'react-native';

const { width, height } = Dimensions.get('window');
const cloudImage = require('./images/cloud.png');
const cloudsImage = require('./images/cloudy.png');
const planeImage = require('./images/transport.png');

const cloudWidth = 60;

class MainApp extends Component {
  componentWillMount() {
    this.animatedValue = new Animated.Value();
  }

  componentDidMount() {
    this.startAnimation();
  }

  startAnimation() {
    this.animatedValue.setValue(1);
    Animated.timing(
      this.animatedValue,
      {
        toValue: 0,
        duration: 6000,
        easing: Easing.linear,
      }
    ).start(() => this.startAnimation());
  }
  render() {
    const left1 = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-cloudWidth, width]
    });

    const left2 = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-cloudWidth * 5, width + (cloudWidth * 5)],
    });

    return (
      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'red' }}>
          Chapter 3, Tip 2: Multiple Animations
        </Text>
      </View>
    );
  }
}

styles = StyleSheet.create({
  // something here
});

export default MainApp;
