import React from 'react';
import ReactDOM from 'react-dom';
import ReactNestedMenu from './../ReactNestedMenu';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReactNestedMenu />, div);
});
