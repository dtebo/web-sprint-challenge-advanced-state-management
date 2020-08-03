import axios from 'axios';

export const GET_SMURFS_START = 'GET_SMURFS_START';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const GET_SMURFS_FAILURE = 'GET_SMURFS_FAILURE';

export const getSmurfs = () => dispatch => {
    dispatch({ type: GET_SMURFS_START });

    axios.get('http://localhost:3333/smurfs')
        .then(resp => {
            dispatch({ type: GET_SMURFS_SUCCESS, payload: resp.data });
        })
        .catch(err => dispatch({ type: GET_SMURFS_FAILURE, payload: err}))
};