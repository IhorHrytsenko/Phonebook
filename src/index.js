import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {PersistGate} from 'redux-persist/es/integration/react';
import {persistor, store} from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';

ReactDOM.render(

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
      </PersistGate>
    </Provider>

,document.getElementById('root'));
