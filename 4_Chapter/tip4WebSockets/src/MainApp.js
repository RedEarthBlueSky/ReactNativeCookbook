import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';

const { width } = Dimensions.get('window');

class MainApp extends Component {
  state = {
    history: [],
  };

  componentWillMount() {
    this.ws = new WebSocket('ws://localhost:3001');

    this.ws.onopen = this.onOpenConnection;
    this.ws.onmessage = this.onMessageReceived;
    this.ws.onerror = this.onError;
    this.ws.onclose = this.onClose;
    console.log('Component Did Mount');
  }

  onOpenConnection = () => {
    console.log('Connection Open!');
  }

  onError = (event) => {
    console.log('onerror', event.message);
  }

  onClose = (event) => {
    console.log('onclose', event.code, event.reason);
  }

  onMessageReceived = (event) => {
    this.setState({
      history: [
        ...this.state.history,
        { owner: false, msg: event.data }
      ],
    });
  }

  onSendMessage = () => {
    const { text } = this.state;

    this.setState({
      text: '',
      history: [
        ...this.state.history,
        { owner: true, msg: text },
      ],
    });
    this.ws.send(text);
  }

  onChangeText = (text) => {
    this.setState({ text });
  }

  renderMessage(item, index) {
    const kind = item.owner ? styles.me : styles.friend;

    return (
      <View style={[styles.msg, kind]} key={index}>
        <Text>{item.msg}</Text>
      </View>
    );
  }

  render() {
    const { history, text } = this.state;
    const { title, container, toolbar, content,
      msg, inputContainer, input } = styles;

    return (
      <View style={container}>
        <Text style={title}>Ch4 Tip4 - Web Sockets Real Time comms! </Text>
        <ScrollView style={content}>
          { history.map(this.renderMessage)}
        </ScrollView>
        <View style={inputContainer}>
          <TextInput
            style={input}
            value={text}
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSendMessage}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'blue',
    padding: 10,
    marginTop: 30,
  },
  container: {
    backgroundColor: '#ecf0f1',
    flex: 1,
  },
  toolbar: {
    backgroundColor: '#34495e',
    color: '#fff',
    fontSize: 20,
    padding: 25,
    textAlign: 'center',
  },
  content: {
    flex: 1,
  },
  msg: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
  },
  me: {
    alignSelf: 'flex-start',
    backgroundColor: '#1abc9c',
    marginRight: 100,
  },
  friend: {
    alignSelf: 'flex-end',
    backgroundColor: '#fff',
    marginLeft: 100,
  },
  inputContainer: {
    backgroundColor: '#bdc3c7',
    padding: 5,
  },
  input: {
    height: 40,
    backgroundColor: '#fff',
  },
});

export default MainApp;
