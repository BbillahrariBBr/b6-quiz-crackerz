import React from 'react';
import { Link } from 'react-router-dom';
import './Items.css'

const Items = ({ item, handleClick }) => {
    const { id, name, logo, total } = item
    return (

        <div className="wrapper text-gray-900  m-4 p-4 rounded-lg ">
            <div>

                <img src={logo} alt=" random imgee" className="w-full object-cover object-center rounded-lg shadow-md bg-purple-300" />

                <div className="relative px-4 -mt-16  ">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex items-baseline">
                            <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                New
                            </span>
                            <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                                Total quiz: {total}
                            </div>
                        </div>

                        <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">{name}</h4>

                        <div className="mt-4">
                            <span className="text-teal-600 text-md font-semibold"><Link to={`/quiz/${id}`}><button className='btn'>Start Practice</button> </Link></span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Items;