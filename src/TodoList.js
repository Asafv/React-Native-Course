import React from 'react';
import { ScrollView } from 'react-native';
import TodoItem from './TodoItem';


const TodoList = ({ list, finish }) => {
  return (
      <ScrollView contentContainerStyle={Styles.container}>
        {list.map(item => <TodoItem item={item} finish={finish} />)}
      </ScrollView>
  )
};

const Styles = {
  container: {
    // backgroundColor: 'red',
  }
};

export default TodoList;