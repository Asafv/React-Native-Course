import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/reducers';
import TempComponent from './src/components/TempComponent';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={Styles.container}>
          <Text>app with redux</Text>
          <TempComponent />
        </View>
      </Provider>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});