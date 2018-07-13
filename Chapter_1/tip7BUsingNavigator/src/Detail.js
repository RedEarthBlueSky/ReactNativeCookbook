import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Home extends Component {
  static navigationOptions = {
    title: 'Details Title',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Button
          title='Home'
          onPress={() => navigate('Home')}
        />
        <Button
          title='Detail'
          onPress={() => navigate('Detail')}
        />
        <Button
          title='Page3'
          onPress={() => navigate('Page3')}
        />
        <Button
          title='Page4'
          onPress={() => navigate('Page3')}
        />
      <Text>Detail Screen</Text>
      </View>
    );
  }
}

export default Home;
