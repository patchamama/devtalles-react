import { render, screen } from '@testing-library/react'
import { FirstApp } from '../FirstApp'

describe('Pruebas en el archivo FirstApp.test.jsx', () => {
  const title = 'Hola, Soy Goku'
  const subTitle = 'Soy un subtitulo'

  test('debe de hacer match con el snapshot', () => {
    const { container } = render(<FirstApp title={title} />)

    expect(container).toMatchSnapshot()
  })

  test('debe de mostrar el mensaje "Hola, Soy Goku"', () => {
    render(<FirstApp title={title} />)
    screen.debug()
    expect(screen.getByText(title)).toBeTruthy()
  })

  test('debe de mostrar el título en un h1', () => {
    render(<FirstApp title={title} />)
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title)
  })

  test('debe de mostrar el subtitulo enviado por props', () => {
    render(<FirstApp title={title} subTitle={subTitle} />)

    expect(screen.getAllByText(subTitle).length).toBe(2)
  })
})
