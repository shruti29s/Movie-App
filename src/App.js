import React from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import {movies} from "./moviesdata"

class App extends React.Component {

  constructor(){
    super();
    this.state = {
        movies : movies,
        cartCount: 0
    }
    //this.addStars=this.addStars.bind(this);
    // this.decStars=this.decStars.bind(this);
  }

  handleIncStars = (movie) => {
      const {movies} = this.state

      const mid = movies.indexOf(movie);

      if(movies[mid].star>=5)
          return;

      movies[mid].star += 0.5;

      this.setState({
          movies: movies
      })
  }

  handleDecStars = (movie) => {
    const {movies} = this.state

    const mid = movies.indexOf(movie);

    if(movies[mid].star<=0)
        return;

    movies[mid].star -= 0.5;

    this.setState({
        movies: movies
    })
  }

  handleToggleFav = (movie) => {
    const {movies} = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].fav = !movies[mid].fav;
    this.setState({
      movies: movies
    })
  }

  handleToggleCart = (movie) => {
    const {movies} = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].isInCart = !movies[mid].isInCart;
    this.setState({
      movies: movies
    })
  }

  render(){

    const {movies} = this.state;

    return (
      <>
      <Navbar/>
      <MovieList movies = {movies}
                 addStars = {this.handleIncStars}
                 decStars = {this.handleDecStars}
                 toggleFav = {this.handleToggleFav}
                 toggleCart = {this.handleToggleCart}/>
      </>
    );
  }
}

export default App;
