import React from "react";
import MovieCard from "./Moviecard";

class MovieList extends React.Component{

  render(){
      //const {title, plot, price, rating, stars, fav, isInCart, poster} = this.state.movies;
      const {movies, addStars, decStars, toggleFav, toggleCart} = this.props;
      
      return(
          <>

          {movies.map((movie) => <MovieCard movies={movie} 
                                            addStars={addStars}
                                            decStars={decStars}
                                            toggleFav={toggleFav}
                                            toggleCart={toggleCart}
                                            key={movie.id} />)}

          </>
      )
  }

}

export default MovieList;