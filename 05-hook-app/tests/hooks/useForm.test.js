const { renderHook, act } = require('@testing-library/react')
const { useForm } = require('../../src/hooks/useForm')

describe('Pruebas en useForm', () => {
  const initialForm = {
    name: 'Fernando',
    email: 'Fernando@gmail.com',
  }

  test('debe de regresar los valores por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm))

    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    })
  })

  test('debe de cambiar el valor del formulario (cambiar name)', () => {
    const newValue = 'Melissa'
    const { result } = renderHook(() => useForm(initialForm))
    const { onInputChange } = result.current
    act(() => {
      onInputChange({
        target: {
          name: 'name',
          value: newValue,
        },
      })
    })
    const { formState } = result.current
    expect(formState).toEqual({ ...initialForm, name: newValue })

    expect(result.current.name).toBe(newValue)
    expect(result.current.formState.name).toBe(newValue)
  })

  test('debe de re-establecer el formulario con RESET', () => {
    const { result } = renderHook(() => useForm(initialForm))
    const { onInputChange, onResetForm } = result.current
    act(() => {
      onInputChange({
        target: {
          name: 'name',
          value: 'Melissa',
        },
      })
      onResetForm()
    })
    const { formState } = result.current
    expect(formState).toEqual(initialForm)

    expect(result.current.name).toBe(initialForm.name)
    expect(result.current.formState.name).toBe(initialForm.name)
  })
})
