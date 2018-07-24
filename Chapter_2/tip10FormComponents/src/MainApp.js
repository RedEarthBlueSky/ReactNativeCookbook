import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import UserForm from './components/UserForm';

class MainApp extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.toolbar}>TIP 10: Render Forms!  Fitness App.</Text>
        <ScrollView style={styles.content}>
          <UserForm />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: 'grey',
    color: '#fff',
    fontSize: 20,
    padding: 20,
    paddingTop: 30,
  },
  main: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  }
});

export default MainApp;
