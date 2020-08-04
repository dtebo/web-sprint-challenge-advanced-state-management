import React from 'react';
import { connect } from 'react-redux';

import useForm from '../../hooks/useForm';

import { postSmurf } from '../../actions/index';

import './form.css';

const initialValues = {
    name: '',
    age: 0,
    height: ''
};

const SmurfForm = props => {
    const [values, handleChanges, clearForm] = useForm(initialValues);

    const postSmurf = smurf => {
        props.postSmurf(smurf);
    };

    const handleSubmit = e => {
        e.preventDefault();

        postSmurf(values);

        props.history.push('/');
    };

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name: </label>
            <input
                type='text'
                name='name'
                id='name'
                value={values.name}
                onChange={handleChanges}
                placeholder='Smurf Name'
            />
            <label htmlFor='age'>Age: </label>
            <input
                type='text'
                name='age'
                id='age'
                value={values.age}
                onChange={handleChanges}
                placeholder='Age'
            />
            <label htmlFor='height'>Height: </label>
            <input
                type='text'
                name='height'
                id='height'
                value={values.height}
                onChange={handleChanges}
                placeholder='Height'
            />
            <button
                type='submit'
            >
                Add Smurf
            </button>
        </form>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { postSmurf })(SmurfForm);