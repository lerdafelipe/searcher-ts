export type query= string

export interface movieType {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export type moviesArray = movieType[]