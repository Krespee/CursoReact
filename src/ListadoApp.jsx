import { useState } from "react";
import { AgregarTarea } from "./components/AgregarTarea";

const Items = ({ nombre, visto }) => {
  return (
    <li>
      {nombre}
      {visto && "✅"}
    </li>
  );
};

export const ListadoApp = () => {
  let listadoSecciones = [
    { id: 1 , nombre: "Instalaciones necesarias", visto: true },
    { id: 2 , nombre: "Uso de Vite", visto: true },
    { id: 3 , nombre: "Components", visto: true },
    { id: 4 , nombre: "Variables", visto: true },
    { id: 5 , nombre: "Props", visto: true },
    { id: 6 , nombre: "rseState", visto: false },
    { id: 7 , nombre: "Customhooks", visto: false },
  ];
  const [array, setArray] = useState(listadoSecciones);

  const addTask = () => {
    setArray([...array, {nombre:"Nuevo", visto:true}])
  };

  const onAddTask = (val) => {
    let valor = val.trim()
    if (valor < 1) return
    const envio = {
        id: array.length + 1,
        nombre: valor,
        visto: false
    }
    setArray([...array, envio])
  }

  return (
    <>
      <h1>Listado de temas del curso</h1>
        <AgregarTarea agregarTarea={onAddTask}></AgregarTarea>
      <ol>
        {array.map((item) => (
          <Items
            key={item.id}
            nombre={item.nombre}
            visto={item.visto}
          ></Items>
        ))}
      </ol>
      <button onClick={() => addTask()}>Agregar Tarea</button>
    </>
  );
};
