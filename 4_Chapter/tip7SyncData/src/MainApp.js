import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  NetInfo,
  StyleSheet,
} from 'react-native';

class MainApp extends Component {

  componentDidMount() {
    this.setState({
      isConnected: undefined,
      syncStatus: undefined,
      serverResponse: undefined
    });

    NetInfo.isConnected.fetch().then(isConnected => {
      this.setState({ isConnected });
      console.log('First, is ' + (isConnected ? 'online' : 'offline'));
    });
    NetInfo.isConnected.addEventListener('connectionChange', this.onConnectedChange);
  }

  onConnectedChange = (isConnected) => {
    const pendingSync = this.pendingSync;
    this.setState({ isConnected });
    if (pendingSync) {
      this.setState({ syncStatus: 'Syncing' });

      this.submitData(pendingSync).then(() => {
        this.setState({ syncStatus: 'Sync Complete' });
      });
    }
  }

  onSubmitPress = () => {
    const isConnected = this.state.isConnected;
    const submitBody = {
      name: 'React Native Cookbook',
      timestamp: Date.now()
    };

    if (isConnected) {
      this.submitData(submitBody);
    } else {
      this.pendingSync = submitBody;
      this.setState({ syncStatus: 'Pending' });
    }
  }

  pendingSync: 'undefined'

  submitData(bodyData) {
    return fetch('https://posttestserver.com/post.php', {
      method: 'POST',
      body: JSON.stringify(bodyData)
    }).then((response) => {
      return response.text();
    }).then((responseText) => {
      this.setState({
        serverResponse: responseText,
      });
    });
  }

  render() {
    const {
      isConnected,
      syncStatus,
      serverResponse
    } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Sync Test!
        </Text>
        <TouchableOpacity onPress={this.onSubmitPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Submit Data</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.instructions}>
          Connection Status: {isConnected ? 'Connected' : 'Disconnected'}
        </Text>
        <Text style={styles.instructions}>
          Sync Status: {syncStatus}
        </Text>
        <Text style={styles.instructions}>
          Server Response: {serverResponse}
        </Text>
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
    marginTop: 30,
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    padding: 20,
    backgroundColor: '#fff',
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'blue',
  },
});

export default MainApp;
