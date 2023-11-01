
export const ContadorApp = ({value}) => {
    const handleCLick = () =>{
        value++
        console.log(value);
    }    
  return (
    <>
    <h1>Contador:</h1>
    <p>{value}</p>
    <button onClick={handleCLick}>
        Soy un botón
    </button>
    </>
  )
}
