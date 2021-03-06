import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {

    return (  // JSX template for >>> HTML DOM Node's

        <div className="blog_list">

            {blogs.map(blog => {

                const { id, title, author } = blog;

                return (
                    <Link to={`/blog/${id}`} key={id}>
                        <div className="blog_preview" >
                            <h2>{title}</h2>
                            <p>Written by : {author}</p>
                        </div>
                    </Link>
                );
            })}
        </div >
    );
}

export default BlogList;