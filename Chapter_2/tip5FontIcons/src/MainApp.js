import React, { Component } from 'react';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FAIicon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, View, Text } from 'react-native';

const MainApp = () => {
  return (
    <View style={styles.content}>
      <Text>Take a look at some cool vector icons</Text>
      <View style={styles.row}>
        <EvilIcon style={styles.icon} name='user' size={50} color='#e67e22' />
        <EvilIcon style={styles.icon} name='search' size={50} color='#e67e22' />
        <EvilIcon style={styles.icon} name='trophy' size={50} color='#e67e22' />
        <EvilIcon style={styles.icon} name='location' size={50} color='#e67e22' />
        <EvilIcon style={styles.icon} name='gear' size={50} color='#e67e22' />
      </View>
      <View style={styles.row}>
        <FAIicon style={styles.icon} name='briefcase' size={40} color='#c0392b' />
        <FAIicon style={styles.icon} name='camera-retro' size={40} color='#c0392b' />
        <FAIicon style={styles.icon} name='calender' size={40} color='#c0392b' />
        <FAIicon style={styles.icon} name='globe' size={40} color='#c0392b' />
        <FAIicon style={styles.icon} name='print' size={40} color='#c0392b' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    row: {
      flexDirection: 'row',
    },
    icon: {
      margin: 10,
    },
});

export default MainApp;
