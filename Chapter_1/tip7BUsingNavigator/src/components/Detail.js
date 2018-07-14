import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from '../styles/Styles';

// const { object } = PropTypes;
const root = 'https://s3.amazonaws.com/crysfel/public/book/01/07';

class Detail extends Component {
  // static propTypes = {
  //   song: object,
  //   navigator: object,
  // }

  static navigationOptions = {
    title: 'Details Title',
  };

  render() {
    const { navigation } = this.props;
    const { navigate } = navigation;

    const title = navigation.getParam('title', 'Error: no title here');
    const image = navigation.getParam('image', 'Error: no image available');
    console.log(title, image);
    // const { song } = this.props;

    return (
      <View style={styles.container}>
        <Button title='Home' onPress={() => navigate('Home')} />
        <Button title='Detail' onPress={() => navigate('Detail')} />
        <Button title='Page3' onPress={() => navigate('Page3')} />
        <Button title='Page4' onPress={() => navigate('Page3')} />
        <Text>Detail Screen</Text>
          <View style={styles.info}>
            <Image
              source={{ uri: `${root}/${image}` }}
              style={styles.image}
            />
          <Text style={styles.title}>{title}</Text>
            <View style={styles.playContainer}>
              <Text style={styles.play}>Play song</Text>
            </View>
          </View>
          <Text style={styles.other}>01 - One more song</Text>
          <Text style={styles.other}>02 - Other song here</Text>
          <Text style={styles.other}>03 - This is the last song</Text>
          <Text style={styles.other}>04 - Maybe this is the last song?</Text>
          <Text style={styles.other}>05 - Why not one more song?</Text>
          <Text style={styles.other}>06 - Finally this is the last song</Text>
        </View>
    );
  }
}

export default Detail;
