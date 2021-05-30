import React from 'react';

function NavBar() {
    return (
        <nav className="navbar">
            <h1>Mini Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/newBlog">New Blog</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
}

export default NavBar;