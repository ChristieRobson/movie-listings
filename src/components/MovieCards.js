import React from 'react';
import { MovieCard } from './MovieCard';

export const MovieCards = (props) => {
    console.log('HERE', props);
    return (
        <div className="row">
            {props.movies.length > 0 &&
                props.movies.map((movie) =>
                    <MovieCard {...movie} key={movie.id}/>
                )
            }
        </div>
    )
};
