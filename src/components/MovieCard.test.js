import React from 'react';
import { shallow } from 'enzyme';
import { MovieCard } from './MovieCard';

it('renders MovieCard', () => {
    const movieStub = {
        poster_path: 'abc123',
        title: 'A movie title',
        popularity: 88.123,
        genres : [
            {
                "id": 28,
                "name": "Action"
            },
            {
                "id": 12,
                "name": "Adventure"
            }
        ]
    };
    let component = shallow(<MovieCard {...movieStub}/>);
    expect(component).toMatchSnapshot();
});