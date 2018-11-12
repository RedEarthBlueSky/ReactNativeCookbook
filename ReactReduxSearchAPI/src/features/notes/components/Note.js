import React from 'react';
import { View, Text, Button } from 'react-native';


const Note = (props) => {

  const deleteData = () => {
    props.deleteNote(props.note);
  };

  return (
    <View>
        <Text>Book {props.note.id}: {props.note.body}</Text>
        <Button
          onPress={deleteData}
          style={{ margin: 5 }}
          title='Remove Book'
        />
    </View>
  );
};

export default Note;
