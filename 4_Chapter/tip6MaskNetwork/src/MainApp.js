import React, { PureComponent } from 'react';
import {
  NetInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class MainApp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      online: null,
      offline: null,
    };
  }

  componentWillMount() {
    NetInfo.fetch().done(reach => {  // check status of current connectivity
      this.onConnectivityChange(reach);
    });
    // callback when the status changes
    NetInfo.addEventListener('change', this.onConnectivityChange);
  }

  // when the component is about to be destroyed remove the listener
  componentWillUnmount() {
    NetInfo.removeEventListener('change', this.onConnectivityChange);
  }

  onConnectivityChange = reach => {
    const type = reach.toLowerCase();
    this.setState({
      online: type !== 'none',
      offline: type === 'none',
    });
  }

  renderMask() {
    if (this.state.offline) {
      return (
        <View style={styles.mask}>
          <View style={styles.msg}>
            <Text style={styles.alert}>
              Seems you do not have network connection anymore.
            </Text>
            <Text style={styles.alert}>
              You can continue using the app, with limited content.
            </Text>
          </View>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Chapter 4 Tip 6 - Mask a Network</Text>
        <Text style={styles.text}>Lorem... </Text>
        <Text style={styles.text}>Lorem ipsum</Text>
        {this.renderMask()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: 'blue',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  toolbar: {
    backgroundColor: '#3498db',
    padding: 15,
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  text: {
    padding: 10,
  },
  mask: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  msg: {
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
    height: 200,
    justifyContent: 'center',
    padding: 10,
    width: 300,
  },
  alert: {
    fontSize: 20,
    textAlign: 'center',
    margin: 5,
  },
});

export default MainApp;
