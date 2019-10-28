import React from 'react';
 
const MovieShow = ({match, movies}) => {
  console.log("match", match)
  console.log("movies", movies)
  return (
    <div>
      <h3>Movies Show Component!</h3>
      { movies[match.params.movieId].title }
    </div>
  );
}
 
export default MovieShow;