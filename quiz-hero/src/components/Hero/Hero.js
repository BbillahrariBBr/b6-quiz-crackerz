import React from 'react';

const Hero = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://placeimg.com/260/400/tech" className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">QUIZ HERO!</h1>
                    <p className="py-6">A great way to learn new Things! You can Take Quizzes on a variety of topics. </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;