import React from 'react';
import { StyleSheet, View, Modal, ActivityIndicator } from 'react-native';

const Loader = props => {
  const { animationType, onRequestClose, transparent, loading, actIndSize } = props;

  return (
    <Modal
      animationType={animationType}
      onRequestClose={onRequestClose}
      transparent={transparent}
      visible={loading}
    >
      <View style={styles.modalBackground}>
        <View style={styles.ActivityIndicatorWrapper}>
          <ActivityIndicator
            animation={loading}
            size={actIndSize || 'large'}
          />
        </View>
      </View>
    </Modal>

  );
}

const styles = StyleSheet.create({
  modalBackground: {

  },
  ActivityIndicatorWrapper: {

  },
});

export { Loader };
