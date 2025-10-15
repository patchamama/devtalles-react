// import { mockGifs } from '../mock-data/gifs.mock'
import { CustomHeader } from '../shared/components1/CustomHeader'
import { SearchBar } from '../shared/components/SearchBar'
import { PreviousSearches } from '../gifs/PreviousSearches'
import { GifList } from '../shared/components/GifList'
import { useGifs } from '../gifs/hooks/useGifs'

export const GifsApp = () => {
  const { gifs, previousTerms, handleSearch, handleTermClicked } = useGifs()

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
