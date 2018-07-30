import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
// import PostContainer from './PostContainer';
// import PhotoViewer from './PhotoViewer';

const path = 'https://s3.amazonaws.com/crysfel/public/book/03/08';
const timeline = [
  { title: 'Enjoying the fireworks', image: `${path}/01.jpg` },
  { title: 'Climbing the Mount Fuji', image: `${path}/02.jpg` },
  { title: 'Check my last picture', image: `${path}/03.jpg` },
  { title: 'Sakuras are beautiful!', image: `${path}/04.jpg` },
];

class MainApp extends Component {
  render() {
    return (
      <View>
        <Text style={styles.toolbar}>Ch 3:  Tip 8 - Timeline Photo Viewer</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    fontSize: 16,
    padding: 10,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'blue',
  }
});

export default MainApp;
