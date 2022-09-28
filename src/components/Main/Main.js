import React, {useEffect, useState} from 'react';
import Study from '../Study/Study';
import './Main.css';
import logo from '../../images/logo.png';
import Myself from '../Myself/Myself';
import Breakbutton from '../Breakbutton/Breakbutton';

const Main = () => {
    const [subjects, setSubjects] = useState([]);
    const [breaks, setBreaks] = useState(localStorage.getItem('time'));

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(res => setSubjects(res))
            .catch(err => console.error(err));
    }, []);

    const breakController = (time) => {
        setBreaks(time);
        localStorage.setItem('time', time);
    };

    return (
        <div className='main'>
            <div>
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
                <Myself></Myself>
                <h2>Add A Break</h2>
                <div className='break-btn-container'>
                    <Breakbutton time={10} breakController={breakController}></Breakbutton>
                    <Breakbutton time={15} breakController={breakController}></Breakbutton>
                    <Breakbutton time={20} breakController={breakController}></Breakbutton>
                    <Breakbutton time={25} breakController={breakController}></Breakbutton>
                    <Breakbutton time={30} breakController={breakController}></Breakbutton>
                </div>
                <h2>{breaks}m</h2>
            </div>
        </div>
    );
};

export default Main;