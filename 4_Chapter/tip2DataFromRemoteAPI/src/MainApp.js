import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const url = 'https://my-bookmarks-api.herokuapp.com/api/bookmarks';

class MainApp extends Component {
  state = {
    result: '',
  };

  onLoad = async () => {
    this.setState({ result: 'Loading please wait...' });

    const response = await fetch(url, { method: 'GET', });
    const result = await response.text();

    this.setState({ result });
  }

  render() {
    const { result } = this.state;

    return (
        <View style={styles.container}>
          <Text style={styles.title}>Ch 4: Tip 2 - Retrieve Data from Remote API!</Text>
          <TextInput
            style={styles.preview}
            value={result}
            placeholder='Result...'
            editable={false}
            multiline
          />
          <TouchableOpacity
            onPress={this.onLoad}
            style={styles.btn}
          >
            <Text>Load Data</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'blue',
    padding: 10,
  },
  preview: {
    backgroundColor: '#bdc3c7',
    width: 300,
    height: 400,
    padding: 10,
    borderRadius: 5,
    color: '#333',
    marginTop: 20,

  },
  btn: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 3,
    marginTop: 10,
  },
});

export default MainApp;
