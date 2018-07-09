import React, { Component } from 'react';
import { StyleSheet, View, Text, Button,
         ScrollView, TouchableHighLight } from 'react-native';
import Songs from './songs';

class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const { navigate } = this.props.navigation;
    
    return (
      <View>
        <Button
          title='go to Details'
          onPress={() =>
            navigate('Detail', { name: 'Detail Name' })
          }
        />
        <Button
          title='Go to Contacts'
          onPress={() =>
            navigate('Contact', { name: 'Contacts' })
          }
        />
        <Text>This is the home page Home.js</Text>
      </View>
    );
  }
}

export default HomeScreen;
