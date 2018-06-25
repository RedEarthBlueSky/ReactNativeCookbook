import React, { Component } from 'react';
import { StyleSheet, View, ListView, Image, Text }
  from 'react-native';
import data from './sales.json';

const basketIcon = require('./images/basket.png');

class MainApp extends Component {
  constructor(props) {
    super(props);
//  class ListView.dataSource implements data processing for list view
    const ds = new ListView.DataSource({
//  rowHasChanged is a required property, and should be a function
//  to compare the next element
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
//  when filling up dataSource with data we need to call
//  cloneWithRows to send in an array of records
      dataSource: ds.cloneWithRows(data),
    };
  }

//  renderRow accepts a function as a value; this function
//  returns the JSX for each row
  renderRow(record) {
    return (
      <View style={styles.row} >
        <View style={styles.iconContainer}>
          <Image source={basketIcon} style={styles.icon} />
        </View>
        <View style={styles.info}>
          <Text style={styles.items}>{record.items} Items</Text>
          <Text style={styles.address}>{record.address} </Text>
        </View>
        <View style={styles.total}>
          <Text style={styles.date}>{record.date}>{record.date}</Text>
          <Text style={styles.price}>${record.total}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Sales</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
  flex: 1,
  backgroundColor: '#fff',
  },
  title: {
    backgroundColor: '#0f1b29',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    paddingTop: 40,
    textAlign: 'center',
  },
  row: {
    borderColor: '#f1f1f1',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#feb401',
    borderColor: '#feaf12',
    borderRadius: 25,
    borderWidth: 1,
    justifyContent: 'center',
    height: 50,
    width: 50,
  },
  icon: {
    tintColor: '#fff',
    height: 22,
    width: 22,
  },
  info: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
  },
  items: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  address: {
    color: '#ccc',
    fontSize: 14,
  },
  total: {
    width: 80,
  },
  date: {
    fontSize: 12,
    marginBottom: 5,
  },
  price: {
    color: '#1cad61',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default MainApp;
