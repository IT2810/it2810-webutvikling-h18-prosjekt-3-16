import React from 'react';
import Map from './Map';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<Map />).toJSON();
    expect(tree).toMatchSnapshot();
});