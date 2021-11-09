import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import rootReducer from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(
//   rootReducer, composeWithDevTools()
// );

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

const store = createStore(
  () => {
    return [
      {
        id: 0,
        name: '멋진신발',
        quan: 2
      }
    ];
  }
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);