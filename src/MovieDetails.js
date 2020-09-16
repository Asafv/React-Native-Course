import React from 'react';
import { View, Text } from 'react-native';

const MovieDetails = ({ route, navigation }) => {
  const { item } = route.params;
  console.log('item = ', item);
  return (
    <View>
      <Text>movie details</Text>
      <Text>{JSON.stringify(item)}</Text>
    </View>
  )
};

export default MovieDetails;