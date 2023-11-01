const string = "Esto es un texto";
const number = 154545;
const array = ["hola", "Mundo", 1, 2023];
const boolean = true;
const objeto = {nombre:"Nayn", edad:22};
const funcion = () => 1+1;
const fecha = new Date();
funcion()

export const PrimerComponente = () => {
  return (
    <h1>{JSON.stringify(fecha)}</h1>
  )
}
