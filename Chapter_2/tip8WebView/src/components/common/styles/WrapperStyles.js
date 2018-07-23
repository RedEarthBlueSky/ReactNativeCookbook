import { StyleSheet } from 'react-native';

const WrapperStyles = StyleSheet.create({
  wrapperContainer: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#bdd3f9',
    // borderWidth: 1,
    // borderRadius: 2,
    // borderColor: '#ddd',
    // borderBottomWidth: 0.3,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  sectionContainer: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#e6ffed',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
});

export { WrapperStyles };
