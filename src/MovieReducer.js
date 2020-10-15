const initialData = {
  movies: ['movie1','movie2'],
  tempStaticName: 'movieDBapp',
  tags: [],
  images: [],
};

const movieReducer = (state = initialData, action) => {
  switch (action.type) {
    case 'fetch_movies':
      return {
        ...state,
        movies: action.movies
      };
    default: return state;
  }
}

export default movieReducer;