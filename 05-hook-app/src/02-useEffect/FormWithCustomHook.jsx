import { useForm } from '../hooks/useForm'

export const FormWithCustomHook = () => {
  const { formState, onInputChange, onResetForm, username, email, password } =
    useForm({
      username: '',
      email: '',
      password: '',
    })

  // const { username, email, password } = formState

  return (
    <>
      <h1>Formulario con custom Hook</h1>
      <hr />
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type='text'
          className='form-control'
          placeholder=''
          name='username'
          value={username}
          onChange={onInputChange}
        />
        <input
          type='email'
          className='form-control mt-2'
          placeholder=''
          name='email'
          value={email}
          onChange={onInputChange}
        />
        <input
          type='password'
          className='form-control mt-2'
          placeholder=''
          name='password'
          value={password}
          onChange={onInputChange}
        />
      </form>
      <button onClick={onResetForm} className='btn btn-primary mt-2'>
        Borrar
      </button>
    </>
  )
}
