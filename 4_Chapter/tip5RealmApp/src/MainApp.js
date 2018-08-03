import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import Realm from 'realm';
import Button from 'react-native-button';

const api = 'https://randomuser.me/api/';

class MainApp extends Component {
  realm: undefined

  componentWillMount() {
    const realm = this.realm = new Realm({
      schema: [
        {
          name: 'User',
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

  getRandomUser() {
    return fetch(api).then((response) => response.json());
  }

  //  create a user object
  createUser = () => {
    const realm = this.realm;

    this.getRandomUser().then((response) => {
      const user = response.results[0];
      const userName = user.name;
      realm.write(() => {
        realm.create('User', {
          firstName: userName.first,
          lastName: userName.last,
          email: user.email,
        });
        this.setState({ users: realm.objects('User') });
      });
    });
  }

  updateUser = () => {
    const realm = this.realm;
    const users = realm.objects('User');

    realm.write(() => {
      if (users.length) {
        let firstUser = users.slice(0, 1)[0];
        firstUser.firstName = 'Bob';
        firstUser.lastName = 'Cookbook';
        firstUser.email = 'react.native@cookbook.com';
        this.setState(users);
      }
    });
  }

  deleteUsers = () => {
    const realm = this.realm;

    realm.write(() => {
      realm.deleteAll();
      this.setState({ users: realm.objects('User') });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to the Realm DB Test</Text>
        <View style={styles.container}>
          <Button onPress={this.createUser}>
            Add User
          </Button>
          <Button onPress={this.updateUser}>
            Update First User
          </Button>
          <Button onPress={this.deleteUsers}>
            Remove All Users
          </Button>
        </View>
        <View style={styles.container}>
          <Text style={styles.welcome}>Users: </Text>
        {
          this.state.users.map((user, idx) => {
            return (<Text key={idx}>
                {user.firstName} {user.lastName} {user.email}
              </Text>);
          })
        }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    paddingTop: 25
  },
  buttonContainer: {
    width: 200,
    padding: 10,
    margin: 5,
    height: 40,
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#FF5722'
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white'
  },
});

export default MainApp;
