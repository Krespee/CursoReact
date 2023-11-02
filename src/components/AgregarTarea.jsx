import { useState } from "react"

export const AgregarTarea = () => {
    const [inputValue, setinputValue] = useState("")
    const onInputChange = ({target}) =>{
        setinputValue(target.value)
        console.dir(target.value);
    }
    const onSubmit = (e) =>{
        e.preventDefault()
        console.log(inputValue);
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
