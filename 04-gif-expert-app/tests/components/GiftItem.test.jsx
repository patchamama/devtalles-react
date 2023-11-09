import { render } from '@testing-library/react'
import GifItem from '../../src/components/GifItem'

describe('Pruebas en <GifItem />', () => {
  test('debe de hacer match con el snapshot', () => {
    const title = 'A title'
    const url = 'https://localhost/something.jpg'
    const container = render(<GifItem title={title} url={url} />)
    expect(container).toMatchSnapshot()
  })
})
