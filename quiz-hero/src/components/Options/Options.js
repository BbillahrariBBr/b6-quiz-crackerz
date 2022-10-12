import React from 'react';


const Options = ({ quiz }) => {
    const { correctAnswer, question, options } = quiz;
    const eyeButtonClicked = (ans) => {
        alert(ans)
    }

    const isAnswer = (res, cAns) => {
        if (res === cAns) {
            alert('Ans is Right')
        }
        else {
            alert('Ans is Wrong')
        }
    }


    return (
        <div className='m-4 p-4 shadow-lg rounded-lg bg-slate-100'>
            <div className=' flex justify-between mb-2'>
                <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">{question}</h3>
                <button onClick={() => eyeButtonClicked(correctAnswer)} className='btn btn-info hover:btn-accent'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg></button>

            </div>

            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white ">
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600 ">
                    <div className="flex items-center pl-3">

                        <label onClick={() => isAnswer(options[0], correctAnswer)} for="horizontal-list-radio-license" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">{options[0]} </label>
                    </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center pl-3">

                        <label onClick={() => isAnswer(options[1], correctAnswer)} for="horizontal-list-radio-id" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">{options[1]}</label>
                    </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center pl-3">

                        <label onClick={() => isAnswer(options[2], correctAnswer)} for="horizontal-list-radio-millitary" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">{options[2]}</label>
                    </div>
                </li>
                <li className="w-full dark:border-gray-600">
                    <div className="flex items-center pl-3">

                        <label onClick={() => isAnswer(options[3], correctAnswer)} for="horizontal-list-radio-passport" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">{options[3]}</label>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Options;