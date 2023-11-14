import { useState } from "react"

export const AgregarTarea = ({agregarTarea}) => {
    const [inputValue, setinputValue] = useState("")
    const onInputChange = ({target}) =>{
        setinputValue(target.value)
    }
    const onSubmit = (e) =>{
        e.preventDefault()
        agregarTarea(inputValue)
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
