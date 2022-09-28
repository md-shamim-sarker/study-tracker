import React, {useEffect, useState} from 'react';
import Study from '../Study/Study';
import './Main.css';
import logo from '../../images/logo.svg';
import Myself from '../Myself/Myself';
import Breakbutton from '../Breakbutton/Breakbutton';
import Swal from 'sweetalert2';
import Question from '../Question/Question';

const Main = () => {
    const [subjects, setSubjects] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [breaks, setBreaks] = useState(0);
    const [times, setTimes] = useState(0);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(res => setSubjects(res))
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        fetch('./question.json')
            .then(res => res.json())
            .then(res => setQuestions(res))
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        const storedBreakTime = Number(localStorage.getItem('break-time'));
        const storedStudyTime = Number(localStorage.getItem('study-time'));
        if(storedBreakTime) {
            setBreaks(storedBreakTime);
        }
        if(storedStudyTime) {
            setTimes(storedStudyTime);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('break-time', breaks);
        localStorage.setItem('study-time', times);
    }, [breaks, times]);

    const breakController = breakTime => {
        setBreaks(breakTime);
    };

    const timeController = studyTime => {
        setTimes(times + studyTime);
    };

    const studyComplete = () => {
        Swal.fire(
            'Good job!',
            'You have completed your study!',
            'Success'
        );
    };

    const clearStorage = () => {
        localStorage.removeItem('break-time');
        localStorage.removeItem('study-time');

        setBreaks(0);
        setTimes(0);

        Swal.fire(
            'Success',
            'Local storage is cleared!'
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
                <div className='activity'>
                    <Myself></Myself>
                    <h3>Add A Break</h3>
                    <div className='break-btn-container'>
                        <Breakbutton time={10} breakController={breakController}></Breakbutton>
                        <Breakbutton time={15} breakController={breakController}></Breakbutton>
                        <Breakbutton time={20} breakController={breakController}></Breakbutton>
                        <Breakbutton time={25} breakController={breakController}></Breakbutton>
                        <Breakbutton time={30} breakController={breakController}></Breakbutton>
                    </div>
                    <h3>Study Details</h3>
                    <h5 className='time'>
                        <span>Study Time:</span>
                        <span className='gray'>{times} Hours</span>
                    </h5>
                    <h5 className='time'>
                        <span>Break Time:</span>
                        <span className='gray'>{breaks} Minutes</span>
                    </h5>
                    <button onClick={studyComplete} className='btn'>Study Completed</button>
                    <button onClick={clearStorage} className='btn'>Clear Storage</button>
                </div>
            </div>
            <div className='question-answer'>
                {
                    questions.map(question => <Question
                        key={question.id}
                        question={question}
                    ></Question>)
                }
            </div>
        </div>
    );
};

export default Main;