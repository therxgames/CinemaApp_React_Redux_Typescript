import axios from "axios";
import { Dispatch } from "react";
import { SerialsAction, SerialsActionTypes } from "store/types/serials";

export const fetchSerials = (page = 1) => {
    return async (dispatch: Dispatch<SerialsAction>) => {
        try {
            dispatch({ type: SerialsActionTypes.FETCH_SERIALS});
            const response = await axios.get('https://api.themoviedb.org/3/tv/popular', {
                params: {
                    api_key: "686fcbb5e00cd93560a2d826dd970d02",
                    language: "en-EN",
                    page
                }
            });
            
            dispatch({
                type:    SerialsActionTypes.FETCH_SERIALS_SUCCESS,
                payload: response.data.results
            });

        } catch (e: any) {
            
            dispatch({ 
                type:    SerialsActionTypes.FETCH_SERIALS_ERROR,
                payload: e.message
            });
        }
    }
}