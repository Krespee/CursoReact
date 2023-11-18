import { useEffect } from "react";
import { useState } from "react";
import { UserList } from "./components/UserList";

export const UserApp = () => {
    const [endPoint, setendPoint] = useState("users")


    
    const handleFetch =()=>{
        setendPoint("comments")
    }
    
    //si utilizo un boton no hace falta el useEffect
        // useEffect(()=>{
        //     fetchUsers()
        // }, [])
        
  return (
    <>
    <h1>Lista de usuarios</h1>
    <UserList endPoint={endPoint}></UserList>

    <button onClick={handleFetch}>Llamar a la API</button>
    </>
  )
}
