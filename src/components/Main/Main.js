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
    const [breakTime, setBreakTime] = useState(0);
    const [studyTime, setStudyTime] = useState(0);

    // Subject data loading
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(res => setSubjects(res))
            .catch(err => console.error(err));
    }, []);

    // Question & answer data loading
    useEffect(() => {
        fetch('./question.json')
            .then(res => res.json())
            .then(res => setQuestions(res))
            .catch(err => console.error(err));
    }, []);

    // Data retrieve from local storage after reload
    useEffect(() => {
        const storedBreakTime = Number(localStorage.getItem('break-time'));
        const storedStudyTime = Number(localStorage.getItem('study-time'));
        if(storedBreakTime) {
            setBreakTime(storedBreakTime);
        }
        if(storedStudyTime) {
            setStudyTime(storedStudyTime);
        }
    }, []);


    // Set data to local storage for future use
    useEffect(() => {
        localStorage.setItem('break-time', breakTime);
        localStorage.setItem('study-time', studyTime);
    }, [breakTime, studyTime]);

    // State management for break time
    const breakController = time => {
        setBreakTime(time);
    };

    // State management for study time
    const timeController = time => {
        setStudyTime(studyTime + time);
    };

    // Show alert/toast after clicking 'Study Completed' button
    const studyComplete = () => {
        Swal.fire(
            'Good job!',
            'You have completed your study!',
            'success'
        );
    };

    // Clear the local storage item wise
    const clearStorage = () => {
        localStorage.removeItem('break-time');
        localStorage.removeItem('study-time');

        setBreakTime(0);
        setStudyTime(0);

        Swal.fire(
            'Success!',
            'You have cleared local storage!',
            'success'
        );
    };

    return (
        <div className='main'>
            {/* -----------------Left Side Start------------------- */}
            <div className='left-side'>
                <div className='header-part'>
                    <div className='logo-part'>
                        <img src={logo} alt="logo" />
                        <h2>Study Tracker</h2>
                    </div>
                    <h3>Subject Selection</h3>
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
            {/* -----------------Left Side End------------------- */}

            {/* -----------------Right Side Start------------------- */}
            <div className='right-side' data-aos="fade-up">
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
                        <span className='gray'>{studyTime} {studyTime <= 1 ? "Hour" : "Hours"}</span>
                    </h5>
                    <h5 className='time'>
                        <span>Break Time:</span>
                        <span className='gray'>{breakTime} {breakTime <= 1 ? "Minute" : "Minutes"}</span>
                    </h5>
                    <button onClick={studyComplete} className='btn'>Study Completed</button>
                    <button onClick={clearStorage} className='btn'>Clear Storage</button>
                </div>
            </div>
            {/* -----------------Right Side End------------------- */}

            {/* -----------------Question & Answer Start------------------- */}
            <div className='question-answer'>
                <h2 style={{
                    textAlign: "center",
                    marginBottom: "4rem",
                    fontSize: "2rem",
                    color: "#4848f5"
                }} data-aos="fade-up">Question & Answer</h2>
                {
                    questions.map(question => <Question
                        key={question.id}
                        question={question}
                    ></Question>)
                }
            </div>
            {/* -----------------Question & Answer End------------------- */}
        </div>
    );
};

export default Main;