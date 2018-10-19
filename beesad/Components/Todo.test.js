import React from 'react';
import Todo from './Todo';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<Todo />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('test if delete note function is called', () => {
    let array = [1,2,3,4,5]
    const tree = renderer.create(<Todo/>).getInstance();
    tree.noteArray = array;
    tree.deleteNote(3);
    expect(Object.is(tree.noteArray, [1,2,4,5]));

});
