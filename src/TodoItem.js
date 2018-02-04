import React from 'react';
import { View, Text, Switch } from 'react-native';

const TodoItem = ({ item: { text, isDone }, finish }) => {
 return (
   <View style={Styles.container}>
     <Text style={Styles.text}>{text}</Text>
     <Switch value={isDone} onValueChange={() => finish(text)} />
   </View>
 )
};

const Styles = {
  container: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'blue',
    margin: 5,
    padding: 10,
    alignItems: 'center',
    width: 350,
  },
  text: {flex: 1}
};

export default TodoItem;