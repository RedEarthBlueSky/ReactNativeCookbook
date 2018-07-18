import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, Image, TouchableOpacity } from 'react-native';

class UserList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: ds.cloneWithRows(props.contacts),
    };
  }

  capitalize(value) {
    return value[0].toUpperCase() + value.substring(1);
  }

  renderContact = (contact) => {
    return (
      <TouchableOpacity style={styles.row} >
        <Image
          source={{ uri: `${contact.picture.large}` }}
          style={styles.img}
        />
        <View style={styles.info}>
          <Text style={styles.name}>
            {this.capitalize(contact.name.first)} {this.capitalize(contact.name.last)}
          </Text>
          <Text style={styles.phone}>{contact.phone}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.toolbar}>This is the User List</Text>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderContact}
        style={styles.main}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    // flex: 1,
    backgroundColor: '#dde6e9',
  },
  toolbar: {
    backgroundColor: '#2989dd',
    color: '#fff',
    padding: 20,
    textAlign: 'center',
    fontSize: 20,
  },
  row: {
    flexDirection: 'row',
    padding: 10,
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  info: {
    marginLeft: 10,
  },
  name: {
    color: '#333',
    fontSize: 22,
    fontWeight: 'bold',
  },
  phone: {
    color: '#aaa',
    fontSize: 16
  }
});

export default UserList;
