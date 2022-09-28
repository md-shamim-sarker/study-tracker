import React, {useEffect, useState} from 'react';
import Study from '../Study/Study';
import './Main.css';
import logo from '../../images/logo.svg';
import Myself from '../Myself/Myself';
import Breakbutton from '../Breakbutton/Breakbutton';
import Swal from 'sweetalert2';

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

    const studyComplete = () => {
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        );
    };

    return (
        <div className='main'>
            <div className='left-side'>
                <div className='header-part'>
                    <div className='logo-part'>
                        <img src={logo} alt="logo" />
                        <h2>Study Tracker</h2>
                    </div>
                    <h3>Subject Selection Part</h3>
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
                <button onClick={studyComplete} className='btn'>Study Completed</button>
            </div>

        </div>
    );
};

export default Main;