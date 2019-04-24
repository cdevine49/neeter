import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  if (!window.currentUser.id || !window.currentUser.email || !window.currentUser.fullName) {
    window.currentUser = null;
  }
  const preloadedState = { session: { currentUser: window.currentUser } };
  const store = configureStore(preloadedState);
  delete window.currentUser;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
