import { useEffect } from "react";
import { useState } from "react";
import { UserList } from "./components/UserList";

export const UserApp = () => {
    const [endPoint, setEndPoint] = useState("users")
    const handleFetch =()=>{
        setEndPoint("comments")
    }
    
  return (
    <>
    <h1>Lista de usuarios</h1>
    <UserList endPoint={endPoint}></UserList>

    <button onClick={handleFetch}>Llamar a la API</button>
    </>
  )
}
