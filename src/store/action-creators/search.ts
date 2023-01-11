import axios from "axios";
import { Dispatch } from "react";
import { ChangeSearch, SearchAction, SearchActionTypes, ZeroingSearch } from "store/types/search";

export const fetchSearch = (keyword: string) => {
    return async (dispatch: Dispatch<SearchAction>) => {
        try {
            dispatch({ 
                type: SearchActionTypes.FETCH_SEARCH,
            });

            const response = await axios.get(`https://api.themoviedb.org/3/search/multi`, {
                params: {
                    api_key: "686fcbb5e00cd93560a2d826dd970d02",
                    language: "en-EN",
                    query: keyword,
                }
            });

            dispatch({
                type:    SearchActionTypes.FETCH_SEARCH_SUCCESS,
                payload: response.data.results
            });
        } catch (e: any) {
            dispatch({ 
                type:    SearchActionTypes.FETCH_SEARCH_SUCCESS,
                payload: e.message
            });
        }
    }
}


export const changeSearch = (keyword: string): ChangeSearch => {
    return {
        type: SearchActionTypes.CHANGE_SEARCH,
        payload: keyword
    };
}

export const zeroingSearch = (): ZeroingSearch => {
    return {
        type: SearchActionTypes.ZEROING_SEARCH,
    };
}