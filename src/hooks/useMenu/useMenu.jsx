import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/menu') // ✅ Ensure this path is correct
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json(); // ✅ Ensures valid JSON
            })
            .then(data => {
                setMenu(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Fetch error:', error);
                setLoading(false);
            });

    }, []);

    return [menu, loading];
};

export default useMenu;
