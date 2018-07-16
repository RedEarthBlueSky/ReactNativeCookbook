import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import Post from './Post';
import data from './data.json';
import styles from './Post/styles';

class MainApp extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: ds.cloneWithRows(data.posts)
    };
  }

  render() {
    // console.log(data.posts)
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Latest Posts</Text>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={post => <Post {...post} />}
          style={styles.list}
          contentContainerStyle={styles.content}
        />
      </View>
    );
  }
}

export default MainApp;
