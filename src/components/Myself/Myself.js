import React from 'react';
import './Myself.css';
import myImage from '../../images/shamim.jpg';

const Myself = () => {
    return (
        <div className='myself'>
            <div className='img-part'>
                <img src={myImage} alt="my_image" />
                <div>
                    <h3 style={{display: "inline"}}>Md. Shamim Sarker</h3><br />
                    <span>Lalmonirhat, Bangladesh</span>
                </div>
            </div>
            <div className='info-part'>
                <p>I am from Lalmonirhat. I have graduted from Begum Rokeya University, Rangpur.</p>
            </div>
        </div>
    );
};

export default Myself;