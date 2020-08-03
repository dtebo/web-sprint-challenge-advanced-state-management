import React from 'react';

import { connect } from 'react-redux';

import { getSmurfs } from '../actions/index';

const Smurfs = () => {
    return (
        <>
            {!props.smurfs ? (
                <h3>No Smurfs Found</h3>
            ) : (
                {props.smurfs.map(smurf => {
                    return <Smurf smurf={smurf} />
                })}
            )}
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