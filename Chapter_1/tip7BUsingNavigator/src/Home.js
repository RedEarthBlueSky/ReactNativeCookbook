import React, { Component } from 'react';
import { View, Text, Button } from 'react-native'

class Home extends Component {
  static navigationOptions = {
    title: 'Home Page Title',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Button
          title='Go Details!'
          onPress={() =>
            this.props.navigation.push('Detail')
          }
        />
        <Text>This is the home screen</Text>
      </View>
    );
  }
}

export default Home;
