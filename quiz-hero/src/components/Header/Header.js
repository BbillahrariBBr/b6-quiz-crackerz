import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar bg-base-100">
            <p className="btn btn-ghost normal-case text-xl">Quiz Hero</p>
            <div>
                <Link to="/">Home</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
};

export default Header;