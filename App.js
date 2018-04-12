import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/reducers';
import ListingList from './src/components/ListingList';
import { MapView, Location, Permissions } from 'expo';
import Router from './src/Router';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

export default class App extends React.Component {

  constructor(props) {
    super(props);

  }

  async componentWillMount()   {

  }

  render() {

    return (
      <Provider store={store}>
        <View style={Styles.container}>
          <Router />

        </View>
      </Provider>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 20,
  },
});
