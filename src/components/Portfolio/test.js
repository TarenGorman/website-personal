import React from 'react';
import ReactDOM from 'react-dom';
import About from './Portfolio';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Portfolio />, div);
});
