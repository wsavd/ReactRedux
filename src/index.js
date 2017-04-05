import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import App from './components/app'
import Home from './components/home'
import Item0 from './components/Item0'
import Item1 from './components/Item1'

import reducers from './reducers';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <App>
        <Route exact path="/" component={Home}/>
        <Route path="/item0" component={Item0}/>
        <Route path="/item1" component={Item1}/>
      </App>  
    </Router>
  </Provider>,
  document.getElementById('root')
);
