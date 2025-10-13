import { useRef, useState } from 'react'
import { getGifsByQuery } from './../actions/get-gifs-by-query.action'
import type { Gif } from './../../interfaces/gif.interface'

// const gifsCache: Record<string, Gif[]> = {
//   // goku: [],
//   // saitama: [],
// }

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([])
  const [previousTerms, setPreviousTerms] = useState<string[]>([])

  const gifsCache = useRef<Record<string, Gif[]>>({})

  const handleSearch = async (query: string = '') => {
    const searchValue: string = query.trim().toLowerCase()
    if (searchValue.length === 0) return
    if (previousTerms.includes(searchValue)) return
    setPreviousTerms([searchValue, ...previousTerms].splice(0, 8))

    const gifs = await getGifsByQuery(query)
    setGifs(gifs)
    gifsCache.current[query] = gifs
  }

  const handleTermClicked = async (term: string) => {
    // console.log({ term })
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term])
      return
    }
    const gifs = await getGifsByQuery(term)
    setGifs(gifs)
  }

  return {
    gifs,
    handleSearch,
    handleTermClicked,
    previousTerms,
  }
}
