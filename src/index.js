import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import style from './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';

const createStoreWithMiddleWare = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleWare(reducers)}>
        <App/>
    </Provider>, document.getElementById('app-container'));