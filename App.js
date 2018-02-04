import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Header from './src/Header';
import TodoList from './src/TodoList';


export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      text: '',
      todos: [],
    };
  }

  onPressAdd = () => {
    const { text, todos } = this.state;
    this.setState({
      todos: [...todos, { text, isDone: false }],
      text: '',
    });
  };

  finish = (text) => {
    const newTodos = this.state.todos.filter(item => item.text !== text);
    this.setState({ todos: newTodos });
  };

  render() {
    const { todos } = this.state;
    return (
      <View style={Styles.container}>
        <Header />
        <View style={{ flexDirection:'row', alignSelf: 'stretch', justifyContent: 'flex-end'}}>
          <TextInput
            style={Styles.input}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
          />
          <Button
            onPress={this.onPressAdd}
            title="ADD"
            color="#841584"
          />
        </View>
        <TodoList list={todos} finish={this.finish} />
      </View>
    )
  }
}


const Styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    flex:1 ,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  }
};