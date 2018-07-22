import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export const MovieCard = (props) => {
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <Card>
                <CardImg
                    top
                    src={`https://image.tmdb.org/t/p/original/${props.poster_path}`}
                    alt="Card image cap" />
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <CardSubtitle>Popularity: {props.popularity}</CardSubtitle>
                    <CardText>
                        Genres: {props.genres && props.genres.map(
                            (genre) => {
                                return (<span key={genre.id}>{genre.name} </span>)
                            }
                        )}
                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
};

//
// "vote_count": 213,
//     "id": 460668,
//     "video": false,
//     "vote_average": 6.3,
//     "title": "I Feel Pretty",
//     "popularity": 41.362,
//     "poster_path": "\/iuPs45XIxfARKPLEkCGXWUrBrTR.jpg",
//     "original_language": "en",
//     "original_title": "I Feel Pretty",
//     "genre_ids": [
//     35
// ],
//     "backdrop_path": "\/3Zb4Du20mvKl0jlOtQ6lCFhpiiT.jpg",
//     "adult": false,
//     "overview": "A head injury causes a woman to develop an extraordinary amount of confidence and believe she's drop dead gorgeous.",
//     // "release_date": "2018-04-19"