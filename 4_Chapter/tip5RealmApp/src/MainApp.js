import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import Realm from 'realm';
// import Button from 'react-native-button';

class MainApp extends Component {

  componentWillMount() {
    const realm = this.realm = new Realm({
      schema: [
        {
          name: 'user',
          properties: {
            firstName: 'string',
            lastName: 'string',
            email: 'string',
          },
        }
      ]
    });
    this.setState({ users: realm.objects('User') });
  }

  realm: undefined

  

  render() {
    return (
      <View>
        <Text style={styles.title}>Ch4 Tip5 Realm Database App</Text>
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
    marginTop: 30,
    padding: 10,
  },
});

export default MainApp;
