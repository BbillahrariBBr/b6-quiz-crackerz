import React from 'react';

const Options = ({ quiz }) => {
    const { correctAnswer, id, question, options } = quiz
    return (
        <div>
            <p>{question}</p>
        </div>
    );
};

export default Options;