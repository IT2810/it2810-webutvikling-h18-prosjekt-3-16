import React from 'react';
import Todo from './Todo';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<Todo />).toJSON();
    expect(tree).toMatchSnapshot();
});