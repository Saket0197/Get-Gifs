import { useEffect, useState } from "react";
import axios from "axios";

export default function useGenGif(tag = null) {

    const [gif,setGif] = useState('');
    const [loading,setLoading] = useState(false);
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    const base_url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    async function fetchData(tag = null) {

        try{
            setLoading(true);

            let url = (!tag) ? base_url : `${base_url}&tag=${tag}`;
            const response = await axios(url);
            setGif(response.data.data.images.downsized_large.url);
            setLoading(false);
        } catch(err) {
            console.log("error occured while fetching data");
            console.error(err.message);
        }

    }
    
    useEffect(() => {
       if(!tag)
        fetchData();
       else
        fetchData(tag);
    },[]);

    return {loading,gif,fetchData};

}