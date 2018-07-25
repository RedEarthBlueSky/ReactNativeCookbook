import React, { Component } from 'react';
import { Animated, View, Text, Easing, Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');
const cloudImage = require('./images/cloudy.png');

const imageWidth = 180;

class MainApp extends Component {
  componentWillMount() {
    this.animatedValue = new Animated.Value();
  }

  componentDidMount() {
    this.startAnimation();
  }

  startAnimation() {
    this.animatedValue.setValue(width);
    Animated.timing(
      this.animatedValue,
      {
        toValue: -imageWidth,
        duration: 9000,
        easing: Easing.linear,
      }
    ).start(() => this.startAnimation());  // create infinite loop for the animation
  }

  render() {
    return (
      <View>
        <Text>Welcome to Chapter3 Tip1 Simple Animations!</Text>
        <Animated.Image
          style={[
            styles.image,
            { left: this.animatedValue },
          ]}
          source={cloudImage}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: imageWidth,
    position: 'absolute',
    top: height / 3,
    width: imageWidth,
  },
});

export default MainApp;
