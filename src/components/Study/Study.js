import React from 'react';
import './Study.css';

const Study = (props) => {

    const {subject, details, difficulty, time, image} = props.subject;
    const {timeController} = props;

    return (
        <div className='study'>
            <img src={image} alt="subject_image" />
            <div className='study-info'>
                <h2>{subject}</h2><br />
                <small>{details}</small><br /><br />
                <small><strong>Difficulty Level: {difficulty}</strong></small><br />
                <small><strong>Required Time: {time}</strong></small><br /><br />
                <button className='btn' onClick={() => timeController(time)}>Start Study</button>
            </div>
        </div>
    );
};

export default Study;