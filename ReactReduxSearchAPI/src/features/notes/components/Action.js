import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Input } from 'react-native-elements';

const Action = (props) => {

  const addData = () => {
    props.addNote(props.input);
  };

  return (
    <View>
      <Text>
        Action Component
      </Text>
      <TextInput
        label={props.label}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
      />
      <Text>{props.label} {props.input}</Text>
      <Button
        onPress={addData}
        title='Add Book Title'
      />
      <Button
        onPress={props.removeAll}
        title='Remove All'
      />
    </View>
  );
};

export default Action;
