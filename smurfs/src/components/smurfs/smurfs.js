import React from 'react';

import { connect } from 'react-redux';

import { getSmurfs } from '../../actions/index';

import Smurf from './smurf';

import './smurfs.css';

const Smurfs = props => {
    const getSmurfs = e => {
        e.preventDefault();

        props.getSmurfs();
    };

    return (
        <>
            {!props.smurfs ? (
                <h3>No Smurfs Found</h3>
            ) : (
                props.smurfs.map(smurf => {
                    return <Smurf key={smurf.id} smurf={smurf} />
                })
            )}
            <button
                onClick={(e) => getSmurfs(e)}
            >
                Get Smurfs
            </button>
        </>
    )
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { getSmurfs })(Smurfs);