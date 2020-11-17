import React, { useEffect, useState } from 'react';
import { Text, FlatList, View, Image, Pressable, StyleSheet } from 'react-native';
import axios from 'axios';
import Storage from '../Storage';
import { useDispatch } from 'react-redux';

import GridList from 'react-native-grid-list';

const MovieList = ({ navigation, children }) => {

  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  console.log(children);
  const fetchMoviesAsync = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=9aee34c8e909ac4459bb9c2d0ff6dd41&language=en-US&page=1`)
    console.log('finish remote async work.')
    console.log('res=', res.data);
    dispatch({ type: 'fetch_movies', movies: res.data.results });
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
    const uri = `https://image.tmdb.org/t/p/w500/${item.poster_path}`
    const itemMovie = { ...item };
    return (
      <Pressable 
        style={styles.container}
        onPress={() => {
        console.log('press button');
        navigation.navigate('MovieDetails', { itemMovie });
      }}>
          <Image
            style={styles.image}
            source={{ uri }}
          />
      </Pressable>
    )
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
          numColumns={3}
          renderItem={renderItem}
          />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  image: {
    // justifyContent: 'center',
    // alignItems: 'stretch',
    height: 140,
    margin: 2,
  },
});

export default MovieList;