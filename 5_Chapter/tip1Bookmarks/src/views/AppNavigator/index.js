//  AppNavigator index.js
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  NetInfo
} from 'react-native';
import { connect } from 'react-redux';
import { Navigator } from 'react-native-deprecated-custom-components';
import { setConnectivity } from '../../redux/modules/network/actions';
import Categories from '../Categories';

class AppNavigator extends Component {

  //  add listener for network connectivity
  componentWillMount() {
    NetInfo.addEventListener(
      'change',
      this.onConnectivityChange,
    );
  }

  //  remove event Listener
  componentWillUnmount() {
    NetInfo.removeEventListender(
      'change',
      this.onConnectivityChange,
    );
  }

  onConnectivityChange = (reach) => {
    this.props.dispatch(setConnectivity(reach));
  }

  renderScene(route, navigator) {
    return <Categories navigator={navigator} />;
  }

  render() {
    return (
      <Navigator
        style={styles.container}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect()(AppNavigator);
