import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// special helper to pass the store as prop to all the components
import { Provider } from 'react-redux'

// create a redux store
import { createStore } from 'redux'
import portFolioApp from './reducers'
let store = createStore(portFolioApp)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
