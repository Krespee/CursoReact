import { useReducer } from "react";
import { useForm } from "../hooks/useForm";

const initalState = [{
    id: new Date().getTime(),
    tarea: "Explicar Reducers",
    finalizada: false
}];

const nuevaTarea = {
    id : 1,
    tarea : "Explicar useReducer",
    finalizada: false
}


const eliminarTarea = {
    type: "[TAREAS] Eliminar Tarea",
}
const borrarTarea = {
    type: "[TAREAS] Borrar Tarea",
}

const tareaReducer = (state = initalState, action = {})=>{

   switch (action.type) {
    case "[TAREAS] Agregar Tarea":
        return [...state, action.payload]

    case "[TAREAS] Finzalizar Tarea":
        return state.map(tarea => {
            if (tarea.id === action.payload) {
                return{
                    ...tarea,
                    finalizada: !tarea.finalizada
                }
            }
            return tarea
        })
    
    case "[TAREAS] Eliminar Tarea":
        return state.filter (tarea => tarea.id != action.payload)

    case "[TAREAS] Borrar Tarea":
        return []
   
    default:
        return state
   }
}

// console.log(tareaReducer(initalState, editarTarea));




export const ListaTareas = () => {

    const [state, dispatch] = useReducer(tareaReducer, initalState)

    const {tarea, formState, onInputChange} = useForm({tarea :""})

    const agrearTarea = (e) =>{
        e.preventDefault()
        if (formState.tarea == "") return
        console.log(formState);
        const tarea = {
            id: new Date().getTime(),
            tarea: formState.tarea,
            finalizada:false
        }
        const action = {
         type: "[TAREAS] Agregar Tarea",
         payload: tarea
        }
        dispatch(action)
    }

    const marcarFinalizada = ({id}) =>{

        const action = {
            type: "[TAREAS] Finzalizar Tarea",
            payload: id
        }

        dispatch(action)
    }

    const eliminarTarea = ({id}) =>{
        const action = {
            type: "[TAREAS] Eliminar Tarea",
            payload: id
        }

        dispatch(action)
    }

    const reset = () =>{
        const action = {
            type: "[TAREAS] Borrar Tarea",
            payload: ""
        }
        dispatch(action)
    }
  return (
    <>
        <form onSubmit={agrearTarea}>
            <div className="form-group">
             <input 
             type="text" 
             className="form-control" 
             id="tarea" 
             name="tarea" 
             placeholder="Ingresa Tarea"
             value={tarea}
             onChange={onInputChange}
             />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="button" className="btn btn-primary" onClick={reset}>Reset</button>
        </form>

        <hr />
        <ul className="list-group">
            {state.map(item =>{ 
                return(
                    
                <li className="list-group-item d-flex justify-content-between" key={item.id}>
                    <span>{item.tarea}</span>
                    <input 
                        type="checkbox" 
                        value={item.finalizada}
                        onChange={() => marcarFinalizada(item)}
                    />
                    <button
                    className="btn btn-danger"
                    onClick={()=>eliminarTarea(item)}
                    >Borrar</button>
                    {item.finalizada ? "✅" : "❌"}
                    </li>
                )
            })}
        </ul>
    </>
  )
}
