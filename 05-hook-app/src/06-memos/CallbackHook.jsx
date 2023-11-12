import { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10)

  // useCallback es un hook que nos permite memorizar una función
  // y solo se va a disparar cuando las dependencias cambien
  const incrementFather = useCallback((value) => {
    setCounter((c) => c + value) // c es el valor del estado counter
    // value con que se va a incrementar el estado counter c
  }, [])

  // no se debe de usar el useEffect para funciones
  // como incrementFather porque se va a estar disparando
  // cada vez que se renderice el componente pues la función
  // incrementFather se esta creando en cada renderización
  //  (al ocupar un nuevo espacio en memoria)
  // y por lo tanto el useEffect se esta disparando en cada
  // renderización del componente.
  useEffect(() => {
    // incrementFather()
  }, [incrementFather])

  //   const incrementFather = () => {
  //     setCounter(counter + 1)
  //   }

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={incrementFather} />
    </>
  )
}
