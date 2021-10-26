import React from 'react';
import renderer from 'react-test-renderer';
import FilterButton from '../components/FilterButton';

test('Dashed border appears when button is pressed', () => {
  const component = renderer.create(
    <FilterButton
      key="test-key"
      name="test-name"
      isPressed="false"
      setFilter="Completed"
    ></FilterButton>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});