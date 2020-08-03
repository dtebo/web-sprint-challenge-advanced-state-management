import React from 'react';

import useForm from '../../hooks/useForm';

import './form.css';

const initialValues = {
    name: '',
    age: 0,
    height: ''
};

const SmurfForm = props => {
    const [values, handleChanges, clearForm] = useForm(initialValues);

    const handleSubmit = e => {
        e.preventDefault();


    };

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name: </label>
            <input
                type='text'
                name='name'
                id='name'
                placeholder='Smurf Name'
            />
            <label htmlFor='age'>Age: </label>
            <input
                type='text'
                name='age'
                id='age'
                placeholder='Age'
            />
            <label htmlFor='height'>Height: </label>
            <input
                type='text'
                name='height'
                id='height'
                placeholder='Height'
            />
        </form>
    );
};

export default SmurfForm;