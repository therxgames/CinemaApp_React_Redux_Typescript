import { Movie } from "types/Movie"

export interface MoviesState {
    movies:   Movie[]
    page:     number
    loading:  boolean
    error:    string | null
}

export enum MoviesActionTypes {
    FETCH_MOVIES         = 'FETCH_MOVIES',
    FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS',
    FETCH_MOVIES_ERROR   = 'FETCH_MOVIES_ERROR',
}

export interface FetchMoviesAction {
    type:    MoviesActionTypes.FETCH_MOVIES
}

export interface FetchMoviesSuccess {
    type:    MoviesActionTypes.FETCH_MOVIES_SUCCESS
    payload: Movie[]
}

export interface FetchMoviesError {
    type:    MoviesActionTypes.FETCH_MOVIES_ERROR
    payload: string
}


export type MoviesAction = FetchMoviesAction | FetchMoviesSuccess | FetchMoviesError;