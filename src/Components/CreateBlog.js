import React, { useState } from 'react';
import useFetch from './useFetch';

function CreateBlog() {

    const { data: blogs, isLoading, error } = useFetch('blogs');

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        // now send a POST request, to particular end-point of api...
        





    }


    return (
        <div className="create">
            <form onSubmit={handleSubmit}>

                <label > Blog Title </label>
                <input
                    type="text"
                    placeholder="Title"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />

                <label > Blog Body </label>
                <textarea
                    required
                    placeholder="Write Your Blog"
                    value={body}
                    onChange={(e) => setBody(e.target.value)} >

                </textarea>

                <label > Blog Author </label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}>

                    <option value="Alex">Alex</option>
                    <option value="Seen">Seen</option>
                    <option value="Taiseen">Taiseen</option>
                </select>

                <button>Submit</button>
            </form>
        </div >
    );
}

export default CreateBlog;