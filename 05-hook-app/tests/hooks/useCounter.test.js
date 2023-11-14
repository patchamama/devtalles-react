const { renderHook } = require('@testing-library/react')
const { useCounter } = require('../../src/hooks/useCounter')

describe('Pruebas en useCounter', () => {
  test('debe de retornar valores por defecto', () => {
    const { result } = renderHook(() => useCounter())
    const { counter, increment, decrement, reset } = result.current
    expect(counter).toBe(10)

    expect(decrement).toBeInstanceOf(Function)
    expect(decrement).toEqual(expect.any(Function))
    expect(typeof decrement).toBe('function')

    expect(increment).toEqual(expect.any(Function))
    expect(reset).toEqual(expect.any(Function))
  })

  test('debe de tener el counter en 100', () => {
    const { result } = renderHook(() => useCounter(100))
    expect(result.current.counter).toBe(100)
  })

  //   test('debe de incrementar el counter en 1', () => {
  //     const { result } = renderHook(() => useCounter(100))
  //     const { increment } = result.current
  //     act(() => {
  //       increment()
  //     })
  //     const { counter } = result.current
  //     expect(counter).toBe(101)
  //   })

  //   test('debe de decrementar el counter en 1', () => {
  //     const { result } = renderHook(() => useCounter(100))
  //     const { decrement } = result.current
  //     act(() => {
  //       decrement()
  //     })
  //     const { counter } = result.current
  //     expect(counter).toBe(99)
  //   })

  //   test('debe de resetear el counter', () => {
  //     const { result } = renderHook(() => useCounter(100))
  //     const { reset } = result.current
  //     act(() => {
  //       reset()
  //     })
  //     const { counter } = result.current
  //     expect(counter).toBe(100)
  //   })
})
