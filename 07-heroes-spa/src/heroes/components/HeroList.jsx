// Objetivo: Mostrar la lista de heroes

import PropTypes from 'prop-types'
import { HeroCard } from './HeroCard'
import { getHeroesByPublisher } from '../helpers'
import { useMemo } from 'react'

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]) // [publisher] is the dependency array

  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  )
}

HeroList.propTypes = {
  publisher: PropTypes.string.isRequired,
}
