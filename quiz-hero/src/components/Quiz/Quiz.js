import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const q = useLoaderData();
    const quizzes = q.data.questions;
    console.log(quizzes);
    return (
        <div>
            <p>this is quiz</p>
        </div>
    );
};

export default Quiz;