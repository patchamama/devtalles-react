// import { mockGifs } from '../mock-data/gifs.mock'
import { CustomHeader } from '../shared/components1/CustomHeader'
import { SearchBar } from '../shared/components/SearchBar'
import { PreviousSearches } from '../gifs/PreviousSearches'
import { GifList } from '../shared/components/GifList'
import { useState } from 'react'
import { getGifsByQuery } from '../gifs/actions/get-gifs-by-query.action'
import type { Gif } from '../interfaces/gif.interface'

export const GifsApp = () => {
  const [gifs, setGifs] = useState<Gif[]>([])
  const [previousTerms, setPreviousTerms] = useState<string[]>([])

  const handleSearch = async (query: string = '') => {
    const searchValue: string = query.trim().toLowerCase()
    // while (searchValue.includes('  '))
    //   searchValue = searchValue.replace('. ', ' ')
    if (searchValue.length === 0) return
    if (previousTerms.includes(searchValue)) return

    // const valueFounded: string | undefined = previousTerm.find(
    //   (value) => value === searchValue
    // )
    // const endValue: string[] = [searchValue, ...previousTerm]
    // if (endValue.length > 8) endValue.pop()

    setPreviousTerms([searchValue, ...previousTerms].splice(0, 8))

    const gifs = await getGifsByQuery(query)
    setGifs(gifs)

    // console.log({ searchValue, previousTerm: previousTerm.join() })
  }

  const handleTermClicked = async (term: string) => {
    console.log({ term })
    const gifs = await getGifsByQuery(term)
    setGifs(gifs)
  }

  return (
    <>
      <CustomHeader
        title='Buscador de Gifs'
        description='Descubre y comparte el gif perfecto'
      />

      <SearchBar placeHolder='Busca lo que quieras...' onQuery={handleSearch} />

      <PreviousSearches
        title='Búsquedas previas'
        searches={previousTerms}
        onLabelClick={handleTermClicked}
      />

      <GifList gifs={gifs} />
    </>
  )
}
