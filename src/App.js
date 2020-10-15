import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import movieReducer from './MovieReducer';
import userReducer from './UserReducer';

const Stack = createStackNavigator();



const App = () => {
  const store = createStore(combineReducers({
    movies: movieReducer,
    users: userReducer
  }));
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MovieList"
            component={MovieList}
            options={{ title: 'movies app' }}
          />
          <Stack.Screen
            name="MovieDetails"
            component={MovieDetails}
            options={({ route }) => ({
              title: route.params.itemMovie.title
            })}

          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;