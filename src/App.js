import React, { Component } from 'react';
import './App.css';
import find from 'lodash/find';
import sortBy from 'lodash/sortBy';
import { RatingsFilter } from './components/RatingsFilter';
import { MovieCards } from './components/MovieCards';

// import * as mockData from './mocks/nowPlaying.json';
// import * as mockGenres from './mocks/genres.json';

class App extends Component {
    constructor() {
        super();
        this.state = {
            movies: {},
            genres: undefined,
            minRating: 3
        };

        this.changeMinRating = this.changeMinRating.bind(this);
    }

  componentDidMount() {
      const apiKey = '920e71035c6e72abb5b39efe5a235a6f';
      const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
      const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;
      fetch(nowPlayingUrl)
          .then(response => response.json())
          .then(data => this.setState({movies: data}));

      fetch(genreUrl)
          .then(response => response.json())
          .then(data => this.setState({genres: data.genres}));
  }

  changeMinRating(event) {
      this.setState({minRating: event.target.value});
  }

  render() {
      let {movies, genres, minRating} = this.state;

      // Filter movies so we just get the ones with a vote_average the same or higher than the rating filter
      let filteredMovies = movies.results ? (movies.results).filter((movie) => movie.vote_average >= minRating) : [];

      // Sort movies with most popular first
      let sortedMovies = sortBy(filteredMovies, ['-popularity']);

      let sortedMoviesWithGenreNames;

      // THe movie api comes back without genre names, so add these from the genre API
      if (sortedMovies && sortedMovies.length > 0 && genres) {
          sortedMoviesWithGenreNames = sortedMovies.map((movie)=> {
              movie.genres = movie.genre_ids.map((genre) => {
                  return find(genres, {id: genre})
              });
              return movie;
          });
      }

      return (
          <div className="container">
              <h1>Movie Listings</h1>
              <h2>Now Playing</h2>
              <RatingsFilter value={minRating} onChange={this.changeMinRating}/>
              { sortedMoviesWithGenreNames && <MovieCards movies={sortedMoviesWithGenreNames}/>}
          </div>
      )
  }
}

export default App;
