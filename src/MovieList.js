import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, Image, Pressable } from 'react-native';
import axios from 'axios';
import Storage from './Storage';

const MovieList = ({ navigation }) => {

  const [movies, setMovies] = useState([]);

  const fetchMoviesAsync = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=9aee34c8e909ac4459bb9c2d0ff6dd41&language=en-US&page=1`)
    console.log('finish remote async work.')
    console.log('res=', res.data);
    setMovies(res.data.results);
  }

  console.log('Storage', Storage);

  // hook - render
  useEffect(() => {
    // 1. fetch data (movies) from remote - url
    console.log('useEffect triggered');
    fetchMoviesAsync();
  }, []);

  useEffect(() => { console.log('another render') });
  // 2. get the data (movies) - display on screen
  const renderItem = ({ item }) => {
    console.log(item)
    const uri = `https://image.tmdb.org/t/p/w500/${item.poster_path}`
    const itemMovie = { ...item };
    return (
      <Pressable onPress={() => {
        console.log('press button');
        navigation.navigate('MovieDetails', { itemMovie });
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
          <Text style={{
            color: 'blue',
            fontSize: 20
          }}>{Storage.rating[item.id]}</Text>
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