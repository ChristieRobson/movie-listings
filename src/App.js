import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { MovieCard } from './components/MovieCard';
import find from 'lodash/find';
import sortBy from 'lodash/sortBy';

import * as mockData from './mocks/nowPlaying.json';
import * as mockGenres from './mocks/genres.json';

class App extends Component {
    constructor() {
        super();
        this.state = {
            movies: mockData,
            genres: mockGenres.genres
        }
    }

  componentDidMount() {
      // const apiKey = '920e71035c6e72abb5b39efe5a235a6f';
      // const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
      // const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;
      // fetch(url)
      //     .then(function(response) {
      //         return response.json();
      //     })
      //     .then(function(myJson) {
      //         console.log(myJson);
      //     });

      // fetch(genreUrl)
      //     .then(function(response) {
      //         return response.json();
      //     })
      //     .then(function(myJson) {
      //         console.log(myJson);
      //     });
  }

  render() {
      let {movies, genres} = this.state;

      let sortedMovies = sortBy(movies.results, ['-popularity']);

      let sortedMoviesWithGenreNames;

      if (sortedMovies && sortedMovies.length > 0 && genres) {
          sortedMoviesWithGenreNames = sortedMovies.map((movie)=> {
              let namedGenres = movie.genre_ids.map((genre) => {
                  return find(genres, {id: genre})
              });
              movie.genres = namedGenres;
              return movie;
          });
      }

      return (
          <div className="container">
              <h1>Movie Listings - Now Playing</h1>
              <div className="row">
                  {sortedMoviesWithGenreNames &&
                  sortedMoviesWithGenreNames.map((movie) =>
                      <MovieCard {...movie} key={movie.id}/>
                        )
                  }
              </div>
          </div>
      )
  }
}

export default App;
