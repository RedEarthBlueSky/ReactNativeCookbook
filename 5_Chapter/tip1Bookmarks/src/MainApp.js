import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  StyleSheet,
  View,
} from 'react-native';
import store from './redux';
import AppNavigator from './views/AppNavigator';

class MainApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainApp;
