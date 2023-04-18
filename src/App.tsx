import { useEffect } from 'react'
import './App.css'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App() {
  const {query, search, handleChange} = useSearch()
  const { movies, getMovies} = useMovies(search)

  const handleSubmit = (event: React.FormEvent<HTMLElement>): void => {
    event.preventDefault()
    getMovies(search)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type='text' value={query} name='query' placeholder='Cars...' />
        <button>Search Movie</button>
      </form>
      <section>
        {movies.map(movie => <Card key={movie.imdbID} title={movie.Title} year={movie.Year} poster={movie.Poster} />)}
      </section>
    </div>
  )
}

export default App

interface cardProps {
  poster: string
  title: string
  year: string
}

const Card: React.FC<cardProps> = ({poster, title, year}) => {
  return (
    <aside>
      <div>
        <img alt='title' src={poster} />
      </div>
      <h3>{title}</h3>
      <p>{year}</p>
    </aside>
  )
}