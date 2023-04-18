import { useEffect, useRef, useState } from "react"
import {type query} from '../types'

export const useSearch = () => {
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState<query>('Cars')
  const isFirsSearch = useRef(true)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
    const currentQuery = event.target.value
    if (currentQuery.startsWith(' ')) return
    setQuery(currentQuery)
  }

  useEffect(() => {
    if(isFirsSearch.current){
      isFirsSearch.current = query === ''
      return
    }

    else if (query === ''){
      return
    }

    else if (query.length <= 3){
      return
    }
    setSearch(query)
  }, [query])

  return {search, query, handleChange}
}