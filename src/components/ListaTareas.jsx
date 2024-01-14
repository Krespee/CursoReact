const initalState = [{
    id:1,
    tarea: "Explicar Reducers",
    finalizada: false
}];

const nuevaTarea = {
    id : 1,
    tarea : "Explicar useReducer",
    finalizada: false
}

const agrearTarea = {
    type: "[TAREAS] Agregar Tarea",
    payload: nuevaTarea
}
const editarTarea = {
    type: "[TAREAS] Editar Tarea",
    payload: nuevaTarea
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

    case "[TAREAS] Editar Tarea":
        for (const key of state) {
            if (key.id == action.payload.id) {
                
            }else{
                console.log("No Se encontro el elemento a editar");
            }
        }
    
    case "[TAREAS] Eliminar Tarea":
        return [...state, action.payload]

    case "[TAREAS] Borrar Tarea":
        return [...state, action.payload]
   
    default:
        break;
   }
    return state
}

console.log(tareaReducer(initalState, editarTarea));




export const ListaTareas = () => {
  return (
    <div>ListaTareas</div>
  )
}
