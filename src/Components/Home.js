import React, { useEffect, useState } from 'react';
import BlogList from './BlogList';


function Home() {

    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const url = `http://localhost:8000/blogs`;

        // waiting for 2 seconds
        setTimeout(() => {
            fetch(url)
                .then(res => {

                    return res.json()
                })
                .then(data => {
                    setBlogs(data)
                    setIsLoading(false)
                })
                .catch(err => {
                    console.log(err)
                });
        }, 2000);
    }, []);

    // const deleteBlog = (id) => {
    //     setBlogs(blogs.filter(blog => blog.id !== id))
    // }

    return (
        <div className="home">
            <div>
                <h2>Blog List</h2>
                {isLoading && <h2>Loading...</h2>}
                {blogs && <BlogList blogs={blogs} />}
            </div>
        </div>
    );
}

export default Home;


// {
//     "blogs": [
//         {
//             "title": "My First Blog",
//             "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error odit incidunt sunt, eligendi fuga natus doloribus magni nemo adipisci eum inventore beatae iure dolor dicta cum! Ipsa dignissimos nobis ullam?",
//             "author": "seen",
//             "id": 1
//         },
//         {
//             "title": "Alex Blog",
//             "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error odit incidunt sunt, eligendi fuga Lorem ipsum dolor sit amet consectetur adipisicing elit. Error odit incidunt sunt, eligendi fuga natus doloribus magni nemo adipisci eum inventore beatae iure dolor dicta cum! Ipsa dignissimos nobis ullam?",
//             "author": "alex",
//             "id": 2
//         },
//         {
//             "title": "Shopping Tips",
//             "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error odit incidunt sunt, eligendi fuga natus doloribus magni nemo adipisci eum inventore beatae iure dolor dicta cum! Ipsa dignissimos nobis ullam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Error odit incidunt sunt, eligendi fuga natus doloribus magni nemo adipisci eum inventore beatae iure dolor dicta cum! Ipsa dignissimos nobis ullam?",
//             "author": "alex",
//             "id": 3
//         }
//     ]
// }