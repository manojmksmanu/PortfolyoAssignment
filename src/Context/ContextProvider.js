import React, { createContext, useState, useEffect } from 'react'

export const CreateContext = createContext("");

const ContextProvider = ({ children }) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    console.log(data)

    return (
        <CreateContext.Provider value={data}>
            {children}
        </CreateContext.Provider>
    )
}
export default ContextProvider