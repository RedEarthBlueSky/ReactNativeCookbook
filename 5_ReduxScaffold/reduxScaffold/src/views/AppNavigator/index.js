//  Views AppNavigator main file index.js
import React, { Component } from 'react';
import Categories from '../Categories';
import {
        View,
        Text,
        Platform,
        StyleSheet
      } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

class AppNavigator extends Component {

  renderScene(route, navigator) {
    return <Categories navigator={navigator} />;
  }

  render() {
    return (
        <Navigator
          configureScene={(route) => {
            if (Platform.OS === 'android') {
              return Navigator.SceneConfigs.FloatFromBottomAndroid;
            }
            return Navigator.SceneConfigs.FloatFromBottom;
          }}
          initialRoute={{}}
          renderScene={this.renderScene}
        />
    );
  }
}

export default AppNavigator;
