import { useHistory, useParams } from 'react-router';
import { serverUrl_With_Api_EndPoint } from './serverURL';
import useFetch from './useFetch';

function Blog() {

    const { id } = useParams();
    const history = useHistory();
    const { data: blog, isLoading, error } = useFetch('blogs/' + id);

    const handleDelete = () => {

      //const url = 'http://localhost:8000/blogs/' + id;
      
        const url = serverUrl_With_Api_EndPoint + id;

        fetch(url, { method: 'DELETE' })
            .then(() => {
                history.push('/');
            });

    }

    return (
        <div className="blog_details">
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By : {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default Blog;