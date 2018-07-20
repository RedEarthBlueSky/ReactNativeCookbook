import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { Wrapper, Header, Button, Loader } from './components/common';

class MainApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      address: '',
    };
  }

  getCoordinates(query) {
    console.log('Start loading animation');
  }

  render() {
    return (
      <View style={styles.container}>
        <Loader
          animationType={'none'}
          color={'blue'}
          loading={this.state.loading}
          size={'small'}
          transparent
        />
      <Text style={styles.titleText}>Infinity Yoga Brookhaven</Text>
        <Button
          onPress={() => this.getCoordinates('infinity yoga brookhaven')}
          style={styles.buttonStyle}
          title='Get Address'
        />
      <Text style={styles.addressText}>{`Addresss: ${this.state.address}`}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    fontWeight: 'bold',
    borderRadius: 2,
    backgroundColor: '#333333',
  },
  container: {
    backgroundColor: '#CCCCCC',
    height: Dimensions.get('window').height,
    padding: 15,
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    paddingTop: 50
  },
  titleText: {
    fontSize: 24,
    paddingBottom: 20,
    fontWeight: 'bold'
  },
  addressText: {
    fontSize: 18,
    paddingBottom: 10,
  }
});

export default MainApp;
