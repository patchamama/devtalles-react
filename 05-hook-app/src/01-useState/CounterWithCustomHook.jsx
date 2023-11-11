import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter(100)

  return (
    <>
      <h1>Counter With Hook: {counter}</h1>
      <hr />

      <button className='btn btn-primary'>+1</button>
      <button className='btn btn-primary'>Reset</button>
      <button className='btn btn-primary'>-1</button>
    </>
  )
}
