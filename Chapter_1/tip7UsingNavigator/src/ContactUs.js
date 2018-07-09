import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ContactUs extends Component {
  static navigationOptions = {
    title: 'Contacts Page',
  };
  render() {
    return (
      <View>
        <Text>This is the contact us page - ContactUs.js</Text>
      </View>
    );
  }
};

export default ContactUs;
