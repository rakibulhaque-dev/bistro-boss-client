import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    
    
    useEffect(() => {
        fetch('/public/menu.json')
            .then(res => res.json())
            .then(data => {
                setMenu(data);
                setLoading(false);
            });
    }, [])
    // [Note]:  must return for custom hook if want use anywhere will return fethed data to handle easily
    return [menu, loading]
}

export default useMenu;