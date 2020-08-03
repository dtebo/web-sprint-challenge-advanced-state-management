import axios from 'axios';

export const GET_SMURFS_START = 'GET_SMURFS_START';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const GET_SMURFS_FAILURE = 'GET_SMURFS_FAILURE';

export const POST_SMURF_START = 'POST_SMURF_START';
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';
export const POST_SMURF_FAILURE = 'POST_SMURF_FAILURE';

const BASE_URL = 'http://localhost:3333';

export const getSmurfs = () => dispatch => {
    dispatch({ type: GET_SMURFS_START });

    axios.get(`${BASE_URL}/smurfs`)
        .then(resp => {
            dispatch({ type: GET_SMURFS_SUCCESS, payload: resp.data });
        })
        .catch(err => dispatch({ type: GET_SMURFS_FAILURE, payload: err}))
};

export const postSmurf = smurf => dispatch => {
    dispatch({ type: POST_SMURF_START });

    axios.post(`${BASE_URL}/smurfs`, smurf)
        .then(resp => {
            dispatch({ type: POST_SMURF_SUCCESS, payload: resp.data });
        })
        .catch(err => dispatch({ type: POST_SMURF_FAILURE, payload: err}));
};