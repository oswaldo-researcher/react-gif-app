import { useEffect, useState } from "react";
import { fetchGifs } from '../helpers/httpGifs.js';

const useFetchGifs = (category) => {
    const [gifs, setGifs] = useState([]);   
    const [isLoading, setLoading] = useState(true);   
    
    const getData = async (cat) => {
        const data = await fetchGifs(cat);
        
        setGifs(data);
        setLoading(false);
      };

      useEffect(() => {
        getData(category);
      }, [category]);
    

    return {
        gifs,
        isLoading,
    };
}
 
export default useFetchGifs;