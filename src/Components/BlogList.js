import React from 'react';
import { Link } from 'react-router-dom';
import Blog from './Blog';

function BlogList({ blogs }) {
    return (
        <div className="blog_list">
            {blogs.map(blog => {
                const { id, title, author } = blog;


                return (
                    <Link to={`/blog/${id}`} >
                        <div
                            className="blog_preview"
                            key={id} >
                            <h2>{title}</h2>
                            <p>Written by : {author}</p>
                            <Blog></Blog>

                        </div>
                    </Link>
                );
            })};
        </div>
    );
}

export default BlogList;