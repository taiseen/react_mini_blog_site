import React from 'react';

function BlogList({ blogs }) {
    return (
        <div className="blog_list">
            {blogs.map(blog => {
                const { id, title, author } = blog;

                return (
                    <div
                        className="blog_preview"
                        key={id} >

                        <h2>{title}</h2>
                        <p>Written by : {author}</p>

                    </div>
                );
            })};
        </div>
    );
}

export default BlogList;