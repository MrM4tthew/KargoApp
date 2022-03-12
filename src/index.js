import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.scss';
import { BrowserRouter as Router} from "react-router-dom";
import App from './App';

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './redux/reducers';

const store = createStore(reducers, compose(applyMiddleware(thunk)))
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);