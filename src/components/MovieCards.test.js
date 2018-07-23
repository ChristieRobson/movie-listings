import React from 'react';
import { shallow } from 'enzyme';
import { MovieCards } from './MovieCards';

it('renders MovieCards with 2 movies', () => {
    const moviesStub = [
        {
            id: 1,
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
        }, {
            id: 2,
            poster_path: 'an456',
            title: 'Another movie ',
            popularity: 6.6,
            genres : [
                {
                    "id": 16,
                    "name": "Animation"
                }
            ]
        }
    ];
    let component = shallow(<MovieCards movies={moviesStub}/>);
    expect(component).toMatchSnapshot();
});