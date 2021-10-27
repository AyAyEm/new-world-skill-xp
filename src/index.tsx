import React from 'react';
import ReactDOM from 'react-dom';
import { Workbox } from 'workbox-window';

import { Home } from '#pages/home';

import './index.scss';

if ('serviceWorker' in navigator) {
  const wb = new Workbox('service-worker.js');

  wb.register();
}

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root'),
);
