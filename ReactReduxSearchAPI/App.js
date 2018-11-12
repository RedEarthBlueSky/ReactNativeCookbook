import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';

import styles from './styles/app_styles';
import { Search, NotesMain } from './src/features';

const instructions = Platform.select({
  ios: 'iOS Specific.',
  android:
    'Android Specific.',
});

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>React Native: {instructions}</Text>
        <Search />
        <NotesMain />
      </View>
    );
  }
}

export default App;
