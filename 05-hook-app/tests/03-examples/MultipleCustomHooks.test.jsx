import {
  renderHook,
  act,
  render,
  screen,
  fireEvent,
} from '@testing-library/react'
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks'
import { useCounter, useFetch } from '../../src/hooks'

jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')

describe('Pruebas en <MultipleCustomHooks />', () => {
  const MockIncrement = jest.fn()
  useCounter.mockReturnValue({
    counter: 1,
    increment: MockIncrement,
  })

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('debe de mostrarse correctamente por defect', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    })
    render(<MultipleCustomHooks />)
    // screen.debug()

    expect(screen.getByText('Loading...'))
    expect(screen.getByText('Rick and Morty'))

    const nextButton = screen.getByRole('button', { name: /next quote/i })
    expect(nextButton.disabled).toBeTruthy()
  })

  test('debe de mostrar un Quote', async () => {
    useFetch.mockReturnValue({
      data: {
        name: 'Fernando',
        species: 'Hola Mundo',
        image: 'https://hola-mundo.com',
      },
      isLoading: false,
      hasError: null,
    })

    render(<MultipleCustomHooks />)
    expect(screen.getByText('Hola Mundo')).toBeTruthy()
    expect(screen.getByText('Fernando')).toBeTruthy()

    const nextButton = screen.getByRole('button', { name: /next quote/i })
    expect(nextButton.disabled).toBeFalsy()

    // screen.debug()
  })

  test('debe de llamar a la función increment', () => {
    useFetch.mockReturnValue({
      data: {
        name: 'Fernando',
        species: 'Hola Mundo',
        image: 'https://hola-mundo.com',
      },
      isLoading: false,
      hasError: null,
    })

    render(<MultipleCustomHooks />)
    const nextButton = screen.getByRole('button', { name: /next quote/i })
    // act(() => {
    //   nextButton.click()
    // })
    // expect(nextButton.disabled).toBeFalsy()

    fireEvent.click(nextButton)
    expect(MockIncrement).toHaveBeenCalledTimes(1)
  })
})
