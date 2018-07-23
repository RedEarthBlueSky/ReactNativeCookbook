import React, { Component } from 'react';
import { Text, View, TouchableOpacity, WebView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class BrowserView extends Component {
  static propTypes = {
    url: PropTypes.string,
    navigator: PropTypes.object,
  };

  static navigationOptions = {
    title: 'Browser View Page',
  };

  goBack() {
    this.props.navigation.pop();
  }

  render() {
    const { navigation } = this.props;
    const url = navigation.getParam('url', 'NO URL');
    console.log(url);
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.toolbar}
          onPress={() => this.goBack()}
        >
          <Text>Back</Text>
        </TouchableOpacity>
        <WebView
          source={{ uri: url }}
          style={styles.content}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    backgroundColor: '#e74c3c',
    padding: 20,
  },
  text: {
    color: '#fff',
  },
  content: {
    flex: 1,
  },
});

export default BrowserView;
