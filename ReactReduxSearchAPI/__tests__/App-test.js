//  snapshot Jest
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

test('App Snapshot', () => {
  const snap = renderer.create(
    <App />
  ).toJSON();

  expect(snap).toMatchSnapshot();
})
