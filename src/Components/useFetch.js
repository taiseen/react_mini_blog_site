import { useEffect, useState } from "react";
import { serverUrl } from "./serverURL";

const useFetch = (apiEndPoint) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        const url = serverUrl + apiEndPoint;

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error(`Could Not Fetch Data From End-Point of API`);
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
                        console.log('Fetch aborted | For Component Fast Switching...');
                    } else {
                        setError(err.message);
                        setIsLoading(false);
                        setData(null);
                    }
                });
        }, 500);

        return () => abortCont.abort();

        // run this useEffect only for this ==> apiEndPoint
    }, [apiEndPoint]);

    return { data, isLoading, error };
};

export default useFetch;