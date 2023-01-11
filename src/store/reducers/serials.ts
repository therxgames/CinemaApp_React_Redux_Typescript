import { SerialsAction, SerialsActionTypes, SerialsState } from "store/types/serials";

const initialState: SerialsState = {
    serials:  [],
    page: 1,
    loading: false,
    error:   null,
}

export const serials = (state = initialState, action: SerialsAction): SerialsState  => {
    switch (action.type) {
        case SerialsActionTypes.FETCH_SERIALS:
            return {
                ...state,
                loading: true, 
                error: null
            }

        case SerialsActionTypes.FETCH_SERIALS_SUCCESS:
            return {
                ...state,
                serials: [...state.serials, ...action.payload], 
                page: state.page + 1,
                loading: false, 
            }

        case SerialsActionTypes.FETCH_SERIALS_ERROR:
            return {
                ...state,
                loading: false, 
                error: action.payload
            }

        default: 
            return state;
    }
}