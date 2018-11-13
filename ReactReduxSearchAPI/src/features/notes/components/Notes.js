import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Note from './Note';

const Notes = (props) => {

  const renderBookItem = () => {
    return props.notes.map(note =>
      <Note
        key={note}
        note={note}
        deleteNote={props.deleteNote}
      />
    );
  };

  return (
    <View style={styles.notesWrapper}>
      <Text>
        JSA Notes:
      </Text>
      {renderBookItem()}
    </View>
  );
};

const styles = StyleSheet.create({
  notesWrapper: {
    display: 'flex',
    backgroundColor: 'blue',
    padding: 10,
  },
});

export default Notes;
