import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ImageBackground } from 'react-native';

const profileImage = require('./images/user-profile.jpg');
const friendsIcon = require('./images/profile.png');
const favIcon = require('./images/plain-heart.png');
const msgIcon = require('./images/chat.png');

class MainApp extends Component {
  state = {
    name: 'Crysfel',
    lastName: 'Villa Roman',
    occupation: 'Software Engineer',
    friends: '1, 200',
    favorites: '2,491',
    comments: '4,832',
  };

  renderStat(options) {
    return (
      <View style={styles.stats}>
        <Image
          source={options.icon}
          //  if the element is selected add specific components for it
          style={[styles.icon, options.selected ? styles.selected : null ]}
        />
      <Text style={styles.counter}>{options.value}</Text>
      </View>
    );
  }

  render() {
    const { name, lastName, occupation, friends, favorites, comments } = this.state;
    // const { container, name, info, personal, occupation, stats, counter, icon } = styles;

    return (
      <ImageBackground source={profileImage} style={styles.container}>
        <View style={styles.info}>
          <View style={styles.personal}>
            <Text style={styles.name}>
              {name}
              {lastName}
            </Text>
            <Text style={styles.occupation}>
              {occupation.toUpperCase()}
            </Text>
          </View>
          <View style={styles.stats}>
            {this.renderStat({ icon: friendsIcon, value: friends, seleted: true }) }
            {this.renderStat({ icon: favIcon, value: favorites, seleted: true }) }
            {this.renderStat({ icon: msgIcon, value: comments, seleted: true }) }
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //  flex 1 gets the height of the parent
    flex: 1,
    height: null,
    width:null
  },
});

export default MainApp;
