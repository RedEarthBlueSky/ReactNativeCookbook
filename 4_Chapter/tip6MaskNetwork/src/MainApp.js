import React, { PureComponent } from 'react';
import {
  NetInfo,
  StyleSheet,
  Text,
  View
} from 'react-native';

class MainApp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      online: null,
      offline: null,
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>Chapter 4 Tip 6 - Mask a Network</Text>
        <Text></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: 'blue',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    padding: 10,
  }
});

export default MainApp;
