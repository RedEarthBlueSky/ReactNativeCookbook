import React from 'react';
import { StyleSheet, Modal, View, ActivityIndicator } from 'react-native';

const Loader = props => {
  const { animationType, loading, transparent } = props;

  return (
    <Modal
      animationType={animationType}
      transparent={transparent}
      visible={loading}
    >
      <View style={styles.modalBackground}>
        <View style={styles.ActivityIndicatorWrapper}>
          <ActivityIndicator animation={loading} />
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
    backgroundColor: '#000040'
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
});

export { Loader };
