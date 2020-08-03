import { useState } from 'react';

export default function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);

    const handleChanges = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    const clearForm = e => {
        //Return the values to their defaults
        setValues({
            initialValues
        });
    }

    return [values, handleChanges, clearForm];
};