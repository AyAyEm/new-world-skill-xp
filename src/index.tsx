import React from 'react';
import ReactDOM from 'react-dom';

import { Home } from '#pages/home';

import './index.scss';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').catch((registrationError) => {
      // eslint-disable-next-line no-console
      console.error('SW registration failed: ', registrationError);
    });
  });
}

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root'),
);
