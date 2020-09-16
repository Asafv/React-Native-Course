import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, Image, Pressable } from 'react-native';
import axios from 'axios';

const MovieList = ({ navigation }) => {

  const [movies, setMovies] = useState([]);

  const doAsyncWork = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=9aee34c8e909ac4459bb9c2d0ff6dd41&language=en-US&page=1`)
    console.log('finish remote async work.')
    console.log('res=', res.data);
    setMovies(res.data.results);
  }

  // hook - render
  useEffect(() => {
    // 1. fetch data (movies) from remote - url
    console.log('useEffect triggered');
    doAsyncWork();
  }, []);

  // 2. get the data (movies) - display on screen
  const renderItem = ({ item }) => {
    const uri = `https://image.tmdb.org/t/p/w500/${item.poster_path}`
    
    return (
      <Pressable onPress={() => {
        console.log('press button');        
        navigation.navigate('MovieDetails', { item });
      }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 25 }}
            source={{ uri }}
          />
          <Text style={{
            left: 30,
            color: 'yellow',
            fontSize: 20
          }}>{item.title}</Text>
        </View >
      </Pressable>
    )
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item, i) => i.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      />
    </View>
  );
};

export default MovieList;