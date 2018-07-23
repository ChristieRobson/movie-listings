import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export const MovieCard = (props) => {
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <Card>
                <CardImg
                    top
                    src={`https://image.tmdb.org/t/p/original/${props.poster_path}`}
                    alt={`Poster for ${props.title}`} />
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
