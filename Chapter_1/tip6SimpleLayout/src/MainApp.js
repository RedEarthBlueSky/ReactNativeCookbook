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
      <View style={statsStyle}>
        <Image
          source={options.icon}
          style={[iconStyle, options.selected ? selected : null]}
        />
      <Text style={counterStyle}>{options.value}</Text>
      </View>
    );
  }

  render() {
    const { name, lastName, occupation, friends, favorites, comments } = this.state;
    const { containerStyle, nameStyle, infoStyle, personalStyle,
            occupationStyle, statsStyle, counterStyle, iconStyle } = styles;

    return (
      <ImageBackground source={profileImage} style={containerStyle}>
        <View style={infoStyle}>
          <View style={personalStyle}>
            <Text style={nameStyle}>{name}
              {lastName}
            </Text>
            <Text style={occupationStyle}>
              {occupation.toUpperCase()}
            </Text>
          </View>
          <View style={statsStyle}>
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
  containerStyle: {
    flex: 1,
    height: null,
    width: null,
  },
  infoStyle: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    top: null,
  },
  personalStyle: {
    padding: 30,
  },
  nameStyle: {
    color: '#fff',
    fontFamily: 'Helvetica',
    fontSize: 30,
    fontWeight: 'bold',
  },
  occupationStyle: {
    color: '#d6ec1b',
    marginTop: 5,
  },
  statsStyle: {
    flexDirection: 'row',
  },
  statStyle: {
    alignItems: 'center',
    backgroundColor: '#7675b7',
    borderColor: '#6e6db1',
    borderLeftWidth: 1,
    flex: 1,
    padding: 10,
  },
  selectedStyle: {
    tintColor: '#d6ec1b',
  },
  iconStyle: {
    tintColor: '#504f9f',
    height: 30,
    width: 30,
  },
  counterStyle: {
    color: '#fff',
    fontSize: 15,
    marginTop: 5,
  },
});

export default MainApp;
