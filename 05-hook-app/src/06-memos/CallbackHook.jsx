import { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10)

  // useCallback es un hook que nos permite memorizar una función
  // y solo se va a disparar cuando las dependencias cambien
  const incrementFather = useCallback(() => {
    setCounter((c) => c + 1)
  }, [])

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
