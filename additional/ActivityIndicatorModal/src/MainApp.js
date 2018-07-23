import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Loader } from './components/common';
import styles from './styles/styles';

class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, address: '', };
  }

  async search(query) {
    const encodedAddress = encodeURIComponent(query);
    console.log(encodedAddress);
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;
    console.log(url);
    try {
      const response = await fetch(url);

      if (response.status > 400) {
        console.log('We have a 400 error');
        this.setState({ loading: false });
      }
      if (response.status === 200) {
        console.log('200 Error');
      }
      return await response.json();
    } catch (e) {
      console.log('We have a catch error');
      this.setState({ loading: false });
    }
  }


  async getCoordinates(query) {
    this.setState({
      loading: true,
    });

    const coords = await this.search(query);
    console.log('coords', coords);

    setTimeout(() => {
      this.setState({
        loading: false,
        address: coords.results[0].formatted_address,
      });
    }, 2000);
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
      <Text style={styles.addressText}>{`${this.state.address}`}</Text>
      </View>
    );
  }
}

export default MainApp;
