import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import * as mockMovies from './mocks/nowPlaying.json';
import * as mockGenres from './mocks/genres.json';

it('renders without crashing', () => {

    const mockResponse = (status, statusText, response) => {
        return new window.Response(response, {
            status: status,
            statusText: statusText,
            headers: {
                'Content-type': 'application/json'
            }
        });
    };

    window.fetch = jest.fn()
        .mockImplementationOnce(() =>
            Promise.resolve(mockResponse(200, null, JSON.stringify({data: mockMovies})))
        )
        .mockImplementationOnce(() =>
            Promise.resolve(mockResponse(200, null, JSON.stringify({data: mockGenres})))
        );

    let component = shallow(<App />);
    expect(component).toMatchSnapshot();
});