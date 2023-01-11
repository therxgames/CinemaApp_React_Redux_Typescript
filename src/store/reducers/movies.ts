import { MoviesAction, MoviesActionTypes, MoviesState } from "../types/movies";

const initialState: MoviesState = {
    movies:  [],
    page:    1,
    loading: false,
    error:   null,
}

export const movies = (state = initialState, action: MoviesAction): MoviesState  => {
    switch (action.type) {
        case MoviesActionTypes.FETCH_MOVIES:
            return {
                ...state,
                movies: [...state.movies], 
                loading: true, 
                error: null
            }

        case MoviesActionTypes.FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                movies: [...state.movies, ...action.payload], 
                page: state.page + 1,
                loading: false, 
            }

        case MoviesActionTypes.FETCH_MOVIES_ERROR:
            return {
                ...state,
                movies: [...state.movies], 
                loading: false, 
                error: action.payload
            }

        default: 
            return state;
    }
}