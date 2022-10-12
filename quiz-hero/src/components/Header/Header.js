import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="flex justify-around items-center bg-gradient-to-r from-indigo-500 h-12 sticky top-0">
            <div>
                <Link className="text-4xl text-white hover:text-indigo-700 font-extrabold" to='/'> Quiz Hero </Link>
            </div>
            <div className='space-x-7 text-xl font-medium text-indigo-500 '>
                <Link className=' hover:text-blue-500' to="/">Home</Link>
                <Link className=' hover:text-blue-500' to="/statistics">Statistics</Link>
                <Link className=' hover:text-blue-500' to="/blog">Blog</Link>
                {/* <Link className=' hover:text-blue-500' to="/about">About</Link> */}
            </div>
        </nav>
    );
};

export default Header;