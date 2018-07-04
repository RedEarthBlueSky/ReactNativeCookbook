import React, { Component } from 'react';
import { StyleSheet, Navigator } from 'react-native';
import Detail from './Detail';
import Home from './Home';

class MainApp extends Component {

  renderScene(route, navigator) {
    if (route.song) {
      return (
        <Detail song={route.song} navigator={navigator} />
      );

      return <Home navigator={navigator} />;
    }
  }


  render() {
    return (
        <Navigator
          ref='navigator'
          style={styles.container}
          // set defalt animation for all transitions top to bottom
          configureScene={ (route) =>
            Navigator.SceneConfigs.FloatFromBottom
          }
          initialRoute={{ }}
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

export default MainApp;
