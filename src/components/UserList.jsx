import { useEffect } from "react";
import { useState } from "react";

export const UserList = ({endPoint}) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${endPoint}`
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  //useEffect con dependecia

  useEffect(()=>{
    fetchData()
  }, [endPoint])

  return (
    <>
      <ul>
        {endPoint == "users"
          ? data.map((item) => <li key={item.id}>{item.name}Hola</li>)
          : data.map((comment) => <li key={comment.id}>{comment.body}</li>)}
      </ul>
    </>
  );
};
