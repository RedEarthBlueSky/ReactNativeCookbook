import React, { Component } from 'react';
import { View, Text, Button } from 'react-native'

class Home extends Component {
  static navigationOptions = {
    title: 'Details Page Title',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>Detail screen</Text>
        <Button
          title='Go Home!'
          onPress={() => navigate('Home')}
        />
      </View>
    );
  }
}

export default Home;
