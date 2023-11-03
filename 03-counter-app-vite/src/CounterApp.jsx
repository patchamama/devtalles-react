//https://cursos.devtalles.com/courses/take/react-cero-experto/lessons/36057304-tarea-componente-counterapp
//https://cursos.devtalles.com/courses/take/react-cero-experto/lessons/36057309-evento-click-eventos-en-general
//https://es.legacy.reactjs.org/docs/events.html

import PropTypes from 'prop-types'

// Normalmente se recomienda usar el handleEvent aquí pero como se usará
// con el Hook internamente en el próximo paso
// const handleEvent = (event) => {
//   console.log(event)
// }

const CounterApp = ({ value }) => {
  const handleEvent = (event) => {
    console.log(event)
  }
  return (
    <>
      <h1>Counter App</h1>
      <h2>{value}</h2>

      <button onClick={(event) => handleEvent(event)}>+1</button>
      <button onClick={handleEvent}>+1</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}

export default CounterApp
