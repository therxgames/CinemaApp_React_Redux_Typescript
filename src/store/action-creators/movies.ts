import axios from "axios";
import { Dispatch } from "react";
import { MoviesAction, MoviesActionTypes } from "../types/movies";

export const fetchMovies = (page = 1) => {
    return async (dispatch: Dispatch<MoviesAction>) => {
        try {
            dispatch({ type: MoviesActionTypes.FETCH_MOVIES});
            const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
                params: {
                    api_key: "686fcbb5e00cd93560a2d826dd970d02",
                    language: "en-EN",
                    page
                }
            });
            
            dispatch({
                type:    MoviesActionTypes.FETCH_MOVIES_SUCCESS,
                payload: response.data.results
            });

        } catch (e: any) {
            
            dispatch({ 
                type:    MoviesActionTypes.FETCH_MOVIES_ERROR,
                payload: e.message
            });
        }
    }
}