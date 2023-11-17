import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { increment } from './store/slices/counter'

function App() {
  const { counter } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => dispatch(increment())}>
          count is {counter}
        </button>
      </div>
    </>
  )
}

export default App
