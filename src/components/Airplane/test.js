import React from 'react';
import ReactDOM from 'react-dom';
import Construction from './Construction';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Construction />, div);
});
