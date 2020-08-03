import React from 'react';
import { Link } from 'react-router-dom';
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
            <div className='smurf-list'>
                {!props.smurfs ? (
                    <h3>No Smurfs Found</h3>
                ) : (
                    props.smurfs.map(smurf => {
                        return <Smurf key={smurf.id} smurf={smurf} />
                    })
                )}
            </div>
            <button
                onClick={(e) => getSmurfs(e)}
            >
                Get Smurfs
            </button>
            <button>
                <Link to='/form'>Add Smurf</Link>
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