import React from 'react';
import { View, Text, Button } from 'react-native';


const Note = (props) => {

  const deleteData = (e) => {
    e.preventDefault();
    props.deleteNote(props.note);
  };

  return (
    <View>
        <Text>Book: {props.note}</Text>
        <Button
          onPress={deleteData}
          style={{ margin: 5 }}
          title='Remove Book'
        />
    </View>
  );
};

export default Note;
