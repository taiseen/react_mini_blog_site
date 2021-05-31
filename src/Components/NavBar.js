import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {

    return (

        <nav className="navbar">
            <Link to="/"><h1>Mini Blog</h1> </Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/createBlog">Create Blog</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
        
    );
}

export default NavBar;