import "./primerComponente.css"
const string = "Esto es un texto";
const number = 154545;
const array = ["hola", "Mundo", 1, 2023];
const boolean = true;
const objeto = { nombre: "Nayn", edad: 22 };
const funcion = () => 1 + 1;
const fecha = new Date();
funcion();

export const PrimerComponente = () => {
  return (
    <>
      <h1>Variables en jsx</h1>
      <h4>Variables tipo String:</h4> <p>{string}</p>
      <h4>Variables tipo number:</h4> <p>{number}</p>
      <h4>Variables tipo array:</h4> <p>{array}</p>
      <h4>Variables tipo boolean:</h4> <p>{boolean}</p>
    </>
  );
};
