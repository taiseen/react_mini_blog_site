import React from 'react';

function BlogList({ blogs, deleteBlog }) {
    return (
        <div className="blog_list">
            {blogs.map(blog => {
                const { id, title, author, body } = blog;

                return (
                    <div
                        className="blog_preview"
                        key={id} >

                        <h2>{title}</h2>
                        <p>{author}</p>
                        <h3>{body}</h3>
                        <button
                            onClick={() => deleteBlog(id)}>
                            Delete
                        </button>

                    </div>
                );
            })}
        </div>
    );
}

export default BlogList;