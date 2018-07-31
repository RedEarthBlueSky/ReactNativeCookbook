import React, { PureComponent } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const endpoint = 'https://my-bookmarks-api.herokuapp.com/api/bookmarks';

class MainApp extends PureComponent {

  state = {
    result: '',
    title: '',
    url: '',
  };

  render() {
    return (
      <View>
        <Text style={styles.title}>Ch 4: Tip 3 - Post Data to a remote API</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'blue',
    marginTop: 30,
    padding: 10,
  },
});

export default MainApp;
