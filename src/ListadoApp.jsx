import { useState } from "react";

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
    { nombre: "Instalaciones necesarias", visto: true },
    { nombre: "Uso de Vite", visto: true },
    { nombre: "Components", visto: true },
    { nombre: "Variables", visto: true },
    { nombre: "Props", visto: true },
    { nombre: "rseState", visto: false },
    { nombre: "Customhooks", visto: false },
  ];
  const [array, setArray] = useState(listadoSecciones);

  const addTask = () => {
    setArray([...array, {nombre:"Nuevo", visto:true}])
  };

  return (
    <>
      <h1>Listado de temas del curso</h1>
      <ol>
        {array.map((item) => (
          <Items
            key={item.nombre}
            nombre={item.nombre}
            visto={item.visto}
          ></Items>
        ))}
      </ol>
      <button onClick={() => addTask()}>Agregar Tarea</button>
    </>
  );
};
