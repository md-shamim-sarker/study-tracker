import React, {useEffect, useState} from 'react';
import Study from '../Study/Study';
import './Main.css';
import logo from '../../images/logo.png';

const Main = () => {
    //Data load from api
    const [subjects, setSubjects] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(res => setSubjects(res))
            .catch(err => console.error(err));
    }, []);
    // console.log(subjects);

    return (
        <div className='main'>
            <div>
                {/* <div className='header-part'>
                    <div className='logo-part'>
                        <img src={logo} alt="logo" />
                        <div>
                            <h2>Study Tracker</h2>
                            <h3>Subject Selection</h3>
                        </div>
                    </div>
                </div> */}
                <div className='left-side'>
                    <div className='header-part'>
                        <img src={logo} alt="logo" />
                        <div>
                            <h2>Study Tracker</h2>
                            <h3>Subject Selection</h3>
                        </div>
                    </div>
                    <div className='subject-cards'>
                        {
                            subjects.map(subject => <Study
                                key={subject.id}
                                subject={subject}
                            ></Study>)
                        }
                    </div>
                </div>
            </div>
            <div className='right-side'>

            </div>
        </div>
    );
};

export default Main;