import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { configureStore } from './store'
import Home from './components/Home';
import "./app.css"

const { store, persistor } = configureStore();
window.document.title = 'Zack Steam';
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <Home/>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);