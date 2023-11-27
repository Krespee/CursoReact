import { useEffect } from "react"
import { useState } from "react"

export const useFetch = (url) => {
    const [state, seState] = useState({
        data: null,
        isLoading: true,
        errors: null
    });

    const getFetch = async () =>{
        try {
            const response = await fetch(url);
            const data = await response.json()
            console.log(data); 
            seState({
                data,
                isLoading: false,
                errors: null
            })
        } catch (error) {
            console.log(error);
            seState({
                data: null,
                isLoading: false,
                errors: error
            })
        }
    }

    useEffect(()=>{
        if (!url) return
        getFetch()
    }, [url])

  return {
    state
  }
}
