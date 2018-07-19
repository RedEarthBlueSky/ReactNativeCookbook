import React, { Component } from 'react';
import { View, Alert, Text, StyleSheet } from 'react-native';
import Orientation from 'react-native-orientation';
import { Button, Loader, Wrapper, Header } from './components/common';
import Menu from './components/Menu.js';

class MainApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orientation: null,  // state for orientation changes
    };
  }

  componentWillMount() {
    console.log('Component will mount!');
    const orientation = Orientation.getInitialOrientation();
    this.setState({
      orientation,
    });
    console.log(this.state.orientation);
  }

  componentDidMount() {
    console.log('Component did mount!');
    Orientation.addOrientationListener(this.onOrientationChange);
  }

  componentWillUnmount() {
    Orientation
      .removeOrientationListener(this.onOrientationChange);
    console.log('Component will unmount');
  }

  onOrientationChange = (orientation) => {
    this.setState({
      orientation,
    });
  }

  render() {
    return (
      <Wrapper>
        <Header titleText={'Orientation App'} subTitleText={'Subtitle content'} >
          {this.state.orientation}
        </Header>
        <View style={styles.content}>
          <Menu style={styles.menuStyles} orientation={this.state.orientation} />
          <View style={styles.mainContent}>
            <Text>Main Content</Text>
          </View>
        </View>
    </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
  menuStyles: {
    backgroundColor: 'red',
  },
  content: {
    flex: 1,
  },
  mainContent: {
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainApp;
