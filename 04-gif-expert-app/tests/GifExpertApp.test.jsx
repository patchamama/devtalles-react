import { render, screen, fireEvent } from '@testing-library/react'
import { GifExpertApp } from '../src/GifExpertApp'

describe('Pruebas en <GifExpertApp />', () => {
  const category = 'Saitama'

  test('debe de hacer match con el snapshot', () => {
    const container = render(<GifExpertApp />)
    expect(container).toMatchSnapshot()
  })

  test('debe de agregar una categoría', () => {
    render(<GifExpertApp />)
    // screen.debug()
    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form') // toma el valor en el aria-label='form' del componente AddCategory

    fireEvent.input(input, { target: { value: category } })
    expect(input.value).toBe(category)
    // screen.debug()
    fireEvent.submit(form)

    expect(input.value).toBe('')
    expect(screen.getByText(category)).toBeTruthy()
  })

  test('poner dos veces la misma categoría, no debe de agregarla', () => {
    render(<GifExpertApp />)
    // screen.debug()
    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form') // toma el valor en el aria-label='form' del componente AddCategory

    fireEvent.input(input, { target: { value: category } })
    expect(input.value).toBe(category)
    // screen.debug()
    fireEvent.submit(form)

    expect(input.value).toBe('')
    expect(screen.getByText(category)).toBeTruthy()

    fireEvent.input(input, { target: { value: category } })
    expect(input.value).toBe(category)
    // screen.debug()
    fireEvent.submit(form)

    expect(input.value).toBe('')
    expect(screen.getByText(category)).toBeTruthy()
    expect(screen.getAllByText(category).length).toBe(1)
  })

  test('poner dos categorías diferentes', () => {
    render(<GifExpertApp />)
    // screen.debug()
    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form') // toma el valor en el aria-label='form' del componente AddCategory

    fireEvent.input(input, { target: { value: category } })
    expect(input.value).toBe(category)
    // screen.debug()
    fireEvent.submit(form)

    expect(input.value).toBe('')
    expect(screen.getByText(category)).toBeTruthy()

    fireEvent.input(input, { target: { value: 'One Punch' } })
    expect(input.value).toBe('One Punch')
    // screen.debug()
    fireEvent.submit(form)

    expect(input.value).toBe('')
    expect(screen.getByText(category)).toBeTruthy()
    expect(screen.getByText('One Punch')).toBeTruthy()
    expect(screen.getAllByText(category).length).toBe(1)
    expect(screen.getAllByText('One Punch').length).toBe(1)
    // <h3> heading level 2 deben de ser 2
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(2)

    // expect(screen.getAllByRole('img').length).toBe(2)
  })
})
