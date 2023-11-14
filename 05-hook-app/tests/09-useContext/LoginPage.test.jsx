import { fireEvent, render, screen } from '@testing-library/react'
import { UserContext } from '../../src/09-useContext/context/UserContext'
import { LoginPage } from '../../src/09-useContext/LoginPage'

describe('Pruebas en <LoginPage />', () => {
  const user = {
    name: 'Juan',
    email: 'test@gmail.com',
    id: 1,
  }

  test('debe de mostrar el componente sin el usuario', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    )

    const preTag = screen.getByLabelText('pre') //aria-label
    expect(preTag.innerHTML).toBe('null')

    screen.debug()
  })

  test('debe de llamar el setUser cuando se ejecuta el boton', () => {
    const setUserMock = jest.fn()

    render(
      <UserContext.Provider value={{ user: user, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    )

    const button = screen.getByRole('button')
    fireEvent.click(button)
    const preTag = screen.getByLabelText('pre') //aria-label
    expect(preTag.innerHTML).toContain(user.name)
    expect(setUserMock).toHaveBeenCalledWith({
      id: 123,
      name: 'Juan',
      email: 'juan@mgmail.com',
    })

    screen.debug()
  })
})
