import { useState } from "react"

export const AgregarTarea = ({agregarTarea}) => {
    const [inputValue, setinputValue] = useState("")
    const onInputChange = ({target}) =>{
        setinputValue(target.value)
        console.dir(target.value);
    }
    const onSubmit = (e) =>{
        const envio = {
            nombre: inputValue,
            value: false
        }
        e.preventDefault()
        agregarTarea(tareas =>[...tareas, envio])
    }
  return (
    <form onSubmit={onSubmit}>
        <input 
        type="text" 
        placeholder="Ingresa la tarea Nueva" 
        value={inputValue}
        onChange={onInputChange}
        />
    </form>
  )
}
