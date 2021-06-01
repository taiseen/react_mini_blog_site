import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { serverUrl_With_Api_EndPoint } from './serverURL';

function CreateBlog() {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = { title, body, author };
        setIsPending(true);

        // Question :- after collecting data, what should we do with this?

        /* Answer   :- 
        so now send a POST request, to servers particular end-point of api...
        & convert this normal object into JSON formate, 
        so that transfer protocol can process this data. 
        so this is the gate-way for communication with server.*/

        // const endPoint = 'blogs'; // api end-point
        // const url = `http://localhost:8000/${endPoint}`;     
          
        const url = serverUrl_With_Api_EndPoint;

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(blog),
            headers: { 'Content-Type': 'application/json' },
        }).then(() => {
            console.log('new blog created');
            setIsPending(false);
        });

        setTitle('');
        setBody('');
        setAuthor('');

        // Programmatic Redirect User
        history.push('/');
    };


    return (  // JSX template for >>> HTML DOM Node's

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

                {
                    !isPending
                        ? <button>Add Blog</button>
                        : <button disabled>Adding Blog...</button>
                }
            </form>
        </div >
    );
}

export default CreateBlog;