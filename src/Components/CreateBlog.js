import React from 'react';
import useFetch from './useFetch';

function CreateBlog(props) {

    const { data : blogs, isLoading, error } = useFetch('blogs'); 

    return (
        <div>
            <h1>NewBlog Component</h1>
        </div>
    );
}

export default CreateBlog;