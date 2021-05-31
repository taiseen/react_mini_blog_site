import { useEffect, useState } from "react";

const useFetch = (endPoint) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const abortCont = new AbortController();

        const url = `http://localhost:8000/${endPoint}`;

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('Could Not Fetch Data From That Resource')
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('Fetch aborted');
                    } else {
                        setError(err.message);
                        setIsLoading(false);
                        setData(null);
                    }
                });
        },
            // waiting for 1 seconds
            1000);

        return () => abortCont.abort();

        // run this useEffect only for this ==> endPoint
    }, [endPoint]);

    return { data, isLoading, error };

};

export default useFetch;