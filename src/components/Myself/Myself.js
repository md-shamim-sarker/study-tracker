import React from 'react';
import './Myself.css';
import myImage from '../../images/shamim.jpg';
import locationImage from '../../images/geo-alt.svg';

const Myself = () => {
    return (
        <div className='myself'>
            <div className='img-part'>
                <img src={myImage} alt="my_image" />
                <div style={{textAlign: "left"}}>
                    <h3 style={{display: "inline"}}>Md. Shamim Sarker</h3><br />
                    <div style={{display: "flex"}}>
                        <img src={locationImage} alt="location_image" />
                        <small>Lalmonirhat, Bangladesh</small>
                    </div>
                </div>
            </div>
            <div className='info-part'>
                <p>I am from Lalmonirhat. I have graduted from Begum Rokeya University, Rangpur.</p>
            </div>
        </div>
    );
};

export default Myself;