import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import i18n from './i18next';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import cartReducer from "./features/cart";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // this helps to inspect the redux changes

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);