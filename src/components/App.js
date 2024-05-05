import React, { useState, useEffect } from 'react';

function App() {
    const [loading, setLoading] = useState(true);
    const [imageSrc, setImageSrc] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            fetch('https://dog.ceo/api/breeds/image/random')
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((data) => {
                    setImageSrc(data.message);
                    setLoading(false);
                })
                .catch((err) => {
                    setError(err);
                    setLoading(false);
                });
        };

        fetchData();
    }, []);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {imageSrc && <img src={imageSrc} alt="A Random Dog" />}
            {error && <p>Error loading dog image: {error.message}</p>}
        </div>
    );
}

export default App;

