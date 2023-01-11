import axios from "axios";
import { Dispatch } from "react";
import { MovieAction, MovieActionTypes } from "../types/movie";

export const fetchMovie = (id: number) => {
    return async (dispatch: Dispatch<MovieAction>) => {
        try {
            dispatch({ type: MovieActionTypes.FETCH_MOVIE});

            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
                params: {
                    api_key: "686fcbb5e00cd93560a2d826dd970d02",
                    language: "en-EN,hi-HI",
                    append_to_response: "videos,credits"
                }
            });
            
            dispatch({
                type:    MovieActionTypes.FETCH_MOVIE_SUCCESS,
                payload: response.data
            });

        } catch (e: any) {
            dispatch({ 
                type:    MovieActionTypes.FETCH_MOVIE_ERROR,
                payload: e.message
            });
        }
    }
}