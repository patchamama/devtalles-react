//https://cursos.devtalles.com/courses/take/react-cero-experto/lessons/36057304-tarea-componente-counterapp
//https://cursos.devtalles.com/courses/take/react-cero-experto/lessons/36057309-evento-click-eventos-en-general
//https://es.legacy.reactjs.org/docs/events.html
//https://cursos.devtalles.com/courses/take/react-cero-experto/lessons/36057314-usestate-hook
//https://cursos.devtalles.com/courses/take/react-cero-experto/lessons/36057319-handlesubtract-y-handlereset

import { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value)

  const handleEventInc = () => setCounter(counter + 1)
  const handleEventDec = () => setCounter(counter - 1)
  const handleEventReset = () => setCounter(value)

  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>

      <button onClick={handleEventInc}>+1</button>
      <button onClick={handleEventDec}>-1</button>
      <button onClick={handleEventReset}>Reset</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}

export default CounterApp
