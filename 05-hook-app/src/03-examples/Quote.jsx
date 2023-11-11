import { PropTypes } from 'prop-types'

export const Quote = ({ name, image, species }) => {
  return (
    <blockquote className='blockquote text-end'>
      <img src={image} alt={name} />
      <p className='mb-1'>{name}</p>
      <footer className='blockquote-footer'>{species}</footer>
    </blockquote>
  )
}

Quote.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
}
