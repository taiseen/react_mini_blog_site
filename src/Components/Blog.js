import { useParams } from 'react-router';
import useFetch from './useFetch';

function Blog() {

    const { id } = useParams();
    const { data: blog, isLoading, error } = useFetch('blogs/' + id);

    return (
        <div className="blog_details">
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By : {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
        </div>
    );
}

export default Blog;