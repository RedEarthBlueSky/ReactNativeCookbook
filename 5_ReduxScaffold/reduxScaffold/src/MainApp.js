import React from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
} from 'react-native';
//  Provide access to the store for any child component(s)
import { Provider } from 'react-redux';

import store from './redux';
import AppNavigator from './views/AppNavigator';

const instructions = Platform.select({
  ios: 'iOS Specific Build',
  android:
    'Android Specific Build',
});

const MainApp = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Redux Scaffold {instructions}</Text>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    ...Platform.select({
      ios: {
        backgroundColor: 'blue',
        marginTop: 25,
      },
      android: {
        backgroundColor: 'green',
        marginTop: 0,
      },
    }),
  }
});

export default MainApp;
