import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
// import { configureStore } from '@reduxjs/toolkit';
// import { Provider } from 'react-redux';

// const store = configureStore({
//   reducer: {},
// }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // this helps to inspect the redux changes

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);