import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const UserList = ({ contact }) => {
  console.log(contact.name);
  return (
    <View style={styles.main}>
      <Text style={styles.toolbar}> Details should go here </Text>
      <Text>
        This is the Detail View:{contact.name.first} {contact.name.last}
      </Text>
    </View>
  );
};

UserList.propTypes = {
  contact: PropTypes.object,
};

export default UserList;
