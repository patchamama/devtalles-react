import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter(10)

  return (
    <>
      <h1>Counter With Hook: {counter}</h1>
      <hr />

      <button onClick={() => increment(2)} className='btn btn-primary'>
        +
      </button>
      <button onClick={reset} className='btn btn-primary'>
        Reset
      </button>
      <button onClick={() => decrement(2)} className='btn btn-primary'>
        -
      </button>
    </>
  )
}
