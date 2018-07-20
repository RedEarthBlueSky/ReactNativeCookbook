import React from 'react';
import { StyleSheet, Modal, View, ActivityIndicator, Text } from 'react-native';
// https://github.com/n4kz/react-native-indicators
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator, } from 'react-native-indicators';

const Loader = props => {
  const { loading, size, animationType, transparent, color } = props;

  // requestIndicator = (type) => {
  //   return (
  //     <View style={styles.modalBackground}>
  //       <View style={styles.activityIndicatorWrapper}>
  //         <indicator animating={loading} color={color} />
  //       </View>
  //     </View>
  //   );
  // }

  return (
    <Modal
      transparent={transparent}
      animationType={animationType}
      visible={loading}
      onRequestClose={() => { console.log('close modal'); }}
    >
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <Text style={{ marginTop: 10, marginBottom: 0, }}>Request...</Text>
          {/* <ActivityIndicator animating={loading} color={color} size={size || 'large'} /> */}
          <PacmanIndicator animating={loading} color={color} size={60} />
        </View>
      </View>
    </Modal>

  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040' //  background color with opacity at 40%
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 120,
    width: 120,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export { Loader };
