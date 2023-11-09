import { render, screen, fireEvent } from '@testing-library/react'
import { GifGrid } from '../../src/components/GifGrid'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

describe('Pruebas en <GifGrid />', () => {
  const category = 'One Punch'

  test('debe de mostrar el loading inicialmente', () => {
    render(<GifGrid category={category} />)
    // screen.debug()
    expect(screen.getByText('Cargando...')).toBeTruthy()
    expect(screen.getByText(category)).toBeTruthy()
  })
})
