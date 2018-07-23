import React from 'react';
import { Modal, View, ActivityIndicator, Text } from 'react-native';
// https://github.com/n4kz/react-native-indicators
import { PacmanIndicator, } from 'react-native-indicators';
import { LoaderStyles } from './styles';

const Loader = props => {
  const { loading, size, animationType, transparent, color } = props;
  const { modalBackground, activityIndicatorWrapper } = LoaderStyles;

  // Refer to /additional/ActivityIndicatorModal for how to implement
  //

  return (
    <Modal
      transparent={transparent}
      animationType={animationType}
      visible={loading}
      onRequestClose={() => { console.log('close modal'); }}
    >
      <View style={modalBackground}>
        <View style={activityIndicatorWrapper}>
          <Text style={{ marginTop: 10, marginBottom: 0, }}>Request...</Text>
          {/* <ActivityIndicator animating={loading} color={color} size={size || 'large'} /> */}
          <PacmanIndicator animating={loading} color={color} size={size} />
        </View>
      </View>
    </Modal>

  );
};

export { Loader };
