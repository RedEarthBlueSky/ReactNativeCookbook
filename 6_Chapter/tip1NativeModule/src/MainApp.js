import React, { Component } from 'react';
import {
  NativeModules,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import Button from 'react-native-button';

const HelloManager = NativeModules.HelloManager;

class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      isAdmin: false,
      greetingMessage: '',
    };
  }

  componentWillMount() {
    this.setState({
      greetingMessage: undefined,
    });
  }

  greetUserCallback = () => {
    const state = this.state;

    HelloManager.greetUser(state.userName, state.isAdmin, this.displayResult);
  }

  displayResult = (result) => {
    this.refs.userName.blur();
    this.setState({ greetingMessage: result });
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>
          Chapter 6: Why iOS & not React Native.
        </Text>
        <TextInput
          ref='userName'
          autoCorrect={false}
          style={styles.inputField}
          placeholder='User Name'
          onChangeText={(text) => this.setState({ userName: text })}
        />
        <Text style={styles.label}>Admin:</Text>
        <Switch
          style={styles.radio}
          onValueChange={(value) => this.setState({ isAdmin: value })}
          value={this.state.isAdmin}
        />
        <Button
          containerStyle={styles.buttonContainer}
          style={styles.buttonStyle}
          onPress={this.greetUserCallback}
        >
          Greet (callback)
        </Button>
        <View style={styles.flexContainer}>
          <Text>Response: </Text>
          <Text>{this.state.greetingMessage}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: 'blue',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  header: {
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#607D8B',
    paddingTop: 16
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center'
  },
  inputContainer: {
    height: 48,
    flexDirection: 'row',
    margin: 10
  },
  flexContainer: {
    flex: 1
  },
  rowContainer: {
    flexDirection: 'row'
  },
  inputField: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
    marginRight: 5
  },
  radio: {
    marginTop: 5
  },

  buttonContainer: {
    width: 150,
    padding: 10,
    margin: 5,
    height: 40,
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#FF5722'
  },
  swiftButtonContainer: {
    backgroundColor: '#4CAF50'
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white'
  },
});

export default MainApp;
