import React, { useState } from 'react';
import BlogList from './BlogList';


function Home() {

    const allBlog = [
        { id: 1, title: 'My New Habit', body: 'lorem ipsum...', author: 'taiseen' },
        { id: 2, title: 'Book I read', body: 'lorem ipsum...', author: 'alex' },
        { id: 3, title: 'Go to see', body: 'lorem ipsum...', author: 'saimon' },
        { id: 4, title: 'Shopping tricks', body: 'lorem ipsum...', author: 'alex' },
    ]

    const [blogs, setBlogs] = useState(allBlog);

    const handleClick = (e) => {
        // trigger the react | to | re-render the template | change is happening...

    }

    const deleteBlog = (id) => {
        setBlogs(blogs.filter(blog => blog.id !== id))
    }

    return (
        <div className="home">
            <div>
                <h2>Blog List</h2>
                <BlogList blogs={blogs} deleteBlog={deleteBlog} />
            </div>
            <div>
                <h2>alex's blog</h2>
                <BlogList
                    blogs={blogs.filter(blog => blog.author === 'alex')}
                    deleteBlog={deleteBlog} />
            </div>
        </div>
    );
}

export default Home;