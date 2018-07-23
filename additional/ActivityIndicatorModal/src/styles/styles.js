import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  buttonStyle: {
    fontWeight: 'bold',
    borderRadius: 2,
    backgroundColor: '#333333',
  },
  container: {
    backgroundColor: '#CCCCCC',
    height: Dimensions.get('window').height,
    padding: 15,
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    paddingTop: 50
  },
  titleText: {
    fontSize: 24,
    paddingBottom: 20,
    fontWeight: 'bold'
  },
  addressText: {
    fontSize: 18,
    paddingBottom: 10,
  }
});

export default styles;
