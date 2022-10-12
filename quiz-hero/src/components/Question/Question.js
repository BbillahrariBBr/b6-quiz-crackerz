import React from 'react';

const Question = ({ question }) => {
    const { qus, ans } = question
    return (
        <div className='bg-indigo-200 m-4 p-4 rounded-lg drop-shadow-lg'>
            <p className='text-xl font-bold mb-2'>{qus}</p>
            <p className='text-base font-normal text-justify'>{ans}</p>

        </div>
    );
};

export default Question;