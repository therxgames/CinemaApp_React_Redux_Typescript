import { MovieAction, MovieActionTypes, MovieState } from "../types/movie"

const initialState: MovieState = {
    movie:   null,
    loading: false,
    error:   null,
}

export const movie = (state = initialState, action: MovieAction): MovieState  => {
    switch (action.type) {
        case MovieActionTypes.FETCH_MOVIE:
            return {
                ...state,
                loading: true, 
                error: null
            }

        case MovieActionTypes.FETCH_MOVIE_SUCCESS:
            return {
                movie: action.payload, 
                loading: false, 
                error: null,
            }

        case MovieActionTypes.FETCH_MOVIE_ERROR:
            return {
                ...state,
                loading: false, 
                error: action.payload
            }

        default: 
            return state;
    }
}