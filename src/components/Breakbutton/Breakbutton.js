import React from 'react';
import './Breakbutton.css';

const Breakbutton = ({breakController, time}) => {
    return (
        <div className='break-button'>
            <button onClick={() => breakController(time)}>{time}m</button>
        </div>
    );
};

export default Breakbutton;