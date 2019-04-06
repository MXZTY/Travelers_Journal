import axios from 'axios';
import { AUTH_SIGN_UP, AUTH_ERROR, AUTH_SIGN_OUT } from './types'



/* 
    Action Creators -> create/return actions -> dispatched -> middlewares -> reducers
    every action will have a type, so when the reducer accepts the action, it knows what to do. 
*/

export const signUp = (data) => {
    return async dispatch => {
        // step 1: use the data and make http request to back end and send it along
        try{
            // step 2: take the back end's response(jwt token)  
            console.log('[Action Creator] signup has been called!')
            const res = await axios.post('http://localhost:3001/users/signup', data);
            console.log('response', res);
            console.log('Action Creator] signup has dispatched an action');

            // step 3: dispatch the message that user just signed up (WITH JWT)
            dispatch({
                type: AUTH_SIGN_UP, 
                payload: res.data.token
            });

            // step 4: save the JWT token into our local storage.
            localStorage.setItem('JWT_TOKEN', res.data.token);
        } catch (err) {
            dispatch({
                type: AUTH_ERROR, 
                payload: 'Email is already in use!'
            });

        };
         
    };
};


export const oauthGoogle = (data) => {
    return async dispatch =>{
        console.log('we have received the data on the server');
        const res = await axios.post('http://localhost:3001/users/oauth/google', {
            access_token: data
        });

        dispatch({
            type: AUTH_SIGN_UP, 
            payload: res.data.token
        });

        localStorage.setItem('JWT_TOKEN', res.data.token);
    };
};

export const signout = () => {
    return dispatch => {
        localStorage.removeItem("JWT_TOKEN");

        dispatch({
            type: AUTH_SIGN_OUT, 
            payload: ''
        });
    };
};