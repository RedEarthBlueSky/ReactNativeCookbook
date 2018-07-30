import React from 'react';
import {
  Dimensions,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
// import PropTypes from 'prop-types';
import Reactions from './Reactions';

const image1 = require('./images/01.jpg');
const image2 = require('./images/02.jpg');

const { width } = Dimensions.get('window');

const MainApp = () => (
  <View style={styles.main}>
    <Text style={styles.titlebar}>Ch 3: Tip 7 - Facebook Reactions</Text>
    <ScrollView style={styles.content}>
      <Image source={image2} style={styles.image} resizeMode='cover' />
      <Reactions />
      <Image source={image1} style={styles.image} resizeMode='cover' />
      <Reactions />
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  titlebar: {
    backgroundColor: 'blue',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
  },
  main: {
    flex: 1,
  },
  toolbar: {
    backgroundColor: '#3498db',
    color: '#fff',
    fontSize: 22,
    padding: 20,
    textAlign: 'center',
  },
  content: {
    flex: 1,
  },
  image: {
    width,
    height: 200,
  },
});

export default MainApp;
