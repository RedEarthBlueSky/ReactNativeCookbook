import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const imageRoot = 'https://s3.amazonaws.com/crysfel/public/book/02/01';

const Post = ({ content, img, title }) => {
  console.log(`${imageRoot}/${img}`);
  return (
    <View style={styles.image}>
      <Image
        source={`${imageRoot}/${img}`}
        style={styles.image}
      />
      <View styles={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text>{content}</Text>
      </View>
      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Read More</Text>
      </TouchableOpacity>
    </View>
  );
}

const { string } = PropTypes;
Post.propTypes = {
  content: string,
  title: string,
  img: string,
};

export default Post;
