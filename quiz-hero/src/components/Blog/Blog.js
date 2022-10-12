import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Blog = () => {
    const questions = useLoaderData()
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3'>
            {/* <p>Blog page {questions.length}</p> */}
            {
                questions.map(question => <Question
                    key={question.id}
                    question={question}
                >

                </Question>)
            }
        </div>
    );
};

export default Blog;