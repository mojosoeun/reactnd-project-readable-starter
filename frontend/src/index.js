import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import reducers from './reducers'
import ReduxThunk from 'redux-thunk'

const reducer = combineReducers(Object.assign({}, reducers));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(ReduxThunk))
);

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
