//https://cursos.devtalles.com/courses/take/react-cero-experto/lessons/36057304-tarea-componente-counterapp

import PropTypes from 'prop-types'

const CounterApp = ({ value }) => {
  return (
    <>
      <h1>Counter App</h1>
      <h2>{value}</h2>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}

export default CounterApp
