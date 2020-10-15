import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Storage from './Storage';
import { useSelector } from 'react-redux';

const MovieDetails = ({ navigation, route }) => {
  const movieList = useSelector(state => state.movies.movies);
  console.log('movies =', movieList);

  const { id } = route.params.itemMovie;

  const movie = movieList.find(movie => movie.id === id);
  const {
    poster_path,
    backdrop_path,
    vote_average,
  } = movie;


  console.log(movie);
  const uriPoster = `https://image.tmdb.org/t/p/w500/${poster_path}`
  const uriCover = `https://image.tmdb.org/t/p/w500/${backdrop_path}`
  console.log('item: ', route.params.itemMovie);

  const [rating, setRating] = useState();

  const ratingCompleted = (rating) => {
    console.log("Rating is: " + rating);
    setRating(rating);
    Storage.rating[id] = rating;
  }

  return (
    <View style={{ flex: 1 }}>
      <Image
        style={styles.cover}
        source={{ uri: uriCover }}
        // resizeMethod="auto"
        resizeMode="contain"
      />
      <Image
        style={styles.poster}
        source={{ uri: uriPoster }}
        resizeMode="cover"
      />
      <Text>{vote_average}</Text>
      <Rating
        type='star'
        ratingCount={3}
        imageSize={60}
        showRating
        onFinishRating={ratingCompleted}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  poster: {
    width: '30%',
    height: '15%',
    position: 'absolute',
    left: 10,
    top: 20,
    borderRadius: 5,
  },
  cover: {
    width: '100%',
    height: '30%',
    opacity: 0.5
  }
});

export default MovieDetails;