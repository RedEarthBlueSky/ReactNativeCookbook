import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';

import styles from './styles/app_styles';
import Search from './src/Search';

const instructions = Platform.select({
  ios: 'iOS Specific',
  android:
    'Android Specific',
});

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>React Native!</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Search />
      </View>
    );
  }
}

export default App;
