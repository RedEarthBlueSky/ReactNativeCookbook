import React, { Component } from 'react';
import { View, Text, Button } from 'react-native'

class Home extends Component {
  static navigationOptions = {
    title: 'Home Page Title',
  };

  render() {
    //  can use push to add new detail to the stack
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>Home Screen</Text>
        <Button
          title='Go Details!'
          onPress={() => navigate('Detail')}
        />
        <Text>This is the home screen</Text>
      </View>
    );
  }
}

export default Home;
