import { Movie } from "types/Movie"

export interface MovieState {
    movie:    Movie | null
    loading:  boolean
    error:    string | null
}

export enum MovieActionTypes {
    FETCH_MOVIE         = 'FETCH_MOVIE',
    FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS',
    FETCH_MOVIE_ERROR   = 'FETCH_MOVIE_ERROR',
}

export interface FetchMovieAction {
    type:    MovieActionTypes.FETCH_MOVIE
}

export interface FetchMovieSuccess {
    type:    MovieActionTypes.FETCH_MOVIE_SUCCESS
    payload: Movie
}

export interface FetchMovieError {
    type:    MovieActionTypes.FETCH_MOVIE_ERROR
    payload: string
}


export type MovieAction = FetchMovieAction | FetchMovieSuccess | FetchMovieError;