// notes main feature Component
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Notes from './components/Notes';
import Action from './components/Action';

class NotesMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jsaNotes: [
        { id: 1, body: 'Java Core Tutorials' },
        { id: 2, body: 'Spring Integration Applications' },
        { id: 3, body: 'Angular + Spring Boot Tutorials' },
        { id: 4, body: 'Some other stuff' },
      ],
    };
  }

  mainRemoveAll() { console.log('remove all'); }
  mainAddNote(note) { console.log('add Note'); }
  
  mainDeleteNote(note) {
    console.log('delete...', note);
  }

  render() {
    return (
      <View>
        <Text>This is the NotesMain Feature Component</Text>
        <Notes
          notes={this.state.jsaNotes}
          deleteNote={this.mainDeleteNote}
        />
        <Action
          removeAll={this.mainRemoveAll}
          addNote={this.mainAddNote}
        />
      </View>
    );
  }
}

export { NotesMain };
