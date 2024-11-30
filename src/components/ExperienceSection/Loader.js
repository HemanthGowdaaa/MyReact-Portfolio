import React, { useEffect, useState } from 'react';

const Loader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Adjust the time as needed
        return () => clearTimeout(timer);
    }, []);

    return (
        <div id="loader" className={loading ? 'show' : ''}>
            <div className="loader"></div>
        </div>
    );
};

export default Loader;
