import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/components/GifGrid'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs') // Hace que useFetchGifs sea un mock

describe('Pruebas en <GifGrid />', () => {
  const category = 'One Punch'

  test('debe de mostrar el loading inicialmente', () => {
    useFetchGifs.mockReturnValue({
      // Mock function
      images: [],
      isLoading: true,
    })
    render(<GifGrid category={category} />)
    // screen.debug()
    expect(screen.getByText('Cargando...')).toBeTruthy()
    expect(screen.getByText(category)).toBeTruthy()
  })

  test('debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        url: 'https://localhost/something.jpg',
        title: 'A title',
      },
      {
        id: '123',
        url: 'https://localhost/something.jpg',
        title: 'A title',
      },
    ]
    useFetchGifs.mockReturnValue({
      // Mock function
      images: gifs,
      isLoading: false,
    })
    render(<GifGrid category={category} />)
    screen.debug()
    expect(screen.queryByText('Cargando...')).toBeNull()
    expect(screen.getByText(category)).toBeTruthy()
    expect(screen.getAllByRole('img').length).toBe(gifs.length)
  })
})
