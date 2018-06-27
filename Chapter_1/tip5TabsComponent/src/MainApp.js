import React, { Component } from 'react';
import { Stylesheet, View, Image, Text, TabBarIOS } from 'react-native';

const homeIcon = require('./images/home.png');
const favIcon = require('./images/star.png');
const blogIcon = require('./images/notebook.png');
const profileIcon = require('./images/user.png');

class MainApp extends Component {
  state = {
    selected: 'home'
  };

  selectTab(id) {

  }

  renderTab(options) {

  }

  render() {
    return (
      <TabBarIOS tintColor='#42b49a'>

      </TabBarIOS>
    );
  }
}
