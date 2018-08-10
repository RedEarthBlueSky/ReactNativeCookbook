import React, { Component } from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import FBSDK, { LoginButton } from 'react-native-fbsdk';

const KeystorePW = 'ga0RGNYHvNM5d0SLGQfpQWAPGJ8=';

class Login extends Component {
  render() {
    return (
      <View style={styles.loginButtonStyles}>
        <LoginButton
          readPermissions={['public_profile']}
          onLoginFinished={
            (error, result) => {
              if (error) {
                Alert.alert(`Login failed with error: ${result.error}`);
              } else if (result.isCancelled) {
                Alert.alert('Login was cancelled.');
              } else {
                Alert.alert(`Login was successful with permissions: ${result.grantedPermissions}`);
              }
            }
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginButtonStyles: {
    margin: 20,
  }
});

export default Login;
