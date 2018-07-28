import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';

class MainApp extends Component {

  state = {
    loading: false,
  };

  onPressButton = (loading) => {
    this.setState({ loading });
  };

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Ch 3: Tip 5 - Animated Container </Text>
      <View style={styles.content}>
          <Button
            label='Login'
            loading={this.state.loading}
            onPress={this.onPressButton}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0859db',
    marginTop: 20,
  },
  main: {
    flex: 1,
  },
  content: {
    padding: 10,
    backgroundColor: '#ecf0f1',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default MainApp;
