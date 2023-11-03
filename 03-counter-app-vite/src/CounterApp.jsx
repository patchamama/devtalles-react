//https://cursos.devtalles.com/courses/take/react-cero-experto/lessons/36057304-tarea-componente-counterapp
//https://cursos.devtalles.com/courses/take/react-cero-experto/lessons/36057309-evento-click-eventos-en-general
//https://es.legacy.reactjs.org/docs/events.html
//https://cursos.devtalles.com/courses/take/react-cero-experto/lessons/36057314-usestate-hook

import { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value)

  const handleEvent = (event) => {
    //   setCounter(counter + 1)
    setCounter((c) => c + 1)
  }
  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>

      <button onClick={handleEvent}>+1</button>
      <button onClick={(event) => handleEvent(event)}>+1</button>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}

export default CounterApp
