import React, {useEffect, useState} from 'react';
import Study from '../Study/Study';
import './Main.css';
import logo from '../../images/logo.png';
import Myself from '../Myself/Myself';
import Breakbutton from '../Breakbutton/Breakbutton';

const Main = () => {
    const [subjects, setSubjects] = useState([]);
    const [breaks, setBreaks] = useState(localStorage.getItem('break-time'));
    const [times, setTimes] = useState(localStorage.getItem('study-time'));

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(res => setSubjects(res))
            .catch(err => console.error(err));
    }, []);

    const breakController = (time) => {
        setBreaks(time);
    };

    const timeController = (time) => {
        setTimes(Number(times) + time);

    };

    useEffect(() => {
        localStorage.setItem('break-time', breaks);
        localStorage.setItem('study-time', times);
    }, [breaks, times]);

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
                                timeController={timeController}
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
                <h2>Study Details</h2>
                <h4>Study Time: {times} Hours</h4>
                <h4>Break Time: {breaks} Minutes</h4>
                <button className='btn'>Study Completed</button>
            </div>

        </div>
    );
};

export default Main;