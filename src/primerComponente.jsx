import PropTypes from "prop-types"

export const PrimerComponente = ({titulo, subtitulo, subtituloDos}) => {
  console.log(titulo);
  return (
    <>
      <h1>Props: {titulo} </h1>
      <h2>Props: {subtitulo + 1} </h2>
      <h2>Props: {subtituloDos + 1} </h2>
    </>
  );
};

PrimerComponente.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtituloDos: PropTypes.number.isRequired,
}

PrimerComponente.defaultProps = {
  titulo: "CUrso de React",
  subtitulo:"seccion de props",
  subtituloDos:2
}