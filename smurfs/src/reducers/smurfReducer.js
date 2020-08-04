import {
     GET_SMURFS_START,
     GET_SMURFS_SUCCESS,
     GET_SMURFS_FAILURE
} from '../actions/index.js';

const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''
};

export const smurfReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_SMURFS_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case GET_SMURFS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfs: action.payload
            };
        case GET_SMURFS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
};