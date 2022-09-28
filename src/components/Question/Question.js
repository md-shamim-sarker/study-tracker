import React from 'react';
import './Question.css';

const Question = (props) => {
    const {id, question, answer} = props.question;
    return (
        <div className='question'>
            <div>
                <h2>Question-{id}. {question}</h2>
                <h4>Answer: {answer}</h4>
            </div>
        </div>
    );
};

export default Question;