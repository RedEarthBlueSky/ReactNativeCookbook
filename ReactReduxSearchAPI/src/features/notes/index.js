// notes main feature Component
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import notes from './config';
import Notes from './components/Notes';
import Action from './components/Action';

class NotesMain extends Component {
  constructor(props) {
    super(props);
    // good practice
    this.mainRemoveAll = this.mainRemoveAll.bind(this);
    this.mainAddNote = this.mainAddNote.bind(this);
    this.mainDeleteNote = this.mainDeleteNote.bind(this);
    this.state = {
      jsaNotes: notes,
      value: '',
    };
  }

  mainRemoveAll() {
    console.log('Removing all the notes...');
    this.setState({ jsaNotes: [] });
  }

  mainAddNote(note) {
    if (!note) {
      console.log('Book should not be blank');
    } else if (this.state.jsaNotes.indexOf(note) > -1) {
      console.log('Book alread exists');
    } else {
      console.log('Add this title:', note, 'to', this.state);
      //  add element to previous state using spread
      this.setState({ jsaNotes: [...this.state.jsaNotes, note] });
    }
  }

  mainDeleteNote(note) {
    console.log('Delete Book...', note);
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
          addAll={this.mainAddAll}
          placeholder={'Book Input...'}
          label={'New Book:'}
          onChangeText={text => this.setState({ value: text })}
          input={this.state.value}
        />
      </View>
    );
  }
}

export { NotesMain };
