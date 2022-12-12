import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import App from './components/app/app';
import Notification from './components/notification/notification';
import {store} from './store/store';
import {fetchOffers, checkAuthAction} from './store//api-actions';

store.dispatch(fetchOffers());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <ToastContainer />
    <Notification />
    <App />
  </Provider>
);
