import { BROWSE_GET_DATA } from '../actions/types'

const DEFAULT_STATE = {
    //boolean to tell us at all times to tell us if the user is authenticated
    secret: '' 
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case BROWSE_GET_DATA: 
            console.log('[BROWSE] secret has been requested');
            return{ ...state, secret: action.payload }
        default: 
            return state
    }
};