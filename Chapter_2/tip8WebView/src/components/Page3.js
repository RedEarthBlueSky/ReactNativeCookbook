import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class AnotherPage extends Component {
  static navigationOptions = {
    title: 'Another Page Title',
  };
  render() {
    console.log('Hello');
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Button title='Home' onPress={() => navigate('Home')} />
        <Button title='Details' onPress={() => navigate('Detail')} />
        <Button title='Page3' onPress={() => navigate('Page3')} />
        <Button title='Page4' onPress={() => navigate('Page4')} />
      <Text>Page 3 Screen</Text>
      </View>

    );
  }
}

export default AnotherPage;
