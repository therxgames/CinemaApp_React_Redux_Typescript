import { SearchState, SearchActionTypes, SearchAction } from "store/types/search";

const initialState: SearchState = {
    keyword: '',
    results: [],
    loading: false,
    error:   null,
}

export const search = (state = initialState, action: SearchAction): SearchState  => {
    switch (action.type) {
        case SearchActionTypes.FETCH_SEARCH:
            return {
                ...state,
                loading: true,
            }

        case SearchActionTypes.FETCH_SEARCH_SUCCESS:
            return {
                ...state,
                results: action.payload, 
                loading: false, 
                error: null,
            }

        case SearchActionTypes.FETCH_SEARCH_ERROR:
            return {
                ...state,
                results: [],
                loading: false, 
                error: action.payload
            }

        case SearchActionTypes.CHANGE_SEARCH:
            return {
                ...state,
                keyword: action.payload
            }

        case SearchActionTypes.ZEROING_SEARCH:
            return {
                ...state,
                results: []
            }    

        default: 
            return state;
    }
}