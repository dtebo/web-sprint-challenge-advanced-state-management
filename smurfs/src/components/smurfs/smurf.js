import React from 'react';

const Smurf = props => {
    const { smurf } = props;

    return (
        <div className='smurf-card'>
            <section className='header'>
                <h2>{smurf.name}</h2>
            </section>
            <section className='content'>
                <p>Age: {smurf.age}</p>
                <p>Height: {smurf.height}</p>
            </section>
        </div>
    );
};

export default Smurf;