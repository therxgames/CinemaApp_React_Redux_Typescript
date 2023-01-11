import axios from "axios";
import { Dispatch } from "react";
import { SerialAction, SerialActionTypes } from "store/types/serial";

export const fetchSerial = (id: number) => {
    return async (dispatch: Dispatch<SerialAction>) => {
        try {
            dispatch({ type: SerialActionTypes.FETCH_SERIAL});

            const response = await axios.get(`https://api.themoviedb.org/3/tv/${id}`, {
                params: {
                    api_key: "686fcbb5e00cd93560a2d826dd970d02",
                    language: "en-EN",
                    append_to_response: "videos,credits"
                }
            });
            
            dispatch({
                type:    SerialActionTypes.FETCH_SERIAL_SUCCESS,
                payload: response.data
            });

        } catch (e: any) {
            dispatch({ 
                type:    SerialActionTypes.FETCH_SERIAL_ERROR,
                payload: e.message
            });
        }
    }
}