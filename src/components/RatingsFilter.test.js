import React from 'react';
import { shallow } from 'enzyme';
import { RatingsFilter } from './RatingsFilter';

it('renders RatingsFilter', () => {
    const value = 5;
    const noop = () => {};
    let component = shallow(<RatingsFilter value={value} onChange={noop}/>);
    expect(component).toMatchSnapshot();
});