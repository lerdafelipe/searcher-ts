import { useState, useRef, useCallback, useEffect } from "react"
import { type moviesArray, type query, type movieType } from '../types'

const searchMovies = async (search: query): Promise<moviesArray> => {
    if (search === '') return []
  
    try {
      const res = await fetch(`https://www.omdbapi.com/?apikey=95774001&s=${search}`)
      const json = await res.json()
  
      return json?.Search
    } catch {
      throw new Error('Error searching movies')
    }
}

export const useMovies = (search: query) => {
  const [movies, setMovies] = useState<moviesArray>([])
  const lastQuery = useRef(search)

  const getMovies = async (search: query): Promise<void> => {
    if (lastQuery.current === search || !search || search.length <= 3) return
    const newMovies = await searchMovies(search)
    setMovies(newMovies)
  }

  useEffect(() => {
    getMovies(search)
  }, [search])

  return { movies, getMovies}
}
