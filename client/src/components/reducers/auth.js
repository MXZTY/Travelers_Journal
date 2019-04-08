import { 
    AUTH_SIGN_UP, 
    AUTH_SIGN_OUT,
    AUTH_ERROR,
    AUTH_SIGN_IN } from '../actions/types'

const DEFAULT_STATE = {
    //boolean to tell us at all times to tell us if the user is authenticated
    isAuthenticated: false, 
    token: '', 
    errorMessage: ''
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case AUTH_SIGN_UP:
            console.log('[AuthReducer] has received a AUTH_SIGN_UP action');
            return { ...state, token: action.payload, isAuthenticated: true, errorMessage: '' }
        case AUTH_SIGN_IN:
            console.log('[AuthReducer] has received a AUTH_SIGN_IN action');
            return { ...state, token: action.payload, isAuthenticated: true, errorMessage: '' }
        case AUTH_SIGN_OUT: 
            return { ...state, token: action.payload, isAuthentivated: false, errorMessage: ''}
        case AUTH_ERROR:
            console.log('[AuthReducer] has received a AUTH_ERROR action');
            return {...state, errorMessage: action.payload }
        default: 
            return state
    }
};