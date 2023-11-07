import { render } from '@testing-library/react'
import { FirstApp } from '../FirstApp'

describe('Pruebas en el archivo FirstApp.test.jsx', () => {
  test('debe de hacer match con el snapshot', () => {
    const title = 'Hola, Soy Goku'
    render(<FirstApp title={title} />)
  })
})
