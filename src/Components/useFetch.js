import { useEffect, useState } from "react";

const useFetch = (endPoint) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {

        const url = `http://localhost:8000/${endPoint}`;

        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error('Could Not Fetch Data From That Resource')
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch(err => {
                    setError(err.message);
                    setIsLoading(false);
                    setData(null);
                });

        },
            // waiting for 2 seconds
            2000);

        return (() => {
            console.log("clearing");
        });

        // run this useEffect only for this ==> endPoint
    }, [endPoint]);

    return { data, isLoading, error, };

};

export default useFetch;