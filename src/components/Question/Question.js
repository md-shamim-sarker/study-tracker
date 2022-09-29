import React from 'react';
import './Question.css';

const Question = (props) => {
    const {id, question, answer} = props.question;
    return (
        <div className='question'>
            <div>
                <h2><strong>Question-{id}:</strong> {question}</h2>
                <p><strong>Answer:</strong> {answer}</p>
            </div>
        </div>
    );
};

export default Question;