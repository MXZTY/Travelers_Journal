import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth'

// this is the reducer for the form on the login and signup pages
export default combineReducers({
    form: formReducer,
    auth: authReducer
});