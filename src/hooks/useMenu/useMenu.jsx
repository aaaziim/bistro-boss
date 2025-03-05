import { useEffect, useState } from "react";

const useMenu =() =>{
    const [menu, setMenu] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        // fetch popular menu data from API and update state here
        // example:
        fetch('menu.json')
         .then(response => response.json())
         .then(data => {
            
            setMenu(data)
            setLoading(false)
         })
         .catch(error => console.error('Error:', error));
  
    },[])

    return [menu, loading]
}

export default useMenu