import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';
import PropTypes from 'prop-types';

class Menu extends Component {
  static propTypes = {
    orientation: PropTypes.string,
  };

  //  https://oblador.github.io/react-native-vector-icons/
  state = {
    options: [
      { title: 'Dashboard', icon: 'graph-pie' },
      { title: 'Activities', icon: 'calendar' },
      { title: 'Contacts', icon: 'address-book' },
      { title: 'Tasks', icon: 'list-thumbnails' },
      { title: 'Inbox', icon: 'archive' },
      { title: 'Next', icon: 'arrow-right' },
    ]
  };

  renderOption = (option, index) => {
    const isLandscape = this.props.orientation === 'LANDSCAPE';
    const title = isLandscape
      ? <Text style={styles.title}>{option.title}</Text>
      : null;
    const iconSize = isLandscape ? 27 : 35;

    return (
      <View key={index} style={[styles.option, styles.landscape]}>
        <Icon name={option.icon} size={iconSize} color='#fff' />
        {title}
      </View>
    );
  };

  render() {
    return (
      <View style={styles.mapContent}>
        {this.state.options.map(this.renderOption)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mapContent: {
    backgroundColor: '#34495E',
    paddingTop: 10,
  },
  option: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  landscape: {
    paddingRight: 30,
    paddingLeft: 30,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    margin: 5,
    marginLeft: 20,
  },
});

export default Menu;
