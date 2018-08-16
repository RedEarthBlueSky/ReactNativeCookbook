import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import Categories from '../Categories';

class AppNavigator extends Component {

  renderScene(route, navigator) {
    return <Categories navigator={navigator} />;
  }

  render() {
    return (
      <Navigator
        style={styles.container}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppNavigator;
