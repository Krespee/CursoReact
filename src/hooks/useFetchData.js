import { useEffect, useState } from 'react'
import { fetchData } from '../helpers/fetchData';

export const useFetchData = ({endPoint}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // si quiero usar el async awaint
  const getData = async () =>{
    const {data, isLoading} = await fetchData(endPoint)
    setData(data)
    setIsLoading(isLoading)
  }
  //poniendo getData() en useEffect

  useEffect(()=>{
    getData()
    //si no quiero usar async await
    fetchData(endPoint)
    .then(res =>{
      setData(res.data)
      setIsLoading(res.isLoading)
    })
  }, [endPoint])

  return {
    data,
    isLoading
  }
}
