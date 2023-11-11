import { useRef } from 'react'

export const FocusScreen = () => {
  const inputRef = useRef()
  const onClick = () => {
    // document.querySelector('input[name="name"]').select()
    // document.querySelector('input[name="name"]').focus()
    inputRef.current.select()
  }
  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        type='text'
        className='form-control'
        placeholder='Ingrese su nombre'
        name='name'
      />

      <button className='btn btn-outline-primary mt-2' onClick={onClick}>
        Set focus
      </button>
    </>
  )
}
