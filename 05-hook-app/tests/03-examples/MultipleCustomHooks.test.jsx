import { renderHook, act, render, screen } from '@testing-library/react'
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks'

describe('Pruebas en <MultipleCustomHooks />', () => {
  test('debe de mostrarse correctamente por defect', () => {
    render(<MultipleCustomHooks />)
    screen.debug()

    expect(screen.getByText('Loading...'))
    expect(screen.getByText('Rick and Morty'))

    const nextButton = screen.getByRole('button', { name: /next quote/i })
    expect(nextButton.disabled).toBeTruthy()
  })
})
