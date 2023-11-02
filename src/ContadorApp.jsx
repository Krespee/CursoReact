import { useState } from "react";
export const ContadorApp = ({value}) => {

    const [contador, setContador] = useState(value)

    const handleCLick = () =>{
        setContador(contador + 1)
    }    
  return (
    <>
    <h1>Contador:</h1>
    <p>{contador}</p>
    <button onClick={handleCLick}>
        Soy un botón
    </button>
    </>
  )
}
