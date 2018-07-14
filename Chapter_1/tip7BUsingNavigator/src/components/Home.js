import React, { Component } from 'react';
import { View,
         Text,
         Button,
         Image,
         ScrollView,
         TouchableHighlight, } from 'react-native';
import styles from '../styles/Styles';
import songs from '../config/songs';

class Home extends Component {
  static navigationOptions = {
    title: 'Home Title',
  };

  state = {
    forYou: songs.forYou,
    played: songs.played,
    popular: songs.popular,
  };

  onSelectSong(song) {
    console.log(song.title, song.image);
    this.props.navigation.push('Detail', {
      title: song.title,
      image: song.image,
    });  //  seperate function is redundant
  }

  renderSong(section, song, index) {
    return (
      <TouchableHighlight
        onPress={() => this.onSelectSong(song)}
        style={styles.song} key={index}
      >
        <View>
          <Image
            source={{ uri: `${section.root}/${song.image}` }}
            style={styles.image}
          />
        <Text style={styles.songTitle}>{song.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  renderSelection(options) {
    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{options.title.toUpperCase()}</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {
            options.songs.map((song, index) =>
              this.renderSong(options, song, index)
            )
          }
        </ScrollView>
      </View>
    );
  }

  render() {
    const { forYou, played, popular } = this.state;
    //  can use push to add new detail to the stack
    // const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        {/* <View>
          <Button title='Home' onPress={() => navigate('Home')} />
          <Button title='Details' onPress={() => navigate('Detail')} />
          <Button title='Page3' onPress={() => navigate('Page3')} />
          <Button title='Page4' onPress={() => navigate('Page4')} />
        </View> */}
        <View style={{ flex: 1 }}>
          {/* //style stops scrollview bounce */}
          {/* <Text>Home Screen</Text> */}
          <ScrollView>
            {this.renderSelection(forYou)}
            {this.renderSelection(played)}
            {this.renderSelection(popular)}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Home;
