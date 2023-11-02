const Items = ({nombre, visto}) =>{
    return(
        <li>
            {nombre} 
            {visto && "✅"}
            </li>
    )
}

export const ListadoApp = () => {
    return (
        <>
        <h1>Listado de temas del curso</h1>
        <ol>
            <Items nombre="Instalaciones necesarias" visto={true}></Items>
            <Items nombre="Uso de Vite" visto={true}></Items>
            <Items nombre="Components" visto={true}></Items>
            <Items nombre="Variables" visto={true}></Items>
            <Items nombre="Props" visto={true}></Items>
            <Items nombre="rseState" visto={false}></Items>
            <Items nombre="Customhooks" visto={false}></Items>
        </ol>
        </>
    )
}