import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import newsReducer from './reducers/news-reducer';
import App from './components/App';
import './index.css';

const store = createStore(newsReducer);

// store.subscribe(() =>
//   console.log('subscribe', store.getState())
// );

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);

if(module.hot) {
  module.hot.accept();
}
