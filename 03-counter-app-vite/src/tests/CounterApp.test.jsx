import { fireEvent, render, screen } from '@testing-library/react'
import CounterApp from '../CounterApp'

describe('Pruebas en el archivo <CounterApp />', () => {
  const initialValue = 10
  test('debe de hacer match con el snapshot', () => {
    const { container } = render(<CounterApp value={initialValue} />)
    expect(container).toMatchSnapshot()
  })

  test('debe de mostrar el valor inicial de 100', () => {
    render(<CounterApp value={100} />)
    expect(screen.getByText('100')).toBeTruthy()

    expect(screen.getByText('100').tagName).toBe('H2')
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain('100')
  })

  test('debe de incrementar con el botón +1', () => {
    render(<CounterApp value={initialValue} />)

    // screen.debug()
    // expect(screen.getByText('10')).toBeTruthy()
    // screen.getByRole('button', { name: '+1' }).click()
    // expect(screen.getByText('11')).toBeTruthy()

    fireEvent.click(screen.getByText('+1'))
    //   screen.debug()  // debe de aparecer el 10 en el dom
    expect(screen.getByText('11')).toBeTruthy()
  })

  test('debe de decrementar con el botón -1', () => {
    render(<CounterApp value={initialValue} />)
    fireEvent.click(screen.getByText('-1'))

    expect(screen.getByText('9')).toBeTruthy()
  })

  test('debe de colocar el valor por defecto con el btn reset', () => {
    render(<CounterApp value={initialValue} />)
    fireEvent.click(screen.getByText('+1'))
    fireEvent.click(screen.getByText('+1'))
    fireEvent.click(screen.getByText('+1'))
    //   screen.debug()  // debe de aparecer el 13 en el dom
    // fireEvent.click(screen.getByText('Reset'))
    // fireEvent.click(screen.getByLabelText('btn-reset'))
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }))
    expect(screen.getByText('10')).toBeTruthy()
  })
})
