import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Construction from './components/Construction';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Construction />, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
  module.hot.accept()
}
