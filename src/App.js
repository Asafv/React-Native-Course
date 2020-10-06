import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';

const Stack = createStackNavigator();

const App = () => {

  return (
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
  );
};

export default App;