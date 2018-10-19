import React from 'react';
import Calender from './Calender';
import renderer from 'react-test-renderer';


test('renders correctly', () => {
    const tree = renderer.create(<Calender />).toJSON();
    expect(tree).toMatchSnapshot();
});
