import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    // api end-point | Custom Hook [ useState + useEffect ]
    const { data: blogs, isLoading, error } = useFetch('blogs');

    return (
        <div className="home">
            <div>
                <h2>Blog List</h2>
                {isLoading && <span>Loading...</span>}
                {error && <h3>{error}</h3>}
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