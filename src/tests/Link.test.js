import React from 'react';
import renderer from 'react-test-renderer';
import Link from '../components/Link';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="http://www.wikipedia.com">Wikipedia</Link>,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();

  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();

  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});