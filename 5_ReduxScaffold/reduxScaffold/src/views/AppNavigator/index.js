//  Views AppNavigator main file index.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
        View,
        Text,
        Platform,
        StyleSheet,
        NetInfo,
      } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import Categories from '../Categories';
import { setConnectivity } from '../../redux/modules/network/actions';

class AppNavigator extends Component {

  componentWillMount() {
    NetInfo.addEventListener(
      'change',
      this.onConnectivityChange,
    );
  }

  componentWillUnmount() {
    NetInfo.removeEventListener(
      'change',
      this.onConnectivityChange,
    );
  }

  // connectivity change callback function, dispatch action creator
  // to set new status on redux this.state
  onConnectivityChange = (reach) => {
    this.props.dispatch(setConnectivity(reach));
  }


  renderScene(route, navigator) {
    return <Categories navigator={navigator} />;
  }

  render() {
    return (
        <Navigator
          configureScene={(route) => {
            if (Platform.OS === 'android') {
              return Navigator.SceneConfigs.FloatFromBottomAndroid;
            }
            return Navigator.SceneConfigs.FloatFromBottom;
          }}
          initialRoute={{}}
          renderScene={this.renderScene}
        />
    );
  }
}

export default connect()(AppNavigator);
