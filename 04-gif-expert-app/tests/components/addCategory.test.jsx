import { render, screen, fireEvent } from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory'

describe('Pruebas en <AddCategory />', () => {
  test('debe de cambiar el valor de la caja de texto', () => {
    render(<AddCategory onNewCategory={() => {}} />)
    // screen.debug()

    // 1. Simular el inputChange
    const input = screen.getByRole('textbox')

    fireEvent.input(input, { target: { value: 'Saitama' } })

    expect(input.value).toBe('Saitama')
  })

  // 2. Simular el submit
  test('debe de llamar onNewCategory si el input tiene un valor', () => {
    const inputValue = 'Saitama'
    const onNewCategory = jest.fn()
    render(<AddCategory onNewCategory={onNewCategory} />)
    // screen.debug()

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form') // toma el valor en el aria-label='form' del componente AddCategory

    fireEvent.input(input, { target: { value: inputValue } })
    // screen.debug()
    fireEvent.submit(form)

    // expect(onNewCategory).toHaveBeenCalled()
    // expect(onNewCategory).toHaveBeenCalledTimes(1)
    // expect(onNewCategory).toHaveBeenCalledWith(expect.any(String))
    expect(input.value).toBe('')
  })

  // 3. setCategories se debe de haber llamado
  // 4. El valor del input debe de estar ''
})
