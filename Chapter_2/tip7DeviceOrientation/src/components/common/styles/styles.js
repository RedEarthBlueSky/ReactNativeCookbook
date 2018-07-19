import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0.3,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    ...Platform.select({
      ios: {
        marginTop: 25,
      },
    }),
  },
  title: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 5,
  },
  subTitle: {
    color: 'pink',
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  headerStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  childElement: {
    color: 'blue',
    fontSize: 12,
    fontWeight: 'bold',
    padding: 5,
    paddingLeft: 10,
    paddingTop: 0,
  }
});

export default styles;
