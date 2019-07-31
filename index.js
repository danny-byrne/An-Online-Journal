/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description entry point for application.  Hangs React app off of #contents in index.html
 *
 * ************************************
 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store.js';

const HelloComponent = () => {
  return <h1>Hello World!</h1>;
}


render(
  // wrap the App in the Provider and pass in the store
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

/**
 * The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function.

Since any React component in a React Redux app can be connected, most applications will render a <Provider> at the top level, with the entire app’s component tree inside of it.

Normally, you can’t use a connected component unless it is nested inside of a <Provider>.
 */

/**
 * https://jasonwatmore.com/post/2016/06/22/nodejs-setup-simple-http-server-local-web-server
 * 
 * to start server
 */


