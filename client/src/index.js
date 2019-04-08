import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import axios from 'axios';

// the createStore requires a reducer and an initial state (object {} contains all values of our application state)
// the store can then dispatch events based on their defined type. 
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 

// when an reducer is fired, the reducer receives the state, and defines what action should be carried out based on the actions payload
// this allows for one action to trigger multiple side effects, that are all completely decoupled from eachother
import reducers from './components/reducers/reducers.js';
import reduxThunk from 'redux-thunk'
import { AssertionError } from 'assert';

const jwtToken = localStorage.getItem('JWT_TOKEN');
const apiKey = localStorage.getItem('apikey');
axios.defaults.headers.common['Authorization'] = jwtToken;

ReactDOM.render(
    <Provider store={createStore( reducers, { 
        auth: {
            token: jwtToken, 
            apikey: apiKey,
            isAuthenticated: jwtToken ? true : false
        }
    }, applyMiddleware(reduxThunk))}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
